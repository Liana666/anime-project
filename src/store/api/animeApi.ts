import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ItemAnime } from '../../types/types';
import { AnimeResponse } from '../../types/types';
import { SearchAndFilterData } from '../../types/types';
import { Genres } from '../../types/types';

export const animeApi = createApi({
    reducerPath: "animeApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://api.aniapi.com/v1/"}),
    endpoints: (build) => ({
        getRandomAnime: build.query({
            query: (count: number = 20) => `random/anime/${count}`,
            transformResponse: (response: { data: ItemAnime[] }) => {
                return response.data;
              },
        }),
        getGenres: build.query({
            query: (type: number) => `resources/1.0/${type}`,
            transformResponse: (response: { data: Genres }) => {
                return response.data.genres;
              },
        }),
        getFilter: build.query<ItemAnime[], AnimeResponse>({
            query: ({year, genres}) => `anime?&year=${year}&genres=${genres}`,
            transformResponse: (response: { data: SearchAndFilterData }) => {
                return response.data.documents;
              },
        }),
        searchAnime: build.query<ItemAnime[], string>({
            query: (title) => `anime?title=${title}`,
            transformResponse: (response: { data: SearchAndFilterData }) => {
                return response.data.documents;
              },
        }),
        getItemAnime: build.query<ItemAnime, number>({
            query: (id) => `anime/${id}`,
            transformResponse: (response: { data: any }) => {
                console.log(response)
                return response.data;
              },
        })
    })  
})
