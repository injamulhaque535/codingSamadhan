import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const PaginationRounded = ({ totalPfItemsCount }) => {
  const [pageCounter, setpageCounter] = useState(1);
  const router = useRouter();
  const pathname = usePathname();
  const searchparams = useSearchParams();

  // console.log(totalPfItemsCount);
  const perPage = 9;

  // create pagination query string
  const createQueryString = useCallback((name, value) => {
    const params = new URLSearchParams(searchparams);
    params.set(name, value);
    return params.toString();
  });

  // set query string
  useEffect(() => {
    router.push(pathname + "?" + createQueryString("page", pageCounter));
  }, [pageCounter]);

  return (
    <Stack spacing={2}>
      <Pagination
        variant="outlined"
        shape="rounded"
        count={Math.ceil(totalPfItemsCount / perPage)}
        page={pageCounter}
        onChange={(event, value) => setpageCounter(value)}
      />
    </Stack>
  );
};

export default PaginationRounded;
