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

export interface IGame {
    id: string  // GUID
    dtc: Date
    name: string
    description: string
    cover: string
    developers: IDeveloper[]
    genres: IGenre[]
    categories: ICategory[]
    images: IImage[]
    videos: IVideo[]
    gameVariations: IGameVariation[]
}

export interface IGameCreate {
    dtc: Date
    name: string
    description: string
    cover: string
    developerIds: number[]
    genreIds: number[]
    categoryIds: number[]
    images: IImage[]
    videos: IVideo[]
    gameVariationIds: number[]
}

export interface IGameUpdate {
    id: string
    dtc: Date
    name: string
    description: string
    cover: string
    developerIds: number[]
    genreIds: number[]
    categoryIds: number[]
    images: IImage[]
    videos: IVideo[]
    gameVariationIds: number[]
}

export interface IDeveloper {
    id: number
    name: string
    country: string
}

export interface IGenre {
    id: number
    name: string
}

export interface ICategory {
    id: number
    name: string
}

export interface IImage {
    id: number
    url: string
    source: string
}

export interface IVideo {
    id: number
    url: string
    source: string
}

export interface IGameVariation {
    id: number
    gameIds: string[]   // array of GUIDs
}

export interface IList {
    id: string  // GUID
    dtc: Date
    name: string
    description: string
    games: IGame[]
}

export interface IListCreate {
    id: string  // TODO: remove id field
    dtc: Date
    name: string
    description: string
    gameIds: string[]   // GUIDs
}

export interface IListUpdate {
    id: string  // GUID
    dtc: Date
    name: string
    description: string
    gameIds: string[]   // GUIDs
}
