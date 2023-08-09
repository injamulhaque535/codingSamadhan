import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";

const PaginationRounded = ({
  portfolioItems,
  itemsPerPage,
  onPaginationChange,
}) => {
  const [pageCounter, setpageCounter] = useState(1);

  useEffect(() => {
    const value = itemsPerPage * pageCounter;
    const fromValue = value - itemsPerPage;
    const toValue = value;
    onPaginationChange(fromValue, toValue);
  }, [pageCounter]);

  return (
    <Stack spacing={2}>
      <Pagination
        variant="outlined"
        shape="rounded"
        count={Math.ceil(portfolioItems.length / itemsPerPage)}
        page={pageCounter}
        onChange={(event, value) => setpageCounter(value)}
      />
    </Stack>
  );
};

export default PaginationRounded;
