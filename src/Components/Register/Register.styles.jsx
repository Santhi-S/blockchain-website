import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.div`
  font-size: 36px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const LoginPage = styled.div`
  display: absolute;
  padding: 200px 250px;
  margin: 0 350px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Username = styled.input`
  margin-bottom: 20px;
  height: 30px;
`;

export const Password = styled.input`
  margin-bottom: 20px;
  height: 30px;
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  border-radius: 50px;
  background: green;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  border: 2px solid green;
  cursor: pointer;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  margin-bottom: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: light green;
    color: #000;
    border: 2px solid light green;
  }
`;

export const Text = styled.p`
  text-align: center;
`;

export const Clicker = styled(Link)`
  margin-left: 5px;
  text-decoration: none;
  color: red;
`;

export const Label = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;
