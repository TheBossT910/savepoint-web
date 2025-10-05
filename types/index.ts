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
    dtc: string
    releaseDate: string
    name: string
    description: string
    cover: string
    developers: IDeveloper[]
    genres: IGenre[]
    categories: ICategory[]
    images: IImage[]
    videos: IVideo[]
    gameVariations: IGameVariation[]
    splash: string
    region: string
    reviews: IReview[]
    playTime: IPlayTime
    platforms: IPlatform[]
}

export interface IGameCreate {
    dtc: string
    releaseDate: string
    name: string
    description: string
    cover: string
    developerIds: number[]
    genreIds: number[]
    categoryIds: number[]
    images: IImage[]
    videos: IVideo[]
    gameVariationIds: number[]
    splash: string
    region: string
    reviews: IReview[]
    playTime: IPlayTime
    platformIds: number[]
}

export interface IGameUpdate {
    id: string
    dtc: string
    releaseDate: string
    name: string
    description: string
    cover: string
    developerIds: number[]
    genreIds: number[]
    categoryIds: number[]
    images: IImage[]
    videos: IVideo[]
    gameVariationIds: number[]
    splash: string
    region: string
    reviews: IReview[]
    playTime: IPlayTime
    platformIds: number[]
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
    dtc: string
    name: string
    description: string
    games: IGame[]
}

export interface IListCreate {
    dtc: string
    name: string
    description: string
    gameIds: string[]   // GUIDs
}

export interface IListUpdate {
    id: string  // GUID
    dtc: string
    name: string
    description: string
    gameIds: string[]   // GUIDs
}

export interface IStack {
    id: string  // GUID
    dtc: string
    name: string
    descripton: string
    games: IGame[]
}

export interface IStackCreate {
    dtc: string
    name: string
    descripton: string
    gameIds: string[]   // GUIDs
}

export interface IStackUpdate {
    id: string  // GUID
    dtc: string
    name: string
    descripton: string
    gameIds: string[]   // GUIDs
}

export interface IReview {
    id: number
    url?: string
    source: string
    rating: string
    comment?: string
    logo: string
}

export interface IPlatform {
    id: number
    company?: string
    hardware: string
    store?: string
    hardwareVariation?: string
    releaseDate: string
    platformLogo: string
    companyLogo?: string
    url?: string
}

export interface IPlayTime {
    main: string
    mainPlusSides: string
    completionist: string
    allStyles: string
}