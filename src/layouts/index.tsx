import {DropdownMenuItem, Sidebar, Main, Content, Layout, Logo, Title, MenuItem, Header} from "./styles";
import AuthUser from "./AuthUser";
import {HomeOutlined, FileSearchOutlined,DesktopOutlined,SettingOutlined } from "@ant-design/icons";
import { ReactNode} from "react";
import { MenuProps, Space } from "antd";
import LogoInsign from '../shared/images/Logo.png'
interface Props {
  children?: ReactNode,
  title?:any
}

const PrivateLayout = ({ children, title }:Props) => {
  const items: MenuProps["items"] = [
    {
      label: <MenuItem to="/ServicePack"> Gói dịch vụ </MenuItem>,
      key: "0",
    },
  ];
  return (
    <Layout >
      <Sidebar>
        <Logo><img src={LogoInsign} className="logo Alta" alt="Alta logo" width='120px'/></Logo>
        <MenuItem to="/">
        <HomeOutlined /> Trang chủ
        </MenuItem>
        <MenuItem to="/TicketManagement">
          <DesktopOutlined />Quản lý vé
        </MenuItem>

        <MenuItem to="/TicketCheck">
        <FileSearchOutlined /> Đối soát vé
        </MenuItem>
        <DropdownMenuItem menu={{ items }} >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
            <SettingOutlined />Cài đặt
              {/* <MoreOutlined /> */}
            </Space>
          </a>
        </DropdownMenuItem>
      </Sidebar>
      <Main>
        <Header>
          <Title>
            {title}
          </Title>
          <AuthUser />
        </Header>
        <Content>{children}</Content>
      </Main>
    </Layout>
  );
};

export default PrivateLayout;
