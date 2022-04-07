import * as React from "react";

import styled from "styled-components";

import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CardPosition = styled.div`
  display: flex;
`;

const Logo = styled.div`
  width: 100px;
`;

const Main = styled.div``;

const MainTitle = styled.div`
  display: flex;
`;

const Tags = styled.div`
  display: flex;
`;

const Tag = styled.div`
  padding-right: 15;
`;

const MainDiscription = styled.div`
  display: flex;
  flex-direction: column;
`;

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

interface Props {
  id: number;
  name: string;
  experience: number;
  level: string;
  tags: string[];
  avatar: string;
}

const ResumeCard: React.FC<Props> = ({
  id,
  name,
  experience,
  level,
  tags,
  avatar,
}) => {
  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{
        marginTop: 10,
        marginRight: 10,
        borderRadius: 10,
      }}
    >
      <CardPosition>
        <Logo>
          <CardMedia
            component="img"
            height="100"
            image={avatar}
            alt="image"
            style={{
              borderRadius: 90,
            }}
          ></CardMedia>
        </Logo>
        <Main>
          <CardContent>
            <MainTitle>
              <Typography
                variant="h6"
                component="div"
                style={{ marginRight: 20 }}
              >
                {name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Experience {experience} years
              </Typography>
            </MainTitle>
            <MainDiscription>
              <Typography variant="body2">{level}</Typography>
              <Tags>
                {tags.map(tag => (
                  <Tag>{tag} -</Tag>
                ))}
              </Tags>
            </MainDiscription>
          </CardContent>
        </Main>
      </CardPosition>
    </Card>
  );
};

export default ResumeCard;
