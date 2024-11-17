import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [], // масив для зберігання завдань
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push({ id: Date.now(), text: action.payload });
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
