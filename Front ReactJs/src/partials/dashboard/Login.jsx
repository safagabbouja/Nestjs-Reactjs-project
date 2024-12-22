import React, { useState, useEffect } from "react";
import UserService from "../../services/userService";
import Swal from "sweetalert2";
import Sidebar from "../Sidebar";
import Header from '../Header';
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const us = new UserService();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };


  const login = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    console.log("data", data);

    if (role === "Admin" && selectedOption) {
      navigate(`/${selectedOption}`);
    } else if (role === "Salary") {
      navigate("/Salaryinfo");
    } else {
      // Gérer d'autres cas de rôle ici
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
              <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">Login;</h2>
              </header>
            </div>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">username</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setusername(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">password</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="adminCheckbox"
                value="Admin"
                onChange={(e) => setRole(e.target.value)}
              />
              <label className="form-check-label" htmlFor="adminCheckbox">Admin</label>
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="salaryCheckbox"
                value="Salary"
                onChange={(e) => setRole(e.target.value)}
              />
              <label className="form-check-label" htmlFor="salaryCheckbox">Salary</label>
            </div>

            <div className="mb-3">
              <label>Choose a page to navigate:</label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="usersRadio"
                  value="Users"
                  checked={selectedOption === "Users"}
                  onChange={() => handleOptionChange("Users")}
                />
                <label className="form-check-label" htmlFor="usersRadio">Users</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="projectsRadio"
                  value="Projects"
                  checked={selectedOption === "Projects"}
                  onChange={() => handleOptionChange("Projects")}
                />
                <label className="form-check-label" htmlFor="projectsRadio">Projects</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="tasksRadio"
                  value="Tasks"
                  checked={selectedOption === "Tasks"}
                  onChange={() => handleOptionChange("Tasks")}
                />
                <label className="form-check-label" htmlFor="tasksRadio">Tasks</label>
              </div>
            </div>

            <button onClick={(e) => login(e)} className="btn btn-primary">login</button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Login;
