import { Button, Dropdown } from "antd";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 17% 83%;
  width: 100vw;
  padding: 1rem;
  max-height: 100vh;
  overflow-y: hidden;
  transition: all 0.5s ease;
  background: #F9F6F4;

  &.active{
    grid-template-columns: 6.5% 93.5%;
  }


  @media screen and (max-width: 600px) {
    display:grid;
    width: 200%;
    grid-template-columns: 50% 50%;
    transform: translateX(-50%);
    overflow-x: hidden;
    overflow-y: auto;

    &.active{
      grid-template-columns: 50% 50%;
      transform: translateX(0);
  }
  }
`;
export const Header = styled.div`
  width: 100%;
  height: 10vh;
  margin-bottom: 1rem;

  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:  center;
  /* padding: 1rem; */
`;
export const Sidebar = styled.div`


  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 1rem;
  margin-right: 1rem;



`;

export const DropdownMenuItem = styled(Dropdown)`
    backdrop-filter: blur(25px) saturate(200%);
    -webkit-backdrop-filter: blur(25px) saturate(200%);
    /* background-color: rgba(17, 25, 40, 0.73); */
    border-radius: 12px;
    /* border: 1px solid rgba(255, 255, 255, 0.125); */

    display: flex;
    justify-content:start;
    align-items:center;
    color: black;
    text-align: left;
    font-size: 1.25rem;
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.8rem;
    transition: 3s ease;
    overflow: hidden !important;

    svg{
      margin-right: 20px;
    }

    &.active{
      background: #FF7506; 
    }

    :hover {
      background: #FF7506;
    }
`
export const MenuItem = styled(NavLink)`
    backdrop-filter: blur(25px) saturate(200%);
    -webkit-backdrop-filter: blur(25px) saturate(200%);
    border-radius: 12px;
    display: flex;
    justify-content:start;
    align-items:center;
    color: black;
    text-align: left;
    font-size: 1.25rem;
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.8rem;
    transition: 3s ease;
    overflow: hidden !important;

    svg{
      margin-right: 20px;
    }

    :hover {
      background: #FF7506;
    }

    &.active{
      background-color:#FF7506 !important;
    }
`
export const Logo = styled.a`
  font-size: 2rem !important;
  margin: 0 !important;
  margin-bottom: 1.5rem !important;
  font-weight: bold;
  background: transparent !important;
  border-radius: 0px  !important;
  text-align: center !important;
  justify-content:center !important;
  width: 100%;
  padding: 0.5rem;
  color: white;
  overflow: hidden !important;
  svg{
    margin-right: 0 !important;
  }
`

export const Main = styled.div`
  /* margin-left: 1rem; */
`;

export const Title = styled.div`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: #001f3f;
  display: flex;
  justify-content: start;
  align-items: center;
`

export const ToggleSidebarButton = styled(Button)`
  background-color:transparent;
  margin-right: 1rem;
  border: 1px solid #001f3f;
  color: #001f3f;

  :hover{
    border: 1px solid pink !important;
    color: pink !important;
  }

`

export const Content = styled.div`
  background: #FFFFFF;
  border-radius: 24px;
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  /* backdrop-filter: blur(6.1px); */
  /* -webkit-backdrop-filter: blur(6.1px); */
  padding: 1rem;
  bottom: 0;
  height: calc(100vh - 10vh - 4.2rem);
  /* overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0px;
  } */
`;


