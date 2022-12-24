import Dashboard from "../components/admin/AdminDashboard/Dashboard";
import AdminNavbar from "../components/admin/AdminDashboard/Navbar";
import AdminSidebar from "../components/admin/AdminDashboard/Sidebar";


const AdminPage = () => {

    return (
        <> 
        <AdminNavbar/>
        <AdminSidebar/>
        <Dashboard/>
        </>
    );
  };
  
  export default AdminPage;