import { Row } from "antd"
import AreaChart from "./AreaChart"
import DoughnutChart from "./DoughnutChart"
import { log } from "console"

const Dashboard = () => {
  if ('2021-10-21' <'2021-10-22') {
    console.log(true);
    
  }else{
    console.log(false);
    
  }
  return (
    <div>
      <Row > 
      <AreaChart/>
      </Row>
      <Row> 
      <DoughnutChart/>

      </Row>
    </div>
  )
}

export default Dashboard
