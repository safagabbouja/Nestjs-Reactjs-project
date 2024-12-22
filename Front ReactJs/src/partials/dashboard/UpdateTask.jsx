import react,{useState,useEffect }from "react"
import Swal from "sweetalert2";
import Sidebar from "../Sidebar";
import Header from '../Header';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { data } from "autoprefixer";
import TaskService from "../../services/taskService";
// ... (import statements and other code)

function UpdateTask() {
    const location = useLocation(); // Get the current location object
     const navigate = useNavigate(); // Get the navigate function
     const ts=new TaskService()
     const [id,setid]=useState("")
    const [formData, setFormData] = useState({
      
      titre: "",
      description: "",
      project: "",
      
    });
    
    // ... (remaining code)
    useEffect(() => { 
      setid(location.state.id)// bech ta3ml mise a jour 3al id actelle setid trecuperi lid jdid w hiya teb3a luserstate("")

    
      
     taskfromBack(location.state.id)// utilisé pour récupérer les données de l'utilisateur spécifique en utilisant l'ID extrait de l'objet de localisation.

   
    } ,[]);
  
    const taskfromBack = (id) => {
      const ts = new TaskService();
      ts.findByid(id).then((res) => {
        const { titre, description, project } = res.data.data;
        setFormData({ titre, description, project });
      });
    };
  
    const updatetask= (e) => {
      e.preventDefault();
      const ts = new TaskService();
      ts.update(location.state.id, formData).then((res) => {
        console.log("update", res.data.data);
        Swal.fire("Success", "Project updated successfully", "success");
        navigate("/Tasks");
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
                id="titre"
                value={formData.titre}
                onChange={(e) =>
                  setFormData({ ...formData, titre: e.target.value })
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
              <label htmlFor="project" className="form-label">
                project
              </label>
              <input
                type="text"
                className="form-control"
                id="project"
                value={formData.project}
                onChange={(e) =>
                  setFormData({ ...formData, project: e.target.value })
                }
              />
            </div>
            
              
           
            <button
              onClick={(e) => updatetask(e)}
              className="btn btn-primary"
            >
              Update
            </button>
          </form>
        </main>
      </div>
    );
  }
  
  export default UpdateTask;
  