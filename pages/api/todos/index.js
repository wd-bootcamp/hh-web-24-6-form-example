import { addTask, tasks } from "@/lib/data.js";

export default function handler(request, response) {
  if (request.method === "GET") {
    response.json(tasks);
    return;
  }

  if (request.method === "POST") {
    const newId = crypto.randomUUID();

    const newTaskWithId = {
      ...request.body,
      id: newId,
    };

    addTask(newTaskWithId);

    response.json({ status: "success" });
    return;
  }
}
