import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import styled from "styled-components";

const Qualy = styled.div`
  margin-top: 25px;
`;

export default function Qualification() {
  const qualifications = [
    { title: "Любая" },
    { title: "Любая" },
    { title: "Любая" },
    { title: "Любая" },
    { title: "Любая" },
  ];
  return (
    <Qualy>
      <b>Квалификации </b>
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={qualifications.map(qual => qual.title)}
          renderInput={params => <TextField {...params} label="Any" />}
        />
      </Stack>
    </Qualy>
  );
}
