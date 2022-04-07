import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { useState } from "react";

type Props = {
  handleChangePage(value: number): void;
  total: number;
};

const BasicPagination = ({ handleChangePage, total }: Props) => {
  let count = Math.ceil(total / 25);
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
      <Pagination count={count} page={page} onChange={handleChange} />
    </Stack>
  );
};

export default BasicPagination;
