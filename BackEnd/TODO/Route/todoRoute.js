const express = require("express");
const todoRoute = express.Router();

const {
  todoList,
  getList,
  editList,
  deleteTask,
} = require("../Controller/todoController");

todoRoute.get("/tasks", getList);
todoRoute.post("/tasks/new", todoList);
todoRoute.patch("/:id", editList);
todoRoute.delete("/:id", deleteTask);

module.exports = { todoRoute };
