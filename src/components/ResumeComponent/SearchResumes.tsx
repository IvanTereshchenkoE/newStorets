import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useTypeSelector } from "../../hooks/useTypeSelector";

export default function SearchResumes() {
  const { resume } = useTypeSelector((state) => state);
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={resume.list.map((job) => job.name)}
        renderInput={(params) => (
          <TextField {...params} label="Searches jobs" />
        )}
      />
    </Stack>
  );
}
