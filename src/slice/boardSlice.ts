import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BoardState {
  id: number | undefined;
  title: string;
  description: string | undefined;
  players_number: number;
  unit: string | undefined;
}

const initialState: BoardState = {
  id: undefined,
  title: "",
  description: undefined,
  players_number: 10,
  unit: undefined,
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
