import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
}

const JobsCard: React.FC<Props> = ({ title, company, salary, id }) => {
  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{
        marginTop: 10,
        marginRight: 10,
        borderRadius: 10,
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          New Jobs {id}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective {salary}
        </Typography>
        <Typography variant="body2">{company}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default JobsCard;
