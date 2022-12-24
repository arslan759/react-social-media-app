import Dashboard from "../components/admin/AdminDashboard/Dashboard";
import AdminNavbar from "../components/admin/AdminDashboard/Navbar";
import PieChart from "../components/admin/AdminDashboard/PieChart";
import AdminSidebar from "../components/admin/AdminDashboard/Sidebar";


const AdminPage = () => {

    return (
        <> 
        <AdminNavbar/>
        <AdminSidebar/>
        <Dashboard/>
        <PieChart/>
        </>
    );
  };
  
  export default AdminPage;