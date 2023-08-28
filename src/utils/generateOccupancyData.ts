type OccupancyData = {
  date: string;
  Standard: number;
  Deluxe: number;
  Suite: number;
}

const getRandomInt = (min: number, max: number): number => 
  Math.floor(Math.random() * (max - min + 1)) + min;

export const generateOccupancyData = (): OccupancyData[] => {
  const occupancyData: OccupancyData[] = [];

  for(let day = 1; day <= 30; day++) {
    const date = new Date(2023, 5, day);
    const formattedDate = date.toISOString().split('T')[0];

    occupancyData.push({
      date: formattedDate,
      Standard: getRandomInt(0, 100),
      Deluxe: getRandomInt(0, 100),
      Suite: getRandomInt(0, 100)
    });
  }

  return occupancyData;
};