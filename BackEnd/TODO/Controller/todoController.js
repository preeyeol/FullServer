const { todoSchema } = require("../Model/todoScheme");

const todoList = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    console.log(req.body);
    const lists = new todoSchema({
      title: title,
      description: description,
      status: status,
    });
    const todoList = await lists.save();

    res.status(200).json({
      status: "success",

      msg: "You added a new Task",
      todoList,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      status: "fail",
      msg: "Error While Adding Task",
    });
  }
};

const getList = async (req, res) => {
  const lists = await todoSchema.find({});
  res.json(lists);
};

const editList = async (req, res) => {
  const id = req.params.id;
  const task = await todoSchema.updateOne(
    { _id: id },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
      },
    }
  );
  res.json({
    msg: "updated Successfully",
    task,
  });
};

const deleteTask = async (req, res) => {
  const id = req.params.id;
  await todoSchema.deleteOne({ _id: id });

  res.json({
    msg: "Deleted Successfully",
  });
};

module.exports = { todoList, getList, editList, deleteTask };
