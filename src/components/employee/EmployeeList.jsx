import { Avatar, Box, Button, Chip, InputAdornment, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import { IdCard } from 'lucide-react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import IDCard from './IDCard';
import { createRoot } from 'react-dom/client';
import TablePagination from '@mui/material/TablePagination';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import ShieldIcon from '@mui/icons-material/Shield';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import GppBadOutlinedIcon from '@mui/icons-material/GppBadOutlined';
import { useMediaQuery, useTheme } from '@mui/material';
import { useConfirmDialog } from '../context/ConfirmDialogContext';
const EmployeeList = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));  //screen < 600px
  const employees = useSelector((store) => store.employee.employees)
  // console.log("Employee data: ", employees);
  const navigate = useNavigate();
  const confirmDialog = useConfirmDialog();
  const [searchQuery, setSearchQuery] = useState('');

  const [page, setPage] = useState(0); // MUI TablePagination is 0-indexed
  const [rowsPerPage, setRowsPerPage] = useState(5);


  const filteredEmployees = employees.filter((emp) =>
    emp.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.phoneNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.empId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page
  };

  const paginatedEmployees = filteredEmployees.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );



  const handleClick = () => {
    navigate('/employees/new')
  }

  const handleEdit = async (empId) => {
    const yes = await confirmDialog("Do you really want to edit this employee ?");
    if (yes) {
      navigate(`/employee-edit/${empId}`)
    }
  }

  const generatePDF = async (emp) => {
    const yes = await confirmDialog("Do you really want to Generate ID card ?");
    if (yes) {
      const container = document.createElement('div');
      document.body.appendChild(container);
      container.style.position = 'absolute';
      container.style.top = '-10000px'; //hide from screen

      const root = createRoot(container);
      root.render(<IDCard emp={emp} />)

      setTimeout(async () => {
        const canvas = await html2canvas(container.firstChild);
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: [300, 250]
        })

        pdf.addImage(imgData, 'PNG', 0, 0, 300, 250);
        pdf.save(`${emp.fullName}_IDCard.pdf`);

        root.unmount();
        document.body.removeChild(container);
      }, 500)
    }
  }

  const handleExportToExcel = async () => {
    const yes = await confirmDialog("Do you really want to export Excel file ?");

    if (yes) {
      const exportData = employees.map(emp => ({
        "Employee ID": emp.empId,
        "Full Name": emp.fullName,
        "Email": emp.email,
        "Phone Number": emp.phoneNumber,
        "Designation": emp.designation,
        "Department": emp.department,
        "Joining Date": emp.joiningDate,
        "Employee Type": emp.employeeType,
        "Work Location": emp.workLocation,
        "Status": emp.status,
        "Is Admin": emp.isAdmin ? "Yes" : "No",
        "Manager ID/Name": emp.managerNameOrId,
        "Skills": emp.skills.join(', '),
        "Date of Birth": emp.dateOfBirth,
        "Emergency Contact Name": emp.emergencyContact?.fullName || '',
        "Emergency Contact Relationship": emp.emergencyContact?.relationship || '',
        "Emergency Contact Phone": emp.emergencyContact?.phoneNumber || ''
      }));

      const workSheet = XLSX.utils.json_to_sheet(exportData);

      // Auto-width columns based on content
      const maxWidths = exportData.reduce((widths, row) => {
        return Object.keys(row).map((key, i) => {
          const valueLength = String(row[key]).length;
          return Math.max(widths[i] || key.length, valueLength);
        });
      }, []);

      workSheet['!cols'] = maxWidths.map(w => ({ wch: w + 2 })); // +2 padding
      const workBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workBook, workSheet, "Employees");

      //from video
      XLSX.writeFile(workBook, "MyExcel.xlsx");
    }
  }

  if (employees.length === 0) {
    return <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 2, mt: 3 }}>
      <Typography variant='h6' >No employees found</Typography>
      <Typography variant='body1' mt={1} sx={{ opacity: 0.6 }}>  Overview of your employee management system </Typography>
      <Button variant='contained' onClick={handleClick}>Add First Employee</Button>
    </Box>
  }
  return (
    <Box sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
        <Box>
          <Typography variant='h4' sx={{ display: { xs: "none", sm: "none", md: "block" } }} fontWeight={600}>Employees</Typography>
          <Typography variant='body1' mt={1} sx={{ opacity: 0.6, display: { xs: "none", sm: "none", md: "block" } }} >Manage your organization's employees</Typography>
        </Box>

        <Stack direction={{ xs: 'row-reverse', }} spacing={1} alignItems="flex-end">
          <Button
            onClick={handleExportToExcel}
            variant="outlined"
            sx={{
              color: 'inherit',
              '&:hover': { backgroundColor: '#e4eded', color: 'blueviolet' }
            }}
            startIcon={<FileDownloadOutlinedIcon />}
          >
            Export
          </Button>
          <Button variant='contained' onClick={handleClick} startIcon={<AddOutlinedIcon />}>Add Employee</Button>
        </Stack>
      </Box>

      <Box sx={{ p: 2, boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", mt: 2 }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'stretch', sm: 'center' }}
          spacing={2}
        >
          <Typography variant='h6' fontWeight={600} sx={{ display: { sx: "none", sm: "block" } }} fontSize={{ xs: '1.5rem', sm: '2rem' }}>Employees Directory</Typography>

          <TextField
            placeholder="Search employees"
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ width: { xs: '80%', sm: 300 } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" color="action" />
                </InputAdornment>
              )
            }}
          />
        </Stack>



        <TableContainer sx={{ width: '100%', overflowX: 'auto' }} >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center'><strong>Sl no</strong></TableCell>
                <TableCell align='center'><strong>Fullname</strong></TableCell>
                <TableCell align='center' sx={{ display: { xs: "none", sm: "table-cell" } }}><strong>Profile photo</strong></TableCell>
                <TableCell align='center'><strong>Emp phone</strong></TableCell>
                <TableCell align='center' sx={{ display: { xs: "none", sm: "table-cell" } }}><strong>Emp Id</strong></TableCell>
                <TableCell align='center' sx={{ display: { xs: "none", sm: "none", md: "table-cell" } }}><strong>Designation</strong></TableCell>
                <TableCell align='center' sx={{ display: { xs: "none", sm: "none", md: "table-cell" } }}><strong>Department</strong></TableCell>
                <TableCell align='center' sx={{ display: { xs: "none", sm: "table-cell" } }}><strong>Status</strong></TableCell>
                <TableCell align='center' sx={{ display: { xs: "none", sm: "none", md: "table-cell" } }}><strong>isAdmin</strong></TableCell>
                <TableCell align='center'><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                paginatedEmployees.map((emp, idx) => (
                  <TableRow key={emp.empId}>
                    <TableCell align='center'>{page * rowsPerPage + idx + 1}</TableCell>
                    <TableCell align='center'>{emp.fullName}</TableCell>


                    <TableCell align="center" sx={{ display: { xs: "none", sm: "table-cell" } }}>
                      <Box display="flex" justifyContent="center">
                        <Avatar
                          src={emp.profilePicture}
                          sx={{ width: 40, height: 40, borderRadius: "50%" }}
                          alt="Profile"
                        />
                      </Box>
                    </TableCell>

                    <TableCell align='center'>{emp.phoneNumber}</TableCell>
                    <TableCell align='center' sx={{ display: { xs: "none", sm: "table-cell" } }}>{emp.empId}</TableCell>
                    <TableCell align='center' sx={{ display: { xs: "none", sm: "none", md: "table-cell" } }}>{emp.designation}</TableCell>
                    <TableCell align='center' sx={{ display: { xs: "none", sm: "none", md: "table-cell" } }}>{emp.department}</TableCell>
                    <TableCell align='center' sx={{ display: { xs: "none", sm: "table-cell" } }}>
                      <Chip label={emp.status} color={emp.status === "Active" ? "success" : emp.status === "On Leave" ? "error" : "default"} variant="outlined"
                      />
                    </TableCell>
                    <TableCell align='center' sx={{ display: { xs: "none", sm: "none", md: "table-cell" } }}>
                      {emp.isAdmin === true ? <GppGoodOutlinedIcon color='success' fontSize='large' /> : <GppBadOutlinedIcon color='error' fontSize='large' />}
                    </TableCell>
                    <TableCell align='center'>
                      <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1
                      }}>
                        <Tooltip title="edit details" >
                          <EditIcon color='primary' sx={{ cursor: "pointer" }} fontSize='large' onClick={() => handleEdit(emp.empId)} />
                        </Tooltip>
                        <Tooltip title="generate ID card">
                          <CreditCardOutlinedIcon color='primary' sx={{ cursor: "pointer" }} fontSize='large' onClick={() => generatePDF(emp)} />
                        </Tooltip>
                        <Tooltip title="view details">
                          <ArrowRightAltIcon color='primary' sx={{ cursor: "pointer" }} fontSize='large' onClick={() => navigate(`/employee-details/${emp.empId}`)} />
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={filteredEmployees.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 50]}
        />


      </Box>
    </Box>
  )
}

export default EmployeeList