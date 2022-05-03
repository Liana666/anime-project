import { Descriptions } from '../../types/types';
import { Titles } from "../../types/types";
import parse from 'html-react-parser';

export const preparingAnimeDetails = (
    genres: string[], 
    titles: Titles, 
    start_date: string, 
    end_date: string, 
    descriptions: Descriptions
    ) => {

    const isScroll = genres.length > 6;
    const titleStart = titles.en && titles.en.split(" ").slice(0, -1).join(" ");
    const titleEnd = titles.en && titles.en.split(" ").pop();
    const titleJp = titles.jp && titles.jp.slice(0, 9);
    const dateStart = start_date.slice(0, 10);
    const dateEnd = end_date.slice(0, 10); 
    const descriptionParse = descriptions.en && parse( descriptions.en.slice(0, 150) + "...");
    const description = Array.isArray(descriptionParse) ?
         descriptionParse
            ?.filter((item) => typeof item === "string")
            .join("") 
        : descriptionParse;

    return {
        isScroll,
        titleStart,
        titleEnd,
        titleJp,
        dateStart,
        dateEnd,
        description
    }
}