import styled from "styled-components";
import { Link } from "react-router-dom";

export const LiveAuctionPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Title = styled.div`
  font-size: 36px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  height: 300px;
  width: 1000px;
`;

export const Box = styled.th`
  height: 75px;
  width: 250px;
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled(Link)`
  background: beige;
  white-space: nowrap;
  padding: 12px 20px;
  color: #000;
  font-size: 16px;
  text-decoration: none;
  border: 2px solid #000;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-weight: bold;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff;
    border: 2px solid #fff;
  }
`;
