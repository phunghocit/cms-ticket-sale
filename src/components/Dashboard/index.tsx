import { Row } from "antd";
import AreaChart from "./AreaChart";
import DoughnutChart from "./DoughnutChart";
import { log } from "console";

const Dashboard = () => {

  return (
    <div>
      <Row>
        <AreaChart />
      </Row>
      <Row>
        <DoughnutChart />
      </Row>
    </div>
  );
};

export default Dashboard;
