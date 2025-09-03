export type WeatherElement = {
  name: string;
  latitude: number;
  longitude: number;
};

export const cities: WeatherElement[] = [
  // 10 German cities
  { name: 'Berlin', latitude: 52.52, longitude: 13.41 },
  { name: 'Hamburg', latitude: 53.55, longitude: 9.99 },
  { name: 'Munich', latitude: 48.14, longitude: 11.58 },
  { name: 'Cologne', latitude: 50.94, longitude: 6.95 },
  { name: 'Frankfurt', latitude: 50.11, longitude: 8.68 },
  { name: 'Stuttgart', latitude: 48.78, longitude: 9.18 },
  { name: 'Düsseldorf', latitude: 51.23, longitude: 6.78 },
  { name: 'Dortmund', latitude: 51.51, longitude: 7.46 },
  { name: 'Essen', latitude: 51.45, longitude: 7.01 },
  { name: 'Leipzig', latitude: 51.34, longitude: 12.38 },

  // Some world capitals
  { name: 'Washington, D.C.', latitude: 38.90, longitude: -77.04 },
  { name: 'London', latitude: 51.51, longitude: -0.13 },
  { name: 'Paris', latitude: 48.85, longitude: 2.35 },
  { name: 'Rome', latitude: 41.90, longitude: 12.49 },
  { name: 'Madrid', latitude: 40.42, longitude: -3.70 },
  { name: 'Ottawa', latitude: 45.42, longitude: -75.69 },
  { name: 'Canberra', latitude: -35.30, longitude: 149.13 },
  { name: 'Tokyo', latitude: 35.68, longitude: 139.76 },
  { name: 'Beijing', latitude: 39.90, longitude: 116.40 },
  { name: 'Moscow', latitude: 55.75, longitude: 37.62 },
  { name: 'New Delhi', latitude: 28.61, longitude: 77.21 },
  { name: 'Brasília', latitude: -15.79, longitude: -47.88 },
  { name: 'Buenos Aires', latitude: -34.61, longitude: -58.38 },
  { name: 'Cairo', latitude: 30.04, longitude: 31.23 },
  { name: 'Nairobi', latitude: -1.29, longitude: 36.82 },
  { name: 'Bangkok', latitude: 13.75, longitude: 100.51 },
  { name: 'Seoul', latitude: 37.56, longitude: 126.97 },
  { name: 'Jakarta', latitude: -6.21, longitude: 106.85 },
  { name: 'Riyadh', latitude: 24.71, longitude: 46.68 },
  { name: 'Mexico City', latitude: 19.43, longitude: -99.13 },
];
