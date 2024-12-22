import React, { useState } from "react";
import TaskService from "../../services/taskService";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

function CreateTask() {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [project, setProject] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const ts = new TaskService();
  const navigate = useNavigate();

  const createTask = (e) => {
    e.preventDefault();

    console.log('titre:', titre);
    console.log('description:', description);
    console.log('project:', project);

    // Vérifie que titre et project sont renseignés
    if (!titre || !project) {
      console.error("Veuillez remplir tous les champs.");
      return;
    }

    const data = {
      titre: titre,
      description: description,
      project: project,
    };

    console.log("Data to send:", data);

    ts.create(data)
      .then((response) => {
        console.log("Response from server:", response.data);
        navigate("/Tasks");
      })
      .catch((error) => {
        console.error("Erreur lors de la requête au serveur :", error);
      });
    }      

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
                  Create Tasks
                </h2>
              </header>
            </div>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="titre" className="form-label">
                Titre
              </label>
              <input
                type="text"
                className="form-control"
                id="titre"
                onChange={(e) => setTitre(e.target.value)}
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
              <label htmlFor="project" className="form-label">
                Project
              </label>
              <input
                type="text"
                className="form-control"
                id="project"
                onChange={(e) => setProject(e.target.value)}
              />
            </div>

            <button onClick={createTask} className="btn btn-primary">
              Submit
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default CreateTask;
