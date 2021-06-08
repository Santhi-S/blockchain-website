import React from "react";
import {
  LiveAuctionPage,
  Title,
  Table,
  Box,
  BoxWrapper,
  Button,
} from "./LiveAuction.styles";

function LiveAuction() {
  return (
    <>
      <LiveAuctionPage>
        <Title>Live Auction</Title>
        <Table>
          <tr>
            <Box>Commodity</Box>
            <Box>Grade</Box>
            <Box>Lot No.</Box>
            <Box>Amount (Kg)</Box>
            <Box>Base Price (Rs)</Box>
            <Box>Base Price (E)</Box>
            <Box></Box>
          </tr>
          <tr>
            <Box>
              <BoxWrapper>
                Yard Lay Beans
                <img src="" alt="" />
              </BoxWrapper>
            </Box>
            <Box>1</Box>
            <Box>Y1E211</Box>
            <Box>10</Box>
            <Box>70</Box>
            <Box>0.00034</Box>
            <Box>
              <Button to="/">Proceed</Button>
            </Box>
          </tr>
          <tr>
            <Box>
              <BoxWrapper>
                Brinjal
                <img src="" alt="" />
              </BoxWrapper>
            </Box>
            <Box>2</Box>
            <Box>B2E301</Box>
            <Box>15</Box>
            <Box>60</Box>
            <Box>0.00029</Box>
            <Box>
              <Button to="/">Proceed</Button>
            </Box>
          </tr>
        </Table>
      </LiveAuctionPage>
    </>
  );
}
export default LiveAuction;
