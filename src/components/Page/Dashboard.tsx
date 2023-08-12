import Personal from "./Personal";
import '../../css/dashboard.css';
const Dashboard = () => {
    return ( <>
    <div className="home">
    <div className="navtop">
        <div className="textnavtop">
          <span>Dashboard</span>
        </div>
        <Personal/>
      </div>
    </div>
    </> );
}
 
export default Dashboard;