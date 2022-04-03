import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Level } from "../../types/jobs";
import styled from "styled-components";

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
  title: string;
  company: string;
  salary: number;
  level: keyof typeof Level;
  avatar: string;
  rating: number;
  activity: string[];
  created_at: string;
  skills: string[];
  currency: string;
}

const JobsCard: React.FC<Props> = ({
  title,
  company,
  salary,
  level,
  activity,
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
                {title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Salary {salary} $
              </Typography>
            </MainTitle>
            <MainDiscription>
              <Typography variant="body2">{level}</Typography>
              <Tags>
                {activity.map(tag => (
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

export default JobsCard;
