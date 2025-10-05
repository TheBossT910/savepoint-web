// Taha Rashid
// Sept 13, 2025

import https from "~/server/https"
import type { IGameCreate, IGameUpdate } from "~/types";

// get all games
export const getGames = (page: number, pageSize: number, category?: string, genre?: string, developer?:string) => https.get(`games?page=${page}&pageSize=${pageSize}&category=${category}&genre=${genre}&developer=${developer}`)

// get specific game
export const getGame = (gameId: string) => https.get(`games/${gameId}`)

// create new game
export const createGame = (game: IGameCreate) => https.post('games', game)

// update specific game
export const updateGame = (game: IGameUpdate) => https.put('games', game)

// delete specific game
export const deleteGame = (gameId: string) => https.delete(`games/${gameId}`);