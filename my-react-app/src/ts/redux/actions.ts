export const FILMS_LIST = "FILMS_LIST";
export const PAGINATION_LIST = 'PAGINATION_LIST'
export interface payloadInterface {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export function filmsList(payload: payloadInterface) {
  return {
    type: FILMS_LIST,
    payload,
  };
}

export const pagination = {
  type: PAGINATION_LIST,
  payload: []
}