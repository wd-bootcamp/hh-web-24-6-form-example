import { addTask, tasks } from "@/lib/data.js";

export default function handler(request, response) {
  if (request.method === "GET") {
    response.json(tasks);
    return;
  }

  if (request.method === "POST") {
    const { task } = request.body;

    const newId = crypto.randomUUID();

    const newTask = {
      id: newId,
      done: false,
      task,
    };

    addTask(newTask);

    response.json({ status: "success" });
    return;
  }
}
