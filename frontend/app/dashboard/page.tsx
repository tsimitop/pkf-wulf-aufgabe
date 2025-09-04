"use client";

import { useEffect, useState } from "react";
import { fetchWidgets, deleteWidget, createWidget } from "@/utils/api";
import { WeatherElement, cities } from "@/utils/locations";
import WidgetList from "@/components/WidgetList";

export default function Dashboard() {
  const [widgets, setWidgets] = useState<any[]>([]);
  const [selectedCity, setSelectedCity] = useState<WeatherElement | null>(cities[0]);
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
    setWidgets([...widgets, newWidget]);
  };

  const widgetCityNames = widgets.map((w) => w.city.toLowerCase());

  const filteredCities = cities.filter((city) =>
	  city.name.toLowerCase().includes(query.toLowerCase()) &&
    !widgetCityNames.includes(city.name.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Searchable city input */}
      <div className="flex items-center gap-2 max-w-md">
        <div className="relative flex-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search city..."
            className="border p-2 w-full bg-black text-green-400"
          />
          {query && filteredCities.length > 0 && (
            <ul className="absolute w-full bg-black border mt-1 max-h-40 overflow-auto text-green-400 z-10">
              {filteredCities.map((city) => (
                <li
                  key={city.name}
                  onClick={() => {
                    setSelectedCity(city);
                    setQuery(city.name);
                  }}
                  className="p-2 cursor-pointer hover:bg-green-400 hover:text-black"
                >
                  {city.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          onClick={() => {
            if (
              selectedCity &&
              !widgets.some(w => w.city.toLowerCase() === selectedCity.name.toLowerCase())
            ) {
              handleCreate(selectedCity.name, selectedCity.latitude, selectedCity.longitude)
              setQuery("");
              setSelectedCity(null);
            }
          }}
          disabled={!selectedCity}
          className="ml-2 px-4 py-2 bg-purple-700 text-green-400 rounded hover:bg-purple-700"
        >
          Add city
        </button>
      </div>

      <div className="mt-6">
        <WidgetList widgets={widgets} onDelete={handleDelete} />
      </div>
    </div>
  );
}
