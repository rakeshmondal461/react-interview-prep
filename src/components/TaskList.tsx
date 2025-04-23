import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../assets/styles/TaskList.css";
import useLocalStore from "../hooks/useLocalStore";
type task = {
  id: string;
  title: string;
};

const TaskList = () => {
  throw new Error("Component render error!");
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [tasks, setTasks] = useState<task[]>([]);
  const { getLocalStoreData, setLocalStoreData } = useLocalStore();

  useEffect(() => {
    storeDataFromLocal();
  }, []);

  const storeDataFromLocal = () =>{
    const data = getLocalStoreData();
    console.log("data🚀🚀", data);
    if (data?.data?.tasks) {
      setTasks(data?.data?.tasks);
    }
  }

  const addNewTask = () => {
    const id = uuidv4();
    if (!taskTitle) return;
    const newTask: task = {
      id: id,
      title: taskTitle,
    };
    setTasks((prev) => [...prev, newTask]);
    setTaskTitle("");
    setLocalStoreData({ tasks: [...tasks, newTask] });
  };

  const handleItemClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    console.log("target🚀🚀", e);
    if (target.className === "listItem") {
      const selected = tasks.find((item) => item.id === target.dataset.id);
      console.log(`You clicked : ${selected?.title}`);
    }
  };

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchVal = e.target.value;
    if(!searchVal){
      storeDataFromLocal();
      return;
    }
    const data = getLocalStoreData();
    const tasks = data?.data?.tasks;
    const filteredData = tasks.filter((item:any) =>
      item.title.toLowerCase().includes(searchVal.toLowerCase())
    );
    setTasks(filteredData);
    console.log(`Search API called 🔎🔎 ${searchVal}`, filteredData);
  };

  const debounce = (fn: any, delay: number) => {
    console.log("called");
    let timer: any;
    return function (...args: any) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const handleSearch = debounce(search, 1000);

  return (
    <div>
      <>
        <div className="inputWrapper">
          <input
            type="text"
            name="taskTitle"
            className="primaryTextInput"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <button id="addTaskBtn" onClick={addNewTask}>
            Add
          </button>
        </div>

        <div id="tasklistWrapper">
          <div>Tasks</div>
          <div>
            <input
              type="text"
              onChange={handleSearch}
              className="primaryTextInput"
            />
          </div>
          <>{JSON.parse(123 as any)}</>
          <div id="tasklist" onClick={(e) => handleItemClick(e)}>
            {tasks.map((task: task) => {
              return (
                <div className="listItem" key={task.id} data-id={task.id}>
                  {task.title}
                </div>
              );
            })}
          </div>
        </div>
      </>
    </div>
  );
};

export default TaskList;
