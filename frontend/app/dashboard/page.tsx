"use client";

import { useEffect, useState } from "react";
import { fetchWidgets, deleteWidget, createWidget } from "@/utils/api";
import { WeatherElement, cities } from "@/utils/locations";
import WidgetList from "@/components/WidgetList";

export default function Dashboard() {
  const [widgets, setWidgets] = useState<any[]>([]);
  const [selectedCity, setSelectedCity] = useState<WeatherElement>(cities[0]);

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

  const handleCreate = async (lat: number, lon: number) => {
    const newWidget = await createWidget(lat, lon);
    setWidgets([...widgets, newWidget]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Dropdown to select city */}
      <select
        value={selectedCity.name}
        onChange={(e) => {
          const city = cities.find(c => c.name === e.target.value);
          if (city) setSelectedCity(city);
        }}
        className="border p-2 mb-4"
      >
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>

      {/* Add button */}
      {/* <button
        onClick={() => handleCreate(selectedCity.latitude, selectedCity.longitude)}
        className="text-purple-500 ml-2"
      >
        Add city
      </button> */}
      <button
        onClick={() =>
          handleCreate(selectedCity.latitude, selectedCity.longitude)
        }
        className="ml-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Add city
      </button>

	  {/* Widget list */}

      {/* <ul className="mt-4">
        {widgets.map((w) => (
          <li
            key={w._id}
            className="flex justify-between p-2 border mb-2 rounded"
          >
            <span>
              {w.location} - {w.temperature?.toFixed(1)}°C
            </span>
            <button
              onClick={() => handleDelete(w._id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div> */}
      <div className="mt-6">
        <WidgetList widgets={widgets} onDelete={handleDelete} />
      </div>
    </div>
	
  );
}
