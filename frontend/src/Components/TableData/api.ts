import { Data } from "./Types/dataTypes";

export const initDataList = async (): Promise<Data[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
