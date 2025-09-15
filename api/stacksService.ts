// Taha Rashid
// Sept 15, 2025

import https from "~/server/https"
import type { IStackCreate, IStackUpdate } from "~/types"

// get all stacks
export const getStacks = () => https.get('stacks')

// get specific stack
export const getStack = (stackId: string) => https.get(`stacks/${stackId}`)

// create new stack
export const createStack = (stack: IStackCreate) => https.post('stacks', stack)

// update specific stack
export const updateStack = (stack: IStackUpdate) => https.put('stacks', stack)

// delete specific stack
export const deleteStack = (stackId: string) => https.delete(`stacks/${stackId}`);
