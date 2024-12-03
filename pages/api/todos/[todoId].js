import { tasks, editTask } from "@/lib/data.js";

export default function handler(request, response) {
  const { todoId } = request.query;

  if (request.method === "GET") {
    const task = tasks.find((task) => task.id === todoId);

    if (!task) {
      response.json({ status: "error" });
      return;
    }

    response.json(task);
    return;
  }

  if (request.method === "PUT") {
    const updatedTask = request.body;

    editTask(updatedTask);

    response.json({ status: "success" });
    return;
  }
}
