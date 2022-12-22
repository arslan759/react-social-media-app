import React from 'react';
import Dashboard from './components/AdminDashboard/Dashboard';
import Sidebar from './components/AdminDashboard/Sidebar';
import Navbar from './components/AdminDashboard/Navbar';
import PieChart from './components/AdminDashboard/PieChart';
 
function App(){
 
        return (
            <div>
                <Navbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  <Dashboard/>
                  <PieChart/>
                
             </div>
            </div>  
        </div>  
        );
    }
  
export default App;