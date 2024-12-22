
import react,{useState,useEffect }from "react";
import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-08.jpg';
import Image05 from '../../images/user-36-09.jpg';
import Sidebar from '../Sidebar';
import Header from '../Header';
import TaskService from "../../services/taskService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Tasks(){
    const [titre,settitre]=useState("")
    const [description,setdescription]=useState("")
    const [project,setproject]=useState("")
    const [tasks,settasks]=useState([])
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const ts=new TaskService()
    const navigate = useNavigate();
    useEffect(() => {
      ListTasksFromBack()
    
   
    } ,[]);
    const ListTasksFromBack= () => {
      ts.getAll().then((res)=>{
        settasks(res.data.data)
        console.log("la liste des tasks",res.data.data)


      })
    }
    
    const ViewTaskFunction=(id) =>{
      navigate("/DetailleTask/"  + id, { state: { id: id } });


    }
    const UpdateTaskFunction=(id) =>{ // 2: lina bech nhoutou emhya lm*page eli chnegzoulha bil navigate (dans ce cas bech na3mlou update 3ala user mou3ayn)
      navigate("/UpdateTask/"+ id, { state: { id: id } }); //bech timchi llpage update w thz maaha id taa user
 
    }
    const CreateTaskFunction=() =>{ // 
      navigate("/CreateTask/" ); 
      }
      const deleteTaskFunction=(id) =>{
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
            ts.remove(id).then((res)=>{ //delete bech ysir bil id 3ala user mou3ayn 
              console.log("ok deleted");
              ListTasksFromBack()  //3ibara bech tsir refresh automatique  ya3ni ba3d me ta3ml delete bech yraj3lk les donnes 
              //ta3 luser ba3d me sar delet 
             
            
            
            })
  
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
  
  
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
              <h2 className="font-semibold text-slate-800 dark:text-slate-100">List of Tasks </h2>
            </header>
            <div className="p-3">
            
              <button 
                               className="text-white bg-green-500 px-3 py-1 rounded-lg"
                               onClick={(e)=>{CreateTaskFunction()}}  
                                  > add new Task
                               
                               </button>
      
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  {/* Table header */}
                  <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
                    <tr>
                      <th>  <div className="font-semibold text-left">ref</div> </th>
                     

                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">title</div>
                      </th>
                      {/* <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Description</div>
                      </th> */}
                     
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold  text-left">actions</div>

                      
                      </th>
                      
                    </tr>
                  </thead>
                  {/* Table body */}
                  <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
                    {
                      tasks.map((task,index) => {
                        return (
                          <tr key={task._id}>
                            <td className="p-2 whitespace-nowrap"> 
                            <div className="text-left">{index+1}</div>
                            </td>

                         

                          
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">{task.titre}</div>
                            </td>


                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">{task.description}</div>
                            </td>
                           
                            

                            <td className="p-2 whitespace-nowrap">
                              <button className="text-white bg-red-500 px-3 py-1 rounded-lg " 
                             //onClick={(e)=>{alert("bonjour")}}
                             onClick={(e)=>{deleteTaskFunction(task._id)}}> delete</button> 

                             <button 
                             className="text-white bg-blue-500 px-3 py-1 rounded-lg"
                             onClick={(e)=>{ViewTaskFunction(task._id)}}  
                                > view 
                             
                             </button>



                             <button 
                             className="text-white bg-green-500 px-3 py-1 rounded-lg"
                             onClick={(e)=>{UpdateTaskFunction(task._id)}}  
                                > update 
                             
                             </button> 


                             
                             {/* <button 
                             className="text-white bg-red-500 px-3 py-1 rounded-lg"
                             onClick={(e)=>{CreateTaskFunction(task._id)}}  
                                > delete
                             
                             </button> 
                              */}
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
export default Tasks ;
