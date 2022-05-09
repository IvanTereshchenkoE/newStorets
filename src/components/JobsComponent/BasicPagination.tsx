import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

type Props = {
  handleChangePage(value: number): void;
  total: number;
  page: number;
};

const BasicPagination = ({ handleChangePage, total, page }: Props) => {
  const count = Math.ceil(total / 25);
  const handleChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ): void => {
    handleChangePage(value);
  };
  return (
    <Stack>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Stack>
  );
};

export default BasicPagination;
