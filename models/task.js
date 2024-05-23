const pool = require("../config/database");

class Task {
  static async getAllTasks() {
    try {
      const result = await pool.query("SELECT * FROM task");
      return result.rows;
    } catch (error) {
      throw new Error("Error fetching tasks: " + error.message);
    }
  }
  static async getTaskById(id) {
    try {
      const result = await pool.query("SELECT * FROM task WHERE id = $1", [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error("Error fetching task: " + error.message);
    }
  }

  static async createTask(taskData) {
    try {
      const { title, description } = taskData;
      const result = await pool.query(
        "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
        [title, description]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error("Error creating task: " + error.message);
    }
  }

  static async updateTask(id, taskData) {
    try {
      const { title, description } = taskData;
      const result = await pool.query(
        "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
        [title, description, id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error("Error updating task: " + error.message);
    }
  }

  static async deleteTask(id) {
    try {
      const result = await pool.query(
        "DELETE FROM task WHERE id = $1 RETURNING *",
        [id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error("Error deleting task: " + error.message);
    }
  }
}

module.exports = Task;
