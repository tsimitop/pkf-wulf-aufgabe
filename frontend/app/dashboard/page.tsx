"use client";

import { useEffect, useState } from "react";
import { fetchWidgets, deleteWidget, createWidget } from "@/utils/api";

export default function Dashboard() {
  const [widgets, setWidgets] = useState<any[]>([]);

  useEffect(() => {
    fetchWidgets().then(setWidgets);
  }, []);

  const handleDelete = async (id: string) => {
	try {
		await deleteWidget(id);
		setWidgets(widgets.filter(w => w._id !== id));
	} catch (err) {
		console.error(err);
	}
  };

  const handleCreate = async (location: string) => {
    const newWidget = await createWidget(location);
    setWidgets([...widgets, newWidget]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
	  <button
	  onClick={() => handleCreate("new")}
	  className="text-purple-500"
	  >
		Add
	  </button>
      <ul>
        {widgets.map(w => (
          <li key={w._id} className="flex justify-between p-2 border mb-2 rounded">
            <span>{w.location}</span>
            <button
              onClick={() => handleDelete(w._id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
