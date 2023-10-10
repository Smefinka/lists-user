import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
function Root(){
    return(
        <>
      <Navbar />
      <main>
        <Outlet />
      </main>
<Products></Products>
        </>
    )
}
export default Root;