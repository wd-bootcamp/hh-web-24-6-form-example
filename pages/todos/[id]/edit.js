import Form from "@/components/Form";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function EditPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useSWR(`/api/todos/${id}`);

  async function handleEdit(updatedTodo) {
    const response = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    });

    if (response.ok) {
      router.push("/");
    }
  }

  function handleCancel() {
    router.push("/");
  }

  if (isLoading || !router.isReady) return null;

  return (
    <Form
      defaultValue={data}
      onSubmit={handleEdit}
      onCancel={handleCancel}
      editMode
    />
  );
}
