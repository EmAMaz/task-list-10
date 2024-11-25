import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router";

export const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(
        addTask({
          id: uuid(),
          ...task,
          completed: false,
        })
      );
    }

    navigate("/");
  };

  useEffect(() => {
    console.log(typeof params.id);
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen py-12">
      <form
        className="flex flex-col gap-4 w-max bg-white p-8 rounded-lg justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border w-full p-2"
          minLength={4}
          required
          onChange={handleChange}
          value={task.title}
        />
        <textarea
          name="description"
          placeholder="Description"
          className="border w-full p-2"
          minLength={4}
          required
          onChange={handleChange}
          value={task.description}
        ></textarea>
        <button
          className="border rounded-full bg-white px-4 font-semibold w-full"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};
