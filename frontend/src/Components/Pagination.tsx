import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagin: React.FC<PaginProps> = ({ totalPages, onPageChange }) => {
  const [page, setPage] = useState(1);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    onPageChange(value);
  };

  return (
    <div className="flex justify-center mt-5">
      <Stack spacing={2}>
        <Pagination count={totalPages} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
};

export default Pagin;
