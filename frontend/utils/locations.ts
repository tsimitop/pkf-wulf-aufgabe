export type WeatherElement = {
  name: string;
  latitude: number;
  longitude: number;
};

export const cities: WeatherElement[] = [
  { name: 'Berlin', latitude: 52.52, longitude: 13.41},
  { name: 'Paris', latitude: 53.55, longitude: 9.99},
  { name: 'Hamburg', latitude: 48.85, longitude: 2.35},
]
