export type InitialStateUsersType = {
    email: string | null
}

export type FormContainerType = {
    btnValue: string
    handleSubmit: (email: string, password: string) => void 
}

export type FormType = {
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


export type ItemAnimeType = {
    anilist_id: number
    mal_id: number
    format: number
    status: number
    titles: TitlesType
    descriptions: DescriptionsType
    start_date: string
    end_date: string
    weekly_airing_day: number
    season_period: number
    season_year: number
    episodes_count: number
    episode_duration: number
    cover_image: string
    cover_color: string
    banner_image: string
    genres: string[]
    sagas: SagasType
    score: number
    recommendations: number[]
    nsfw: boolean
    has_cover_image: boolean
    id: number
}


type TitlesType = {
    rj?: string,
    en: string
    jp: string
    fr: string
    it: string
}

type DescriptionsType = {
    en: string
    jp: string
    fr: string
    it: string
}

type SagasType = {
    titles: TitlesType
    descriptions: DescriptionsType
    episode_from: number
    episode_to: number
    episodes_count: number
}

export interface AnimeResponse {
    year: string
    genres: string
}



