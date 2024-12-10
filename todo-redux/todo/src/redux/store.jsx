import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "../redux/taskSlice";

const store = configureStore({
  reducer: {
    task: TaskReducer,
  },
});

export default store;






