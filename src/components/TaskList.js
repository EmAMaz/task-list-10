import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../features/tasks/taskSlice";
import { Link } from "react-router";

export const TaskList = () => {
  const tasksState = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        <div>
          <header className="text-center px-4">
            <div className="flex justify-center items-center gap-8">
              <h1 className="text-3xl md:text-6xl font-bold py-8">Task List</h1>
              {tasksState.length < 10 && (
                <Link to="/create-task">
                  <button className="border md:text-xl uppercase px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-red-600/80">
                    Create Task
                  </button>
                </Link>
              )}
            </div>
            <span className="font-semibold md:text-xl">
              Your create the 10 most important tasks to day{" "}
              <strong className="text-red-600 text-xl">
                {tasksState.length + "/10"}
              </strong>
            </span>
          </header>
          <main className="flex flex-col gap-4 mt-8 justify-center items-center w-full p-4 sm:max-w-xs mx-auto px-4">
            {tasksState.map((task, index) => (
              <>
                <div className="h-[1px] bg-zinc-300 first:hidden w-full"></div>
                <div
                  key={task.id}
                  className="bg-zinc-100 p-2 rounded-lg flex justify-between w-full gap-2"
                >
                  <div className="flex flex-col items-start">
                    <h3 className="font-bold border-b border-red-600 mb-2">
                      {task.title}
                    </h3>
                    <p>{task.description}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      className="border px-4 rounded-full bg-red-600 hover:bg-red-600/80 text-white w-full"
                      onClick={() => dispatch(removeTask(task.id))}
                    >
                      Delete
                    </button>
                    <Link to={`/edit-task/${task.id}`}>
                      <button className="border rounded-full bg-white hover:bg-zinc-600/10 px-4 font-semibold w-full">
                        Edit
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </main>
        </div>

        <footer className="justify-center items-center flex mt-8 bg-red-500 text-white">
          <p className="text-sm">
            Created by: <span className="font-bold "><a href="https://santimazadev.netlify.app/">SantiagoMaza</a> ❤</span>
          </p>
        </footer>
      </div>
    </>
  );
};
