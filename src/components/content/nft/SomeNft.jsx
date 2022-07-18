import styled from "@emotion/styled";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { nftData } from "../../../../data/index";
const SomeNft = () => {
  return (
    <>
      <Typography variant="h2" textAlign="center">
        NFT
      </Typography>
      <CardsWrapper>
        {nftData.map(({ id, image, eth, name }) => (
          <Card key={id} sx={{ background: "#2c2c2c" }}>
            <CardMedia component="img" image={image} alt={name} />
            <CardContent sx={{ px: 1, "&.MuiCardContent-root": { pb: 1 } }}>
              <p>{name}</p>
              <p className="second-p">{eth}/12 ETH</p>
            </CardContent>
          </Card>
        ))}
      </CardsWrapper>
    </>
  );
};

export default SomeNft;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  border-radius: 6px;
  overflow: hidden;
  p {
    color: #fff;
    font-size: 1rem;
  }
  .second-p {
    margin-top: 0.5rem;
    font-weight: 600;
  }
  img {
    min-height: 11rem;
    border-radius: 6px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    p {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 320px) {
    p {
      font-size: 0.8rem;
    }
  }
`;
