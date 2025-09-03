"use client";

import { useEffect, useState } from "react";
import { fetchWidgets, deleteWidget, createWidget } from "@/utils/api";
import { WeatherElement, cities } from "@/utils/locations";
import WidgetList from "@/components/WidgetList";

export default function Dashboard() {
  const [widgets, setWidgets] = useState<any[]>([]);
  const [selectedCity, setSelectedCity] = useState<WeatherElement>(cities[0]);
  const [query, setQuery] = useState("");

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

  const handleCreate = async (name: string, lat: number, lon: number) => {
    const newWidget = await createWidget(name, lat, lon);
	// console.log('New widget:' + newWidget);
    setWidgets([...widgets, newWidget]);
	// console.log(widgets);
  };

  const filteredCities = cities.filter((city) =>
	city.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Dropdown to select city */}
      <select
        value={selectedCity?.name || ""}
        onChange={(e) => {
          const city = cities.find(c => c.name === e.target.value);
          if (city) setSelectedCity(city || null);
        }}
        className="border p-2 mb-4 bg-black text-green-400"
      >
        {cities
		.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>

      <button
        onClick={() =>
          handleCreate(selectedCity.name, selectedCity.latitude, selectedCity.longitude)
        }
        className="ml-2 px-4 py-2 bg-purple-700 text-green-400 rounded hover:bg-purple-700"
      >
        Add city
      </button>

      <div className="mt-6">
        <WidgetList widgets={widgets} onDelete={handleDelete} />
      </div>
    </div>
  );
}
