const API_BASE = "http://localhost:5000";

export async function fetchWidgets() {
  try {
	  const res = await fetch(`${API_BASE}/widgets`);
	  const { widgets } = await res.json();
	  return widgets ?? [];
  } catch (error) {
	  console.log(`Error: ${error}`);
	  return [];
  }
}

export async function createWidget(name: string, lat: number, lon: number) {
  const res = await fetch(`${API_BASE}/widgets`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, lat, lon }),
  });
  const { widget } = await res.json();
  return widget;
//   return res.json();
}

export async function deleteWidget(id: string) {
  const res = await fetch(`${API_BASE}/widgets/${id}`, { method: "DELETE" });
  if (!res.ok) {
  	throw new Error(`Failed to delete widget with id ${id}`);
  }
  return true;
}
