import { Coordinates } from 'src/modules/gateway/gateway.interface';

export function calculateDistance(
  coord1: Coordinates,
  coord2: Coordinates,
): number {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (coord2.latitude - coord1.latitude) * (Math.PI / 180);
  const dLon = (coord2.longitude - coord1.longitude) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(coord1.latitude * (Math.PI / 180)) *
      Math.cos(coord2.latitude * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
}
export function findCircleIntersection(
  passenger: Coordinates,
  driver: Coordinates,
  radius: number,
): boolean {
  // Calculate distances between passenger and driver
  const distance = calculateDistance(passenger, driver);

  // Check if the distance is less than or equal to the sum of the radii
  const combinedRadius = radius * 2; // Combined radius of both circles
  return distance <= combinedRadius;
}
