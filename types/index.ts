// Taha Rashid
// June 19, 2025

export interface Link {
    link: string
    name?: string
    image?: string
}

export interface IProductCardProp {
    id: number
    coverImage: string
    isOwned: boolean
    isFavorite: boolean
    developers: string[]
    year: number
    title: string
    platformLogos: string[]
    generes: string[]
}