import { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "",
  });
  const [successMsg, setSuccessMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (e) => {
    console.log(e.target.name);
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleTask = async (e) => {
    e.preventDefault();
    console.log(task);
    try {
      setErrorMsg("");
      setSuccessMsg("");
      const res = await axios.post("http://localhost:3300/api/tasks/new", task);

      if (res.data.status === "success") {
        setSuccessMsg(res.data.msg);
      }
      if (res.data.status === "fail") {
        setErrorMsg(res.data.msg);
      }
      setTask({ title: "", description: "", status: "" });
      window.location.href = "/tasklists";
    } catch (err) {
      console.log(err);
      setErrorMsg(err.message);
    }
  };

  return (
    <form
      className="max-w-sm mx-auto border-cyan-700 border-b-green-800"
      onSubmit={handleTask}
    >
      <div className="mb-5">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="title"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <input
          type="text"
          id="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="description"
          value={task.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Status</label>
        <select name="status" onChange={handleChange}>
          <option defaultValue={"pending"}>Choose</option>

          <option value="pending">pending</option>

          <option value="completed">completed</option>
        </select>
      </div>

      {errorMsg && <p className="text-red-700">{errorMsg} </p>}
      {successMsg && <p className="text-green-700">{successMsg}</p>}

      <div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-7 ml-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default Form;
