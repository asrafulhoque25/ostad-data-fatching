import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className=" shadow-md">
    <div className="container mx-auto">
       <div className="navbar bg-base-100">
         <div className="flex-1">
           <a className=""><img src="https://i.postimg.cc/CxxXwnbP/client-res2.png" alt="" /></a>
         </div>
         <div className="flex-none gap-5">
           <div className="flex gap-5"> 
             <Link to={"/login"} className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-400 transition-all">Login</Link>
             <Link to={"/otp"} className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-400 transition-all">Otp</Link>
             <Link to={"/product"} className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-400 transition-all">poduct</Link>
             <Link to={"/cart"} className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-400 transition-all">View cart</Link>
           </div>
           <div className="dropdown dropdown-end">
             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
               <div className="w-10 rounded-full">
                 <img src="https://i.postimg.cc/7PQxvDvy/man.png" />
               </div>
             </label>
             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" >
               <li>
                 <a className="justify-between">
                   Profile
                   <span className="badge">New</span>
                 </a>
               </li>
               <li>
                 <a>Settings</a>
               </li>
               <li>
                 <a>Logout</a>
               </li>
             </ul>
           </div>
         </div>
       </div>
     </div>
    </div>
  )
}

export default Navbar