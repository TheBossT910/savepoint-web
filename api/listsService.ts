// Taha Rashid
// Sept 15, 2025

import https from "~/server/https"
import type { IListCreate, IListUpdate } from "~/types"
// import type { IGameCreate, IGameUpdate } from "~/types";

// get all lists
export const getLists = () => https.get('lists')

// get specific list
export const getList = (listId: string) => https.get(`lists/${listId}`)

// create new list
export const createList = (list: IListCreate) => https.post('lists', list)

// update specific list
export const updateList = (list: IListUpdate) => https.put('lists', list)

// delete specific list
export const deleteList = (listId: string) => https.delete(`lists/${listId}`);
