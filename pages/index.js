import Form from "@/components/Form";
import useSWR from "swr";
import Link from "next/link";

export default function Home() {
  const { data, isLoading, mutate } = useSWR("/api/todos");

  async function handleAddTask(newTask) {
    const response = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    if (response.ok) {
      mutate();
    }
  }

  if (isLoading) return null;

  return (
    <>
      <Form onSubmit={handleAddTask} />
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>
            <h2>{todo.task}</h2>
            <Link href={`/todos/${todo.id}/edit`}>edit</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
