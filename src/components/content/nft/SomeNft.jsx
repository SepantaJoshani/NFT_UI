import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { nftData } from "../../../../data/index";
import { CardsWrapper } from "./SomeNft.styled";

const SomeNft = () => {
  return (
    <>
      <Typography variant="h2" textAlign="center">
        NFT
      </Typography>
      <CardsWrapper>
        {nftData.map(({ id, image, eth, name }) => (
          <Card key={id} sx={{ background: "#2c2c2c" }}>
            <CardMedia
              loading="lazy"
              component="img"
              image={image}
              alt={name}
            />
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
