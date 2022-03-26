import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BoardState {
  title: string;
  discription: string | undefined;
  players: number;
  unit: string;
}

const initialState: BoardState = {
  title: "",
  discription: "",
  players: 10,
  unit: "",
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    createBoard: (state, action: PayloadAction<BoardState>) => {
      state = action.payload;
    },
  },
});

export const { createBoard } = boardSlice.actions;

export default boardSlice.reducer;
