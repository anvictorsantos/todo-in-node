const express = require("express");
const bodyParser = require("body-parser");
const taskRouter = require("./routes/taskRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/tasks", taskRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
