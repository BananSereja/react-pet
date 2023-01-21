import { itemCardItem } from "../itemList/itemList";
import { FILMS_LIST, PAGINATION_LIST } from "./actions";

const defaultStateList = itemCardItem
const defaultStatePagination: [] = [];
interface ActionInfoInterface {
  type: string;
  payload: [];
}
interface PaginationInterface {
  type: string;
  payload: [];
}

export function filmsList(
  state = defaultStateList,
  action: ActionInfoInterface
) {
  switch (action.type) {
    case FILMS_LIST:
      return action.payload

    default:
      return state;
  }
}

export function paginationFilmsList(
  state = defaultStatePagination,
  action: PaginationInterface
) {
  switch (action.type) {
    case PAGINATION_LIST:
      return action.payload;

    default:
      return state;
  }
}
