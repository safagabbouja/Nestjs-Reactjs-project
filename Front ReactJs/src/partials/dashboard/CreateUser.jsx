import react,{useState,useEffect }from "react"
import UserService from "../../services/userService";
import Swal from "sweetalert2";
import Sidebar from "../Sidebar";
import Header from '../Header';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { data } from "autoprefixer";


function CreateUser(){
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
        
     
      } ,[]);

      // prevent t5alich comportement par défaut ysir ya3ni k tthal formulaire bech tasna3 new user w ta3ml send wela submit wela hkeya 
      //bech me tt3awdch ttchharga page nefsha nsra3mlou  e.preventDefault() (mlkhr tamn3 comportement par défaut)
            const createuser=(e) =>
            {   e.preventDefault();
              //bech nasn3ou objet ismou data fih les donnée lezma bech nasn3ou user 
                 const data={"fullname":fullname, // lemail ,fullname etc houma les valeurs jdoud ta3 use state eli 
                 //les fonction det
                  "email": email,
                  "phone":phone,
                  "username":username,
                  "password":password,
                  "items":items }

                  //destiné à créer un utilisateur en envoyant les données à un serveur w baad ystena reponse taa server 
                us.create(data).then(response => {
                  console.error('data:', response.data);
                  navigate("/Users") // ba3d me yasna3 user yarja llpage Users ychekeha est que user tsnaa ou non 
                })
                .catch(error => {
                  console.error('An error occurred:', error);
                  // Handle the error appropriately
                });
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
                   {/* // qui semble avoir des classes CSS pour gérer la mise en page (padding, largeur, marges, etc.). */}
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">  
                {/* contenir le formulaire de création d'utilisateur. Il a des classes pour gérer l'apparence (couleur de fond, ombre, etc.). */}
                  <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
                  {/* <header> qui contient le titre "Create users". */}
                    <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                      <h2 className="font-semibold text-slate-800 dark:text-slate-100">Create users  </h2>
                    </header>
                    </div>
                    </div> 
                    {/* <form> qui encadre le formulaire de saisie de données. */}
                <form>
                <div class="mb-3">
                  {/* lina bech nourbtou label Email bil champ saisie text (input) dima balise label attribut for nhouttou fih id  */}
               <label for="exampleInputEmail1" class="form-label">Email address</label>
               <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
               onChange={e => setEmail(e.target.value)} // ki nclici 3al champ de saisie set email treceperi  lvaleur jdida 
               //mta3 lemail
               
               //bech yweli aana aces bech nbedlou fil champ 
               
               >
                </input>
                </div>
              
               <div class="mb-3">
               <label for="exampleInputPassword1" class="form-label">fullname</label>
               <input type="text" class="form-control" id="exampleInputPassword1" 
               
               onChange={e => setfullname(e.target.value)}
               >
                </input>
               </div>
               <div class="mb-3">
               <label for="exampleInputPassword1" class="form-label">username</label>
               <input type="text" class="form-control" id="exampleInputPassword1" 
                 onChange={e => setusername(e.target.value)}
               >
                             </input>
               </div>


               <div class="mb-3">
               <label for="exampleInputPassword1" class="form-label">password</label>
               <input type="text" class="form-control" id="exampleInputPassword1" 
                 onChange={e => setpassword(e.target.value)}
               >
             
                </input>
               </div>
               <div class="mb-3">
               <label for="exampleInputPassword1" class="form-label">phone</label>
               <input type="text" class="form-control" id="exampleInputPassword1" 
               
               onChange={e => setphone(e.target.value)} //bech yrecepeuri lval jdida mta3 tel eli ktbtha fil champ saisie 
               //bech ba3d yasna3 beha user ya3ni kif bech noud5lou llpage user bech nal9awha valeur heki eli aamrneha fl champ mewjouda

               >
                </input>
               </div>
             <div class="mb-3">
               <label for="exampleInputPassword1" class="form-label">items</label>
               <select   onChange={e => setitems(e.target.value)}> 
               <option >items</option>
         <option value="Admin">Admin</option>
         <option  value="Salary">Salary</option>
       </select> 
               </div>

               <div class="mb-3 form-check">
               <input type="checkbox" class="form-check-input" id="exampleCheck1">
                </input>

                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                {/* tw bech nasn3ou button ismha submit w bech n9oulou ki nnzlou 3al button heki bech nkhdmou fonction createuser */}
                <button onClick={(e)=>createuser(e)} class="btn btn-primary">Submit</button> 
                {/* njarbou fil fonction updateuser  yaani wa9teli ya3ml click bil souris  */}
                 </form>
                     
                    </main>
                    </div>
                    </div>
                    
                          
                         
                        
                    
                            
            );





}
export default CreateUser;