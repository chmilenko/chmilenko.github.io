export type Data = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type State = {
  dataList: Data[];
  error: undefined | string;
};
