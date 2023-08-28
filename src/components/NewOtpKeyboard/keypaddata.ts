export interface Data {
  id: string;
  value: string | null;
  output: Keyoutput;
}

export type Keyoutput = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0 | 404 | 400;

export const data: Data[] = [
  {
    id: "1",
    value: "1",
    output: 1,
  },
  {
    id: "2",
    value: "2",
    output: 2,
  },
  {
    id: "3",
    value: "3",
    output: 3,
  },
  {
    id: "4",
    value: "4",
    output: 4,
  },
  {
    id: "5",
    value: "5",
    output: 5,
  },
  {
    id: "6",
    value: "6",
    output: 6,
  },

  {
    id: "7",
    value: "7",
    output: 7,
  },
  {
    id: "8",
    value: "8",
    output: 8,
  },
  {
    id: "9",
    value: "9",
    output: 9,
  },
  {
    id: "null",
    value: null,
    output: 404,
  },
  {
    id: "0",
    value: "0",
    output: 0,
  },
  {
    id: "400",
    value: "<",
    output: 400,
  },
];
