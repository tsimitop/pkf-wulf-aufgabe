const API_BASE = "http://localhost:5000";

export async function fetchWidgets() {
  const res = await fetch(`${API_BASE}/widgets`);
  return res.json();
}

export async function createWidget(lat: number, lon: number) {
  const res = await fetch(`${API_BASE}/widgets`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ lat, lon }),
  });
  return res.json();
}

export async function deleteWidget(id: string) {
  const res = await fetch(`${API_BASE}/widgets/${id}`, { method: "DELETE" });
  if (!res.ok) {
  	throw new Error(`Failed to delete widget with id ${id}`);
  }
  return true;
}
