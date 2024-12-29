import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState({
    todo: [],
    inprogress: [],
    completed: [],
  });

  const [newTask, setNewTask] = useState({
    column: "Todo",
    title: "",
    description: "",
    dueDate: "",
  });

  // Show/Hide modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Handle input changes in the modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add task to the selected column
  const handleAddTask = () => {
    const { column, title, description, dueDate } = newTask;

    if (title.trim() === "") {
      alert("Task title cannot be empty!");
      return;
    }

    // Add the task to the correct column
    setTasks((prev) => ({
      ...prev,
      [column.toLowerCase().replace(" ", "")]: [
        ...prev[column.toLowerCase().replace(" ", "")],
        { title, description, dueDate },
      ],
    }));

    // Clear the form and close modal
    setNewTask({ column: "Todo", title: "", description: "", dueDate: "" });
    setShowModal(false);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/">TaskMate</a>
      </nav>
      <div className="container mt-4">
        <button className="btn btn-primary" onClick={handleShowModal}>
          Add Task
        </button>
        <div className="row mt-4">
          {/* Todo Column */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header bg-secondary text-white">Todo</div>
              <div className="card-body">
                {tasks.todo.length > 0 ? (
                  tasks.todo.map((task, index) => (
                    <div key={index} className="mb-2 p-2 bg-light border rounded">
                      <h6>{task.title}</h6>
                      <p>{task.description}</p>
                      <small>Due: {task.dueDate}</small>
                    </div>
                  ))
                ) : (
                  <p>No tasks available.</p>
                )}
              </div>
            </div>
          </div>

          {/* In Progress Column */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header bg-secondary text-white">In Progress</div>
              <div className="card-body">
                {tasks.inprogress.length > 0 ? (
                  tasks.inprogress.map((task, index) => (
                    <div key={index} className="mb-2 p-2 bg-light border rounded">
                      <h6>{task.title}</h6>
                      <p>{task.description}</p>
                      <small>Due: {task.dueDate}</small>
                    </div>
                  ))
                ) : (
                  <p>No tasks available.</p>
                )}
              </div>
            </div>
          </div>

          {/* Completed Column */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header bg-secondary text-white">Completed</div>
              <div className="card-body">
                {tasks.completed.length > 0 ? (
                  tasks.completed.map((task, index) => (
                    <div key={index} className="mb-2 p-2 bg-light border rounded">
                      <h6>{task.title}</h6>
                      <p>{task.description}</p>
                      <small>Due: {task.dueDate}</small>
                    </div>
                  ))
                ) : (
                  <p>No tasks available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Task</h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Column</label>
                    <select
                      className="form-control"
                      name="column"
                      value={newTask.column}
                      onChange={handleInputChange}
                    >
                      <option>Todo</option>
                      <option>In Progress</option>
                      <option>Completed</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Task title"
                      name="title"
                      value={newTask.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      placeholder="Task description"
                      name="description"
                      value={newTask.description}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>Due Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="dueDate"
                      value={newTask.dueDate}
                      onChange={handleInputChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleAddTask}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
