import { Row } from "antd"
import AreaChart from "./AreaChart"
import DoughnutChart from "./DoughnutChart"

const Dashboard = () => {

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
