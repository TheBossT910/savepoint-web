// Taha Rashid
// June 19, 2025

export interface Link {
    link: string
    name: string
}

export interface IProductCardProp {
    coverImage: string
    isOwned: boolean
    isFavorite: boolean
    developers: string[]
    year: number
    title: string
    platformLogos: string[]
    generes: string[]
}