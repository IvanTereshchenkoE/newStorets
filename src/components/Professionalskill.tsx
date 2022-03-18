import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import styled from "styled-components";

const Prof = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`;

export default function Professionalskill() {
  const professionalskill = [
    { title: "skill" },
    { title: "skill" },
    { title: "skill" },
    { title: "skill" },
    { title: "skill" },
  ];
  return (
    <Prof>
      <b>Профессиональные навыки </b>
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={professionalskill.map(prof => prof.title)}
          renderInput={params => <TextField {...params} label="skill" />}
        />
      </Stack>
    </Prof>
  );
}
