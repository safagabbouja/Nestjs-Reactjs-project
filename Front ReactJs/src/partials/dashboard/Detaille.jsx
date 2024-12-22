import react,{useState,useEffect }from "react"
import UserService from "../../services/userService";
import Swal from "sweetalert2";
import Sidebar from "../Sidebar";
import Header from '../Header';
import { useLocation } from "react-router-dom";


function Detaille(){
    const [email,setEmail]=useState("")
    const [fullname,setfullname]=useState("")
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const [phone,setphone]=useState("")
    const [items,setitems]=useState("")
    const [users,setUsers]=useState([])
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const us=new UserService()
    const location =useLocation()//3 éme etape details : uselocation bech nsta3mlouha bech naamlou mise a jour llid 
    const [id,setid]=useState("")//4ème étape details
    useEffect(() => {
      setid(location.state.id)//5ème etape details
      
     UserfromBack(location.state.id)//6ème details 
   
    } ,[]);
    const UserfromBack= (id) => {
      //lobjet us bech yab3th req lserver feha lid mtaa luser eli hachtou bih w bech ystena reponse taa server ki yjewb 
      //lserver yab3th reponse feha data baad me yab3tha  bech naamlou refrech lil les champs bil sefullname/setphonee etc
      
us.findByid(id).then((res)=>{ 
    console.log('detaille',res.data.data);
    setfullname(res.data.data.fullname)//7éme details
    setphone(res.data.data.phone)
    setEmail(res.data.data.email)
    setusername(res.data.data.username)
    setitems(res.data.data.items)



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
              <h2 className="font-semibold text-slate-800 dark:text-slate-100">details of users  </h2>
            </header>
            </div>
            </div> 
              {/* {fullname}
             {phone}    */}
             {/* {username} */}
            <div>fullname:{fullname}</div> 
            <div>phone:{phone}</div> 
            <div>email:{email}</div> 
            <div>username:{username}</div> 
            <div>items:{items}</div>   
            
             

            

            </main>
            </div>
            </div>
            
                  
                 
                
            
                    
    );
}
export default Detaille;
