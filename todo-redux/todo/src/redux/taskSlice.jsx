import { createSlice } from "@reduxjs/toolkit";


const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
  },
  reducers: {
    addtask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deletetask: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    taskdone: (state, action) => {
      let doneItem = state.tasks.find((item) => item.id === action.payload);
      if (doneItem) {
        doneItem.done = true;
      }
    },

    edittask:(state,action)=>{
      const {id,newText}=action.payload;
      const todoIndex = state.tasks.findIndex((item) => item.id === id);
      if (todoIndex !== -1) {
        state.tasks[todoIndex].task = newText;
      } 
  }
   
  },
});

export const { addtask, deletetask, taskdone,edittask} = taskSlice.actions;

export default taskSlice.reducer;
