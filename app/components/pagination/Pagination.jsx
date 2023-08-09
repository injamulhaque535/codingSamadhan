import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationRounded = () => {
  return (
    <Stack spacing={2}>
      <Pagination variant="outlined" shape="rounded" count={10} page={10} />
    </Stack>
  );
};

export default PaginationRounded;
