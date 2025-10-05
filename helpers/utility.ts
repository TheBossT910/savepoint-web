// Taha Rashid
// Oct 5, 2025

// Gets a random game
// Helper function courtesy of ChatGPT
export function getRandomItem<T>(arr: T[]): T | undefined {
  if (!arr || arr.length === 0) return undefined;
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Returns a subset of random size
// Helper function courtesy of ChatGPT
export function getRandomSubset<T>(arr: T[]): T[] {
  if (!arr || arr.length === 0) return [];

  // Make a copy of the array
  const copy = [...arr];

  // Fisher-Yates shuffle
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  // Pick a random size between 1 and the array length
  const randomSize = Math.floor(Math.random() * copy.length) + 1;

  // Return the first 'randomSize' elements
  return copy.slice(0, randomSize);
}