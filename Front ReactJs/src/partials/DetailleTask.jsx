import react,{useState,useEffect }from "react"
import TaskService from "../services/taskService";
import Swal from "sweetalert2";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useLocation } from "react-router-dom";

function DetailleTask(){
    const [titre,settitre]=useState("")
    const [description,setdescription]=useState("")
    const [username,setusername]=useState("")
    const [project,setproject]=useState("")
   
    const [tasks,settasks]=useState([])
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const ts=new TaskService()
    const location =useLocation()//3 éme etape details : uselocation bech nsta3mlouha bech naamlou mise a jour llid 
    const [id,setid]=useState("")//4ème étape details
    useEffect(() => {
      setid(location.state.id)//5ème etape details
      
     taskfromBack(location.state.id)//6ème details 
   
    } ,[]);
    const taskfromBack= (id) => {
    
      
ts.findByid(id).then((res)=>{ 
    console.log('detaille',res.data.data);
    settitre(res.data.data.titre)//7éme details
    setdescription(res.data.data.description)
  



})

    }
    return(
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
              <h2 className="font-semibold text-slate-800 dark:text-slate-100">details of Task  </h2>
            </header>
            </div>
            </div> 
              {/* {fullname}
             {phone}    */}
             {/* {username} */}
            <div>titre:{titre}</div> 
            <div>description:{description}</div> 
            
            
            
             

            

            </main>
            </div>
            </div>
            
                  
                 
                
            
                    
    );
}
export default DetailleTask;
