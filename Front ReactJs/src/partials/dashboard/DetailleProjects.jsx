import React, { useState, useEffect } from "react";
import ProjectService from "../../services/projectService";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { useLocation } from "react-router-dom";

function DetailleProjects() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [category, setCategory] = useState("");
   const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const ps = new ProjectService();
  const location = useLocation();
  const [id, setID] = useState("");

  useEffect(() => {
    setID(location.state.id);
    ProjectfromBack(location.state.id);
  }, []);

  const ProjectfromBack = (id) => {
    ps.findByid(id).then((res) => {
      const projectData = res.data.data;
      setName(projectData.name);
      setDescription(projectData.description);
      setFile(projectData.file);
       setTasks(projectData.tasks);
      setCategory(projectData.category);
    });
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
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">Details of projects</h2>
              </header>
            </div>
          </div>
          <div>Name: {name}</div>
          <div>Description: {description}</div>
          <div>File: {file}</div>
          <div>Category: {category}</div>
           <div>Number of Tasks: {tasks.length}</div>
          {tasks.map((task, index) => (
            <div key={index}>
              Task {index + 1}: {task}
            </div>
          ))} 
        </main>
      </div>
    </div>
  );
}

export default DetailleProjects;
