# 1 уровень (необходимый минимум)

## React

<li> Пишем функциональные компоненты c хуками в приоритете над классовыми. ✔️
<li> Есть четкое разделение на умные и глупые компоненты. ✔️ <br/>
<a href="anime-project/src/components/details/">Details/</a> <br/>
<a href="anime-project/src/components/favorites/">Favorites/</a> <br/>
<a href="anime-project/src/components/filter/">Filter/</a>...
<li> Есть рендеринг списков. ✔️ <br/>
<a href="anime-project/src/components/anime/AnimeList/AnimeList.tsx/">AnimeList/</a> <br/>
<a href="anime-project/src/components/favorites/FavoritesAnime/FavoritesAnime.tsx/">FavoritesAnime/</a> <br/>
<a href="anime-project/src/components/history/HistoryList/HistoryList.tsx/">HistoryList/</a>...
<li> Реализована хотя бы одна форма. ✔️ <br/>
<a href="anime-project/src/components/auth/Form/Form.tsx/">Form</a>
<li> Есть применение Контекст API. ✔️ <br/>
<a href="anime-project/src/index.tsx/">index</a>
<li> Есть применение предохранителя. ✔️ <br/>
<a href="anime-project/src/components/anime/AnimeList/AnimeListContainer.tsx/">AnimeListContainer</a> <br/>
<a href="anime-project/src/components/details/DetailsAnimeContainer.tsx/">DetailsAnimeContainer</a>
<li> Есть хотя бы один кастомный хук. ✔️ <br/>
<a href="anime-project/src/hooks/">hooks</a>
<li> Хотя бы несколько компонентов используют PropTypes. ✔️ <br/>
<a href="anime-project/src/components/update/UpdateAnime.tsx/">UpdateAnime</a> <br/>
<a href="anime-project/src/components/auth/Form/Form.tsx/">Form</a>
<li> Поиск не должен триггерить много запросов к серверу. ✔️ Поиск триггериться только по нажатию кнопки.

## Redux

<li> Используем Modern Redux with Redux Toolkit . ✔️ <br/>
<a href="anime-project/src/store/">store/</a> 
<li> Используем слайсы. ✔️ <br/>
<a href="anime-project/src/store/slices/">slices/</a> 
<li> Есть хотя бы одна кастомная мидлвара. ✔️ <br/>
<a href="anime-project/src/store/middleware/">middleware/</a>
<li> Используется RTK Query. ✔️ <br/>
<a href="anime-project/src/store/api/animeApi.ts/">animeApi/</a>
<li> Используется Transforming Responses. ✔️ <br/>
<a href="anime-project/src/store/api/animeApi.ts/">animeApi/</a>

# 2 уровень (необязательный)

<li> Проведена оптимизация приложения. 
<li> Используются мемоизированные селекторы. ✔️<br/>
<a href="anime-project/src/store/selectors/selectors.ts /">selectors/</a>
<li> Используется нормализованная структура стейта. <br/>
<li> Подключен storybook и созданы несколько сторисов. ✔️<br/>
<a href="anime-project/src/components/shared/Button/">Button/</a>
<a href="anime-project/src/components/shared/Input/">Input/</a>
<li> Использование TypeScript. ✔️<br/>
