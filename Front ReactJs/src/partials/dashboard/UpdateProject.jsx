import react,{useState,useEffect }from "react"
import UserService from "../../services/userService";
import Swal from "sweetalert2";
import Sidebar from "../Sidebar";
import Header from '../Header';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { data } from "autoprefixer";

import ProjectService from "../../services/projectService";

// ... (import statements and other code)

function UpdateProject() {
    const location = useLocation(); // Get the current location object
     const navigate = useNavigate(); // Get the navigate function
     const [id,setid]=useState("")
    const [formData, setFormData] = useState({
      name: "",
      description: "",
      category: "",
      tasks: [],
    });
    // ... (remaining code)
    useEffect(() => { 
      setid(location.state.id)// bech ta3ml mise a jour 3al id actelle setid trecuperi lid jdid w hiya teb3a luserstate("")

    
      
     ProjectfromBack(location.state.id)// utilisé pour récupérer les données de l'utilisateur spécifique en utilisant l'ID extrait de l'objet de localisation.

   
    } ,[]);
  
    // ... (remaining code)
  
    const ProjectfromBack = (id) => {
      const pr = new ProjectService();
      pr.findByid(id).then((res) => {
        const { name, description, category, tasks } = res.data.data;
        setFormData({ name, description, category, tasks });
      });
    };
  
    const updateproject = (e) => {
      e.preventDefault();
      const pr = new ProjectService();
      pr.update(location.state.id, formData).then((res) => {
        console.log("update", res.data.data);
        Swal.fire("Success", "Project updated successfully", "success");
        navigate("/Projects");
      });
    };
  
    return (
      <div className="flex h-screen overflow-hidden">
        {/* ... (other components and layout) */}
        <main>
          {/* ... (header and other layout) */}
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
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
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
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
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tasks" className="form-label">
                Tasks
              </label>
              <input
                type="text"
                className="form-control"
                id="tasks"
                value={formData.tasks.join(', ')}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    tasks: e.target.value.split(',').map(task => task.trim()),
                  })
                }
              />
            </div>
            <button
              onClick={(e) => updateproject(e)}
              className="btn btn-primary"
            >
              Update
            </button>
          </form>
        </main>
      </div>
    );
  }
  
  export default UpdateProject;
  