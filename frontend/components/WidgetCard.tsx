"use client";

type WidgetCardProps = {
  id: string;
  name: string;
  location: string;
  temperature: number;
  onDelete: (id: string) => void;
};

export default function WidgetCard({ id, name, location, temperature, onDelete }: WidgetCardProps) {
  return (
    <div className="flex justify-between items-center p-4 border rounded-lg shadow-lg bg-black border-green-500">
      <div>
        <h2 className="font-bold text-lg text-green-400 drop-shadow-[0_0_8px_#00FF00]">
		  {name}
		  {/* Location={location} */}
		</h2>
        <p className="text-green-300 drop-shadow-[0_0_6px_#00FF00]">
		  {temperature.toFixed(1)}°C
		</p>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="text-green-400 hover:text-green-200 font-bold drop-shadow-[0_0_8px#00FF00]"
      >
        Delete
      </button>
    </div>
  );
}
