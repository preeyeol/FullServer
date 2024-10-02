import { useState, useEffect } from "react";
import axios from "axios";

const Todo = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3300/api/tasks", task);
      console.log(res.data);
      setTask(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Todo Lists:</h2>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <ul>
                  {task.map((t, index) => (
                    <li key={index}>{t.title}</li>
                  ))}
                </ul>
              </th>
              <td className="px-6 py-4">
                <ul>
                  {task.map((t, index) => (
                    <li key={index}>{t.description}</li>
                  ))}
                </ul>
              </td>
              <td className="px-6 py-4">
                <ul>
                  {task.map((t, index) => (
                    <li key={index}>{t.status}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
