import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Card, CardContent, Avatar, Grid } from '@mui/material';
import { PeopleAlt, PersonAdd, PersonOff, AccessTime } from '@mui/icons-material';

const Dashboard = () => {
  const employees = useSelector((store) => store.employee.employees);
  const stats = {
    total: employees.length,
    active: employees.filter((emp) => emp.status === 'Active').length,
    inactive: employees.filter((emp) => emp.status === 'Inactive').length,
    onLeave: employees.filter((emp) => emp.status === 'On Leave').length,
  };

  const dashboardCards = [
    {
      title: 'Total Employees',
      value: stats.total,
      icon: PeopleAlt,
      color: '#1976d2',
      bgColor: '#e3f2fd',
    },
    {
      title: 'Active Employees',
      value: stats.active,
      icon: PersonAdd,
      color: '#2e7d32',
      bgColor: '#e8f5e9',
    },
    {
      title: 'Inactive Employees',
      value: stats.inactive,
      icon: PersonOff,
      color: '#d32f2f',
      bgColor: '#ffebee',
    },
    {
      title: 'On Leave',
      value: stats.onLeave,
      icon: AccessTime,
      color: '#ed6c02',
      bgColor: '#fff3e0',
    },
  ];

  return (
    <Box p={3}>
      <Typography variant='h4' fontWeight={600}> Dashboard </Typography>
      <Typography variant='body1' mt={1} sx={{ opacity: 0.6 }}>
        Overview of your employee management system
      </Typography>
      
      <Grid container spacing={3} mt={3}>
        {dashboardCards.map((card) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={3} 
            key={card.title} 
            className="dashboard-grid-item"
          >
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                transition: '0.3s',
                width: '100%',
                '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.1)' },
              }}
            >
              <CardContent sx={{ padding: '20px' }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      {card.title}
                    </Typography>
                    <Typography variant="h5" fontWeight="bold">
                      {card.value}
                    </Typography>
                  </Box>
                  <Avatar
                    sx={{
                      bgcolor: card.bgColor,
                      color: card.color,
                      width: 40,
                      height: 40,
                    }}
                  >
                    <card.icon fontSize="small" />
                  </Avatar>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;