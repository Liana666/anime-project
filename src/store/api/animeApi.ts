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
            query: (count: number) => `random/anime/${count}`,
            transformResponse: (response: { data: ItemAnime[] }) => {
                const anime = response.data.filter(itemAnime => itemAnime.descriptions.en && itemAnime.titles.en)
                return anime;
              },
        }),
        getGenres: build.query({
            query: (type: number) => `resources/1.0/${type}`,
            transformResponse: (response: { data: Genres }) => {
                return response.data.genres;
              },
        }),
        getFilter: build.query<ItemAnime[] , AnimeResponse>({
            query: ({year, genres}) => `anime?&year=${year}&genres=${genres}`,
            transformResponse: (response: { data: SearchAndFilterData }) => {
                return response.data.documents;
              },
        }),
        searchAnime: build.query<ItemAnime[], string | undefined>({
            query: (title) => `anime?title=${title}`,
            transformResponse: (response: { data: SearchAndFilterData }) => {
                return response.data.documents;
              },
        }),
        getItemAnime: build.query<ItemAnime, number | string>({
            query: (id) => `anime/${id}`,
            transformResponse: (response: { data: ItemAnime }) => {
                return response.data
              },
        })
    })  
})
