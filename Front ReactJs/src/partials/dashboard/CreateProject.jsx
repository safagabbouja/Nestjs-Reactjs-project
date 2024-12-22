import React, { useState } from "react";
import ProjectService from "../../services/projectService";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

function CreateProject() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  //  const [tasks, setTasks] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const pr = new ProjectService();

  const createProject = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("file", file);
    formData.append("category", category);
    // formData.append("tasks", tasks);

    try {
      await pr.create(formData);
      navigate("/Projects");
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle the error appropriately
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
              <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">
                  Create Projects
                </h2>
              </header>
            </div>
          </div>
          <form onSubmit={createProject}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="file" className="form-label">
                File (Image)
              </label>
              <input
                type="file"
                className="form-control"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input
                type="text"
                className="form-control"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

             {/* <div className="mb-3">
              <label htmlFor="tasks" className="form-label">
                Tasks
              </label>
              <input
                type="text"
                className="form-control"
                id="tasks"
                onChange={(e) => setTasks(e.target.value)}
              />
            </div>  */}

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default CreateProject;
