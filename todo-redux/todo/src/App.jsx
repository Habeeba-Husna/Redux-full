import { useState } from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addtask, deletetask, taskdone,edittask } from "./redux/taskSlice";

function App() {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();
  const datas = useSelector((state) => state.task.tasks);

  const handleEdit=(id)=>{
    const newText=prompt("Edit your todo","")
    if(newText){
        dispatch(edittask({id,newText}))
    }
}
  return (
    <>
      <div>
        <h1>Todo</h1>
        <input type="text" onChange={(e) => setTask(e.target.value)} />
        <button
          onClick={() => {
            dispatch(addtask({ id: Date.now(), task: task, done: false }));
            setTask("");
          }}
        >
          Add task
        </button>
      </div>
      {/* <div>
        {datas.map((item) => (
          <p style={{ backgroundColor: `${item.done && "yellow"}` }} key={item.id}>
            {item.task}
            <button onClick={() => dispatch(taskdone(item.id))}>Done</button>
            <button onClick={() => dispatch(deletetask(item.id))}>Delete</button>
            <button onClick={()=>handleEdit(item.id)}>Edit</button>
          </p>
        ))}
      </div> */}

      <div>
        <ul>
          {datas.map((item) => (
            <li
              key={item.id}

              style={{ backgroundColor: item.done ? "green" : "white" }}

            >
              {item.task}
              <button onClick={() => dispatch(taskdone(item.id))}>Done</button>
              <button onClick={() => dispatch(deletetask(item.id))}>Delete</button>
              <button onClick={()=>handleEdit(item.id)}>Edit</button>
            </li>

          ))}
        </ul>
      </div>

    </>
  );
}

export default App;
