import react,{useState,useEffect }from "react";
import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-08.jpg';
import Image05 from '../../images/user-36-09.jpg';
import Sidebar from '../Sidebar';
import Header from '../Header';
import UserService from "../../services/userService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function Salaryinfo(){
    
    const [email,setEmail]=useState("")
    const [fullname,setfullname]=useState("")
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const [phone,setphone]=useState("")
    const [items,setitems]=useState("")
    const [users,setUsers]=useState([])
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const us=new UserService() 
    const navigate = useNavigate(); //1: nasn3ou objet ml userNavigate
    useEffect(() => {
      ListUsersFromBack()
    
   
    } ,[]);
    

    const ListUsersFromBack = () => {
        us.getAll().then((res) => {
          // Filtrer les utilisateurs par le champ "items" ayant la valeur "Salary"
          const salaryUsers = res.data.data.filter((user) => user.items === "Salary");
          setUsers(salaryUsers);
          console.log("la liste des utilisateurs de type Salary", salaryUsers);
        });
      };
      
      
    
    
    //GET By id 
    const ViewUserFunction=(id) =>{ // 2: lina bech nhoutou emhya lm*page eli chnegzoulha bil navigate (dans ce cas mechin mil users lil details user 
    //   //en plus hachtna bil get(id))
      navigate("/Detaille/"  + id, { state: { id: id } });

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
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">List of Salary </h2>
              </header>
              <div className="p-3">
              
                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    {/* Table header */}
                    <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
                      <tr>
                        <th>  <div className="font-semibold text-left">ref</div> </th>
                        <th>  <div className="font-semibold text-left">photo</div> </th>

                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Name</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Email</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">type</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">phone</div>
                        
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">actions</div>

                        
                        </th>
                        
                      </tr>
                    </thead>
                    {/* Table body */}
                    <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
                      {
                        users.map((user,index) => {
                          return (
                            <tr key={user._id}>
                              <td className="p-2 whitespace-nowrap"> 
                              <div className="text-left">{index+1}</div>
                              </td>

                              {/* <td className="p-2 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                                     <img className="rounded-full" src={customer.image} width="40" height="40" alt={customer.name} /> 
                                   
                                  </div>
                                  <div className="font-medium text-slate-800 dark:text-slate-100">{user.fullname}</div>
                                </div>
                              </td> */}

                              <td className="p-2 whitespace-nowrap">
                                {/* <div className="text-left">{user.photo}</div> */}
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">{user.fullname}</div>
                              </td>


                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">{user.email}</div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left font-medium text-green-500">{user.items}</div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-lg text-center">{user.phone}</div>
                              </td>
                              

                              <td className="p-2 whitespace-nowrap">
                               

                                <button 
                               className="text-white bg-blue-500 px-3 py-1 rounded-lg"
                               onClick={(e)=>{ViewUserFunction(user._id)}}  
                                  > view 
                               
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
export default Salaryinfo;