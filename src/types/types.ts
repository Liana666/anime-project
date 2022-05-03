export type AuthForm = {
    btnValue: string
    email: string
    emailError: string
    password: string
    passwordError: string
    formValid: boolean
    passwordActive: boolean
    emailActive: boolean
    handleSubmit: (email: string, password: string) => void 
    handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleBlur: (e: React.ChangeEvent<HTMLInputElement>) => void
    handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type Genres ={
    genres: string[]
}

export type SearchAndFilterData ={
    count: number
    current_page: number
    documents: ItemAnime[]
    last_page: number
}

export type ItemAnime = {
    anilist_id?: number
    mal_id?: number
    format?: number
    status?: number
    titles: Titles
    descriptions: Descriptions
    start_date: string
    end_date: string
    weekly_airing_day?: number
    season_period: number
    season_year?: number
    episodes_count: number
    episode_duration?: number
    cover_image: string
    cover_color: string
    banner_image: string
    genres: string[]
    sagas?: Sagas
    score?: number
    recommendations?: number[]
    nsfw?: boolean
    has_cover_image?: boolean
    id: number
}


export type Titles = {
    rj: string
    en: string
    jp: string
}

export type Descriptions = {
    en: string
    jp: string
    fr: string
    it: string
}

type Sagas = {
    titles: Titles
    descriptions: Descriptions
    episode_from: number
    episode_to: number
    episodes_count: number
}

export type AnimeResponse = {
    year?: string
    genres?: string
}

export type Anime = {
    id: number 
    titles: Titles
    cover_image: string
    description: string
    genres: string[]
    start_date: string
    end_date: string
    season_period: number
    episode_duration: number
    cover_color: string
}

export type HistoryItem = {
    url: string
    date: string
    id: string
}
