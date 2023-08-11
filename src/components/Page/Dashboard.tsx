import Personal from "./Personal";
import '../../css/dashboard.css';
const Dashboard = () => {
    return ( <>
      <div className="navtop">
        <div className="dashboard">
          <span>Dashboard</span>
        </div>
        <Personal/>
      </div>
      
    </> );
}
 
export default Dashboard;