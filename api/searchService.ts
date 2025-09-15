// Taha Rashid
// Sept 15, 2025

import https from "~/server/https"

// search for games
export const searchGames = () => https.get('search/games')