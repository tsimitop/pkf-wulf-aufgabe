"use client";

type WidgetCardProps = {
  id: string;
  location: string;
  temperature: number;
  onDelete: (id: string) => void;
};

export default function WidgetCard({ id, location, temperature, onDelete }: WidgetCardProps) {
  return (
    <div className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-white">
      <div>
        <h2 className="font-semibold text-lg">{location}</h2>
        <p className="text-gray-600">{temperature.toFixed(1)}°C</p>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="text-red-600 hover:text-red-800 font-medium"
      >
        Delete
      </button>
    </div>
  );
}
