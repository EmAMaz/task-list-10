import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Description 1",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Description 2",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      if(state.length >= 10) return;
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.description = description;
      }
    },
  },
});

export const { addTask, removeTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
