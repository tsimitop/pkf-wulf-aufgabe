"use client";

import WidgetCard from "./WidgetCard";

type Widget = {
  _id: string;
  location: string;
  temperature: number;
};

type WidgetListProps = {
  widgets: Widget[];
  onDelete: (id: string) => void;
};

export default function WidgetList({ widgets, onDelete }: WidgetListProps) {
  if (widgets.length === 0) {
    return <p className="text-gray-500">No widgets yet. Add one!</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {widgets.map((w) => (
        <WidgetCard
          key={w._id}
          id={w._id}
          location={w.location}
          temperature={w.temperature}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
