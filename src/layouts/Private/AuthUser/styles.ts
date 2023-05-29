import styled from "styled-components";
import { BellOutlined,MailOutlined } from '@ant-design/icons';

export const UserInfo = styled.div`

  img{
    width: 4rem;
    border-radius: 50%;
  }  
`
export const AuthUserForm = styled.div`
  display: grid;
  
  grid-template-columns: 3rem 1fr;
  align-items:  center;
  margin: 1rem 0;
  gap: 0.5rem;
  border-radius: 1rem;
  padding: 0.55rem 1rem;
  /* border-sizing: border-box; */

  display: flex;
  
`
export const Bell = styled(BellOutlined)`
  margin: 0;
  font-size: 1.5rem;
`
export const Mail = styled(MailOutlined)`
  margin: 0;
  font-size: 1.5rem;
`
export const Signal = styled.h2`
  display: flex;
  margin: 0;
  font-size: 1.5rem;
`
