import {DropdownMenuItem, Sidebar, Main, Content, Layout, Logo, Title, ToggleSidebarButton, MenuItem, Header} from "./styles";
import AuthUser from "./AuthUser";
import {HomeOutlined, FileSearchOutlined,MessageOutlined,DesktopOutlined,SettingOutlined } from "@ant-design/icons";
import { ReactNode} from "react";
import { MenuProps, Space } from "antd";
import LogoInsign from '../../shared/images/Logo.png'
interface Props {
  children?: ReactNode,
  title?:any
}

const PrivateLayout = ({ children, title }:Props) => {
  const items: MenuProps["items"] = [
    {
      label: <MenuItem to="/RoleManagement/Table"> Gói dịch vụ </MenuItem>,
      key: "0",
    }
  ];
          // options={[
        //   { value: "qlvt", label: "Quản lý vai trò" },
        //   { value: "qltk", label: "Quản lý tài khoản" },
        //   { value: "nknd", label: "Nhật ký người dùng" },
        // ]}
  return (
    <Layout >
      <Sidebar>
        <Logo><img src={LogoInsign} className="logo Alta" alt="Alta logo" width='120px'/></Logo>
        <MenuItem to="/Dashboard">
        <HomeOutlined /> Trang chủ
        </MenuItem>
        <MenuItem to="/DevicePage/Table">
          <DesktopOutlined />Quản lý vé
        </MenuItem>

        <MenuItem to="/NumberLevel/Table">
        <FileSearchOutlined /> Đối soát vé
        </MenuItem>
          {/* <SettingOutlined /> */}
          <DropdownMenuItem menu={{ items }} trigger={["click"]}>
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
