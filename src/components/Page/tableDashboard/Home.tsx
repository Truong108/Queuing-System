import Group1 from '../../../assets/dasboardtable.png';
import Group2 from '../../../assets/Group (1).png';
import Group3 from '../../../assets/icon dasboard05.png';
import Group4 from '../../../assets/Group (2).png';
import '../../../css/Dashboard/home.css';
import { Calendar, CalendarProps, Progress, Statistic, theme } from 'antd';
import type { Dayjs } from 'dayjs';
import { ArrowDownOutlined, ArrowUpOutlined, CodepenOutlined, DesktopOutlined, WechatOutlined } from '@ant-design/icons';

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  
const Home = () => {
    const { token } = theme.useToken();
    const wrapperStyle: React.CSSProperties = {
      width: 370,
      paddingTop: '15px',
      borderRadius: token.borderRadiusLG,
    };
  
    return ( <>
     <div className="totaltabledashboard">
        <div className="tabledashboard">
          <h2 className='bieudo'>Biểu đồ cấp số</h2>
            <div className="contaidashboard">
            <div className='dashboard1'>
               <div className="tab1">
                <img src={Group1} alt="" />
                <label htmlFor="">
                Số thứ tự <br />
                Đã cấp
                </label>
            </div>
            <div className="tab1">
                <h3>4.221</h3>
                <div className='phantram1'>
                <Statistic
                 value={32.41}
                 precision={2}
                 valueStyle={{  
                    color: '#ff9138',
                    fontSize: '14px',
                    borderRadius: '10px',
                    backgroundColor: '#ff950126',
                    whiteSpace: 'nowrap'
                }}
                prefix={<ArrowUpOutlined style={{ position: 'relative', top: '-4px'}}/>}
                suffix="%"
                />
                </div>
            </div>  
            </div>
           <div className='dashboard2'>
           <div className="tab2">
                <img src={Group2} alt="" />
                <label htmlFor="">
                Số thứ tự <br />
                Đã cấp
                </label>
            </div>
            <div className="tab2">
                <h3>3.721</h3>
                <div className='phantram1'>
                <Statistic
                 value={32.41}
                 precision={2}
                 valueStyle={{  
                    color: '#ff9138',
                    fontSize: '14px',
                    borderRadius: '10px',
                    backgroundColor: '#E73F3F26',
                    whiteSpace: 'nowrap'
                }}
                prefix={<ArrowDownOutlined style={{ position: 'relative', top: '-4px'}}/>}
                suffix="%"
                />
                </div>
            </div>
           </div>
            <div className='dashboard3'>
            <div className="tab3">
                <img src={Group3} alt="" />
                <label htmlFor="">
                Số thứ tự <br />
                Đã cấp
                </label>
            </div>
            <div className="tab3">
                <h3>468</h3>
                <div className='phantram2'>
                <Statistic
                 value={56.41}
                 precision={2}
                 valueStyle={{  
                    color: '#ff9138',
                    fontSize: '14px',
                    borderRadius: '10px',
                    backgroundColor: '#ff950126',
                    whiteSpace: 'nowrap'
                }}
                prefix={<ArrowUpOutlined style={{ position: 'relative', top: '-4px'}}/>}
                suffix="%"
                />
                </div>
            </div>
            </div>
            <div className='dashboard4'>
            <div className="tab4">
                <img src={Group4} alt="" />
                <label htmlFor="">
                Số thứ tự <br />
                Đã cấp
                </label>
            </div>
            <div className="tab4">
                <h3>32</h3>
                <div className='phantram3'>
                <Statistic
                 value={22.41}
                 precision={2}
                 valueStyle={{  
                    color: '#ff9138',
                    fontSize: '14px',
                    borderRadius: '10px',
                    backgroundColor: '#E73F3F26',
                    whiteSpace: 'nowrap',
                    marginRight: '10px'
                }}
                prefix={<ArrowDownOutlined style={{ position: 'relative', top: '-4px'}}/>}
                suffix="%"
                />
                </div>
            </div>
            </div>
            </div>
          <div className="bangthongkelinechar">
            <div className="bangthongke">
              <div>
                <span className="textthongke">Bảng thống kê theo ngày</span>
                <br />
                <i>Năm 2023</i>
              </div>
              <div>
                <div className="xemngay">
                  <span>Xem theo</span>
                  <select name="" id="">
                    <option value="">Ngày</option>
                    <option value="">Tháng</option>
                    <option value="">Năm</option>
                  </select>
                </div>
              </div>
            </div>
            {/* <LineChartComponent /> */}
          </div>
        </div>
        <div className="bang2">
          <h2 className='tongquan'>Tổng quan</h2>
          <div className="bangthongkee">
          <div className="progress-container">
            <div className="outer-circle">
                <div className="inner-circle">
                <Progress type="circle" percent={90} width={80} />
                </div>
            </div>
            </div>
            <div>
              <h3 className="so4221">4.221</h3>
              <div className="icon-container">
              <DesktopOutlined/>Thiết bị
              </div>
            </div>
            <div>
              <span className="textbag2">Đang hoạt động</span>
              <h3 style={{ display: "inline", fontSize: '20px'}} className="so1">3.762
              </h3>
              <br />
              <span className="textbag2">Ngưng hoạt động</span>
              <h3 style={{ display: "inline", fontSize: '20px'}} className="so1">3.762
              </h3>
            </div>
          </div>
          <div className="bangthongkee">
          <div className="progress-container">
            <div className="outer-circle">
                <div className="inner-circle">
                <Progress type="circle" percent={76} width={80} />
                </div>
            </div>
            </div>
            <div>
              <h3 className="so276">276</h3>
              <div className="icon-container2">
              <WechatOutlined />Dịch vụ
              </div>
            </div>
            <div>
              <span className="textbag2">Đang hoạt động</span>
              <h3
                style={{ display: "inline", color: "#4277FF", fontSize: '20px' }}
                className="so2">210
              </h3>
              <br />
              <span className="textbag2">Ngưng hoạt động</span>
              <h3
                style={{ display: "inline", color: "#4277FF", fontSize: '20px' }}
                className="so2">66
              </h3>
            </div>
          </div>
          <div className="bangthongkee">
          <div className="progress-containerr">
            <div className="outer-circlee">
                <div className="middle-circlee">
                <div className="inner-circlee">
                    <Progress type="circle" percent={86} width={80} />
                </div>
                </div>
            </div>
            </div>
            <div>
              <h3 className="so4221">4.221</h3>
              <div className="icon-container3">
                <CodepenOutlined />
                <span>Cấp số</span>
            </div>
            </div>
            <div>
              <span className="textbag2">Đang chờ</span>
              <h3
                style={{ display: "inline", color: "#35C75A", fontSize: '20px' }}
                className="so3">3.721
              </h3>
              <br />
              <span className="textbag2">Đã sử dụng</span>
              <h3
                style={{ display: "inline", color: "#35C75A", fontSize: '20px' }}
                className="so3">486
              </h3>
              <br/>
              <span className="textbag2">Bỏ qua</span>
              <h3
                style={{ display: "inline", color: "#35C75A", fontSize: '20px' }}
                className="so3"> 32
              </h3>
            </div>
          </div>
          <div className="CalendarHome">
          <div className='calendar' style={wrapperStyle}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </div>
          </div>
        </div>
      </div>
    </> );
}
 
export default Home;