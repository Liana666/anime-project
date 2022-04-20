import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ItemAnimeType } from '../types/types';
import { AnimeResponse } from '../types/types';

export const animeApi = createApi({
    reducerPath: "animeApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://api.aniapi.com/v1/"}),
    endpoints: (build) => ({
        getAnime: build.query({
            query: (count: number = 20) => `random/anime/${count}`
        }),
        getGenres: build.query({
            query: (type: number) => `resources/1.0/${type}`
        }),
        getFilter: build.query<any, AnimeResponse>({
            query: ({year, genres}) => `anime?&year=${year}&genres=${genres}`
        }),
        searchAnime: build.query<any, string>({
            query: (title) => `anime?title=${title}`
        })
    })  
})

//export default animeApi.reducer;
// export const {useGetAnimeQuery} = animeApi.reducer;