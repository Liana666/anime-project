# 1 уровень (необходимый минимум)

## React

<li> Пишем функциональные компоненты c хуками в приоритете над классовыми. ✔️
<li> Есть четкое разделение на умные и глупые компоненты. ✔️ 
( <a href="https://github.com/Liana666/anime-project/tree/develop/src/components/details">Details</a>, 
<a href="https://github.com/Liana666/anime-project/tree/develop/src/components/favorites">Favorites</a>,
<a href="https://github.com/Liana666/anime-project/tree/develop/src/components/filter">Filter</a>... )
<li> Есть рендеринг списков. ✔️ 
( <a href="https://github.com/Liana666/anime-project/blob/develop/src/components/anime/AnimeList/AnimeList.tsx">AnimeList</a>,
<a href="https://github.com/Liana666/anime-project/blob/develop/src/components/favorites/FavoritesAnime/FavoritesAnime.tsx">FavoritesAnime</a>,
<a href="https://github.com/Liana666/anime-project/blob/develop/src/components/history/HistoryList/HistoryList.tsx">HistoryList</a>... )
<li> Реализована хотя бы одна форма. ✔️ 
( <a href="https://github.com/Liana666/anime-project/blob/develop/src/components/auth/Form/Form.tsx">Form</a> )
<li> Есть применение Контекст API. ✔️
( <a href="https://github.com/Liana666/anime-project/blob/develop/src/index.tsx">index</a> )
<li> Есть применение предохранителя. ✔️ 
( <a href="https://github.com/Liana666/anime-project/blob/develop/src/components/anime/AnimeList/AnimeListContainer.tsx">AnimeListContainer</a>, 
<a href="https://github.com/Liana666/anime-project/blob/develop/src/components/details/DetailsAnimeContainer.tsx">DetailsAnimeContainer</a> )
<li> Есть хотя бы один кастомный хук. ✔️  
( <a href="https://github.com/Liana666/anime-project/tree/develop/src/hooks">hooks</a> )
<li> Хотя бы несколько компонентов используют PropTypes. ✔️  
( <a href="https://github.com/Liana666/anime-project/blob/develop/src/components/update/UpdateAnime.tsx">UpdateAnime</a>, 
<a href="https://github.com/Liana666/anime-project/blob/develop/src/components/auth/Form/Form.tsx">Form</a> )
<li> Поиск не должен триггерить много запросов к серверу. ✔️ Поиск триггериться только по нажатию кнопки.

## Redux

<li> Используем Modern Redux with Redux Toolkit . ✔️  
( <a href="https://github.com/Liana666/anime-project/tree/develop/src/store">store</a> )
<li> Используем слайсы. ✔️  
( <a href="https://github.com/Liana666/anime-project/tree/develop/src/store/slices">slices</a> )
<li> Есть хотя бы одна кастомная мидлвара. ✔️  
( <a href="https://github.com/Liana666/anime-project/blob/develop/src/store/middleware/customMiddleWare.ts">middleware</a> )
<li> Используется RTK Query. ✔️  
( <a href="https://github.com/Liana666/anime-project/blob/develop/src/store/api/animeApi.ts">animeApi</a> )
<li> Используется Transforming Responses. ✔️  
( <a href="https://github.com/Liana666/anime-project/blob/develop/src/store/api/animeApi.ts">animeApi</a> )

# 2 уровень (необязательный)

<li> Проведена оптимизация приложения. 
<li> Используются мемоизированные селекторы. ✔️ 
( <a href="https://github.com/Liana666/anime-project/blob/develop/src/store/selectors/selectors.ts">selectors</a> )
<li> Используется нормализованная структура стейта.  
<li> Подключен storybook и созданы несколько сторисов. ✔️ 
( <a href="https://github.com/Liana666/anime-project/tree/develop/src/components/shared/Button">Button</a>,
<a href="https://github.com/Liana666/anime-project/tree/develop/src/components/shared/Input">Input</a> )
<li> Использование TypeScript. ✔️
