import Personal from "./Personal";

const Report = () => {
    return ( <>
      <div className="navtop">
        <div className="heading-navtop">
          <span>Báo cáo</span>
          <i className="bi bi-chevron-right"></i>
          <span>Lập báo cáo</span>
        </div>
        <Personal/>
      </div>
    </> );
}
 
export default Report;