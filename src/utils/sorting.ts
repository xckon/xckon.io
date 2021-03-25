import { Tech } from "../constants";

export const sortStringElements = <T extends string>(elements: T[]): T[] => {
  return elements.sort((item1, item2) => {
    if (item1 === item2) {
      return 0;
    }

    return item1 > item2 ? 1 : -1;
  });
}