
import react,{useState,useEffect }from "react";
import BarChart from '../../charts/BarChart03';
import Sidebar from '../Sidebar';
import Header from '../Header';
import ProjectService from "../../services/projectService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function Projects(){
    const [name,setname]=useState("")
    const [description,setdescription]=useState("")
    const [file,setfile]=useState("")
    const [category,setcategory]=useState("")
    const [tasks,settasks]=useState("")
    const [projects,setProjects]=useState([])
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const pr=new ProjectService()
    useEffect(() => {
      ListProjectsFromBack()
    
   
    } ,[]);
       
          const ListProjectsFromBack= () => {
            pr.getAll().then((res)=>{
              setProjects(res.data.data)
              console.log("la liste des projets",res.data.data)
      
      
            })
          }
          const deleteProjectFunction=(id) =>{
            Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
              if (result.isConfirmed) {
                pr.remove(id).then((res)=>{
                  console.log("ok deleted");
                  ListProjectsFromBack()
                
                
                
                })
      
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              }
            })
      
      
          }
          const ViewProjectFunction=(id) =>{
            
            navigate("/DetailleProjects/"  + id, { state: { id: id } });

          }
    const UpdateProjectFunction=(id)=>{
      navigate("/UpdateProject/"+ id, { state: { id: id } });

    }
    const CreateProjectFunction=() =>{ // 2: lina bech nhoutou emhya lm*page eli chnegzoulha bil navigate (dans ce cas mechin mil users lil createuser 
      //en plus hachtna bil get(id))
      navigate("/CreateProject/" ); //bech timchi llpage update w thz maaha id taa user
      // us.create().then((res)=>{
      //   setUsers(res.data.data)
      //   console.log("la liste des utilisateurs",res.data.data)

      }
    
          return (
            <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {/*  Site header */}
              <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
  
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">  
              <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
                <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                  <h2 className="font-semibold text-slate-800 dark:text-slate-100">List of Projects </h2>
                </header>
                <div className="p-3">


                <button 
                               className="text-white bg-green-500 px-3 py-1 rounded-lg"
                               onClick={(e)=>{CreateProjectFunction()}}  
                                  > add new project
                               
                               </button>
          
                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                      {/* Table header */}
                      <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
                        <tr>
                          <th>  <div className="font-semibold text-left">ref</div> </th>
                         
  
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Name</div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Description</div>
                          </th>
                         
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold  text-left">actions</div>
  
                          
                          </th>
                          
                        </tr>
                      </thead>
                      {/* Table body */}
                      <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
                        {
                          projects.map((projet,index) => {
                            return (
                              <tr key={projet._id}>
                                <td className="p-2 whitespace-nowrap"> 
                                <div className="text-left">{index+1}</div>
                                </td>
  
                             
  
                              
                                <td className="p-2 whitespace-nowrap">
                                  <div className="text-left">{projet.name}</div>
                                </td>
  
  
                                <td className="p-2 whitespace-nowrap">
                                  <div className="text-left">{projet.description}</div>
                                </td>
                               
                                
  
                                <td className="p-2 whitespace-nowrap">
                                 <button className="text-white bg-red-500 px-3 py-1 rounded-lg " 
                                 //onClick={(e)=>{alert("bonjour")}}
                                 onClick={(e)=>{deleteProjectFunction(projet._id)}}> delete</button>
  
                                 <button 
                                 className="text-white bg-blue-500 px-3 py-1 rounded-lg"
                                 onClick={(e)=>{ViewProjectFunction(projet._id)}}  
                                    > view 
                                 
                                 </button>
  
  
  
                                 <button 
                                 className="text-white bg-green-500 px-3 py-1 rounded-lg"
                                 onClick={(e)=>{UpdateProjectFunction(projet._id)}}  
                                    > update 
                                 
                                 </button>
                                 
                                </td>
  
  
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>
          
                  </div>
          
                </div>
              </div>
              </div>
              </main>
              </div> </div>
            );
  
}
export default Projects ;