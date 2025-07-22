import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Skeleton,
  Paper
} from '@mui/material';

const SkeletonRow = () => (
  <TableRow>
    {Array.from({ length: 10 }).map((_, idx) => (
      <TableCell align="center" key={idx}>
        <Skeleton variant="rectangular" height={25} />
      </TableCell>
    ))}
  </TableRow>
);

const EmployeeListShimmer = ({ rows = 5 }) => {
  return (
    <Box sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
      <Skeleton variant="text" width="30%" height={40} sx={{ mb: 2 }} />
      <Skeleton variant="text" width="20%" height={30} sx={{ mb: 3 }} />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {Array.from({ length: 10 }).map((_, i) => (
                <TableCell align="center" key={i}>
                  <Skeleton variant="text" width="80%" />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from({ length: rows }).map((_, i) => (
              <SkeletonRow key={i} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EmployeeListShimmer;
