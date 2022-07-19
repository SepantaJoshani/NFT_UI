import React from "react";
import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography ";
import Box from "@mui/system/Box";
import { teamData } from "../../../../data/index";

const Team = () => {
  return (
    <>
      <Typography variant="h2" textAlign="center">
        TEAM
      </Typography>
      <CardsWrapper>
        {teamData.map(({ id, image, name }) => (
          <Card key={id} sx={{ background: "#181818" }}>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar
                  imgProps={{
                    loading: "lazy",
                  }}
                  sx={{
                    minWidth: {
                      xs: "9rem",
                      md: "10rem",
                    },
                    minHeight: {
                      xs: "9.3rem",
                      md: "10.3rem",
                    },
                  }}
                  alt={name}
                  src={image}
                />
              </Box>
              <p>{name}</p>
            </CardContent>
          </Card>
        ))}
      </CardsWrapper>
    </>
  );
};

export default Team;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  p {
    color: #fff;
    text-align: center;
    font-size: 1.3rem;
    margin-top: 1rem;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    p {
      font-size: 1.9rem;
    }
  }
`;
