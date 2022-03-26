import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

import { useTypeSelector } from "../hooks/useTypeSelector";

export default function FreeSolo() {
  const { jobs } = useTypeSelector(state => state.jobs);
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={jobs.map(job => job.title)}
        renderInput={params => <TextField {...params} label="Searches jobs" />}
      />
    </Stack>
  );
}