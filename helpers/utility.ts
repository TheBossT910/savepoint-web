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

// Shuffles a given array (returning a copy)
// Helper function courtesy of ChatGPT
export function shuffleArray<T>(arr: T[]): T[] {
    const copy = [...arr]; // make a copy
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

// Splits an array into parts evenly (last part may be shorter if not divisible)
// Helper function courtesy of ChatGPT
export function splitArrayEvenly<T>(arr: T[], parts: number): T[][] {
    if (!arr || parts <= 0) return [];

    const result: T[][] = [];
    const len = arr.length;
    const size = Math.ceil(len / parts); // ensures even distribution

    for (let i = 0; i < parts; i++) {
        const start = i * size;
        const end = start + size;
        if (start >= len) break;
        result.push(arr.slice(start, end));
    }

    return result;
}