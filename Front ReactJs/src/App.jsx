import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './css/style.css';
import './charts/ChartjsConfig';
import Dashboard from './pages/Dashboard';
import Projects from './partials/dashboard/Projects';
import Users from './partials/dashboard/Users';
import Tasks from './partials/dashboard/Tasks';
import Detaille from './partials/dashboard/Detaille';
import DetailleTask from './partials/DetailleTask';
import Update from './partials/dashboard/Update';
import UpdateProject from './partials/dashboard/UpdateProject';
import CreateUser from './partials/dashboard/CreateUser';
import CreateTask from './partials/dashboard/CreateTask';
import CreateProject from './partials/dashboard/CreateProject';
import Salaryinfo from './partials/dashboard/Salaryinfo';
import Login from './partials/dashboard/Login';
import DetailleProjects from './partials/dashboard/DetailleProjects';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path='/Users' element={<Users />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Tasks' element={<Tasks />} />
        <Route path='/Detaille/:id' element={<Detaille />} />
        <Route path='/DetailleTask/:id' element={<DetailleTask />} />
        <Route path='/DetailleProjects/:id' element={<DetailleProjects />} />


         <Route path='/Salaryinfo' element={<Salaryinfo/>} /> 

        <Route path='/Update/:id' element={<Update />} />
        <Route path='/UpdateProject/:id' element={<UpdateProject />} />

        <Route path='/CreateUser' element={<CreateUser />} />
        <Route path='/CreateUser' element={<CreateUser />} />
        <Route path='/CreateTask' element={<CreateTask />} />

          <Route path='/CreateProject' element={<CreateProject />} />

        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
