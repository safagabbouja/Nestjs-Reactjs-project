import react,{useState,useEffect }from "react"
import UserService from "../../services/userService";
import Swal from "sweetalert2";
import Sidebar from "../Sidebar";
import Header from '../Header';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { data } from "autoprefixer";


function Update(){
    const [email,setEmail]=useState("")
    const [fullname,setfullname]=useState("")
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const [phone,setphone]=useState("")
    const [items,setitems]=useState("")
    const [users,setUsers]=useState([])
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const us=new UserService()
    const location =useLocation()
    const [id,setid]=useState("")
    const navigate = useNavigate()
    useEffect(() => {
        setid(location.state.id)//5ème etape details bech yaal mise a jour lil id
        
       UserfromBack(location.state.id)//6ème details 
     
      } ,[]);

      const UserfromBack= (id) => {
        us.findByid(id).then((res)=>{
            console.log('found',res.data.data);
            setfullname(res.data.data.fullname)//7éme dupdate
            setphone(res.data.data.phone)
            setEmail(res.data.data.email)
            setusername(res.data.data.username)
            setitems(res.data.data.items)
        
        
        
        })
        
            }
            const updateuser=(e) =>

            {   e.preventDefault();
                
                console.log("id is **",location.state.id)
                 const data={"fullname":fullname, "email": email,"phone":phone,"username":username,"items":items }
                 console.log("data is",data)
                us.update(location.state.id,data).then((res)=>{
                    console.log('update',res.data.data)});
                    navigate('/Users')


                //alert(email)
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
                      <h2 className="font-semibold text-slate-800 dark:text-slate-100">Update of users  </h2>
                    </header>
                    </div>
                    </div> 
                <form>
                <div class="mb-3">
               <label for="exampleInputEmail1" class="form-label">Email address</label>
               <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}
               onChange={e => setEmail(e.target.value)} //bech yweli aana aces bech nbedlou fil champ 
               
               >

                </input>
                </div>
               {/* <div class="mb-3">
               <label for="exampleInputPassword1" class="form-label">Password</label>
               <input type="password" class="form-control" id="exampleInputPassword1">
                </input>
               </div> */}
               <div class="mb-3">
               <label for="exampleInputPassword1" class="form-label">fullname</label>
               <input type="text" class="form-control" id="exampleInputPassword1" value={fullname}
               
               onChange={e => setfullname(e.target.value)}
               >
                </input>
               </div>
               <div class="mb-3">
               <label for="exampleInputPassword1" class="form-label">username</label>
               <input type="text" class="form-control" id="exampleInputPassword1" value={username} 
                 onChange={e => setusername(e.target.value)}
               >
             
                </input>
               </div>
               <div class="mb-3">
               <label for="exampleInputPassword1" class="form-label">phone</label>
               <input type="text" class="form-control" id="exampleInputPassword1" value={phone}
               
               onChange={e => setphone(e.target.value)}
               >
                </input>
               </div>
             <div class="mb-3">
               <label for="exampleInputPassword1" class="form-label">items</label>
               <select>
         <option value="admin">Admin</option>
         <option value="salary">Salary</option>
       </select> 
               </div> 

               <div class="mb-3 form-check">
               <input type="checkbox" class="form-check-input" id="exampleCheck1">
                </input>

                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button onClick={(e)=>updateuser(e)} class="btn btn-primary">Submit</button> 
                {/* njarbou fil fonction updateuser  yaani wa9teli ya3ml click bil souris  */}
                 </form>
                     
                    </main>
                    </div>
                    </div>
                    
                          
                         
                        
                    
                            
            );





}
export default Update;