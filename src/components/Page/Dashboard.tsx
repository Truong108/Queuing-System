import Personal from "./Personal";
import '../../css/dashboard.css';
import Home from "./tableDashboard/Home";
import '../../css/Dashboard/home.css';

const Dashboard = () => {
    return ( <>
    <div className="homedashboard">
    <div className="headerdashb">
      <div className="textheader">
        <span>Dashboard</span>
        </div>
        <div className="infodashboard">
       <p> <Personal/></p>
        </div>
      </div>
      <Home/>
    </div>
    </> );
}
 
export default Dashboard;