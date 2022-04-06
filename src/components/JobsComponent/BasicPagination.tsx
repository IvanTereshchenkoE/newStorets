import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { useState } from "react";

type Props = {
  handleChangePage(value: number): void;
};

const BasicPagination = ({ handleChangePage }: Props) => {
  const [page, setPage] = useState(1);
  const handleChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ): void => {
    handleChangePage(value);
    setPage(value);
  };
  return (
    <Stack>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
};

export default BasicPagination;
