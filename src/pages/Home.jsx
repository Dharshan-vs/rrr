import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import {
  Person as PersonIcon,
  Hearing as HearingIcon,
  Analytics as AnalyticsIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  Description as DescriptionIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const GradientBackground = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.palette.secondary.main})`,
  padding: theme.spacing(3),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: 'white',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
}));

function Home() {
  const navigate = useNavigate();

  const quickActions = [
    { icon: <SettingsIcon />, label: 'Settings' },
    { icon: <HelpIcon />, label: 'Help' },
    { icon: <DescriptionIcon />, label: 'Reports' },
    { icon: <NotificationsIcon />, label: 'Alerts' },
  ];

  return (
    <GradientBackground>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" sx={{ color: 'white', fontWeight: 'bold' }}>
            HearSense
          </Typography>
          <IconButton sx={{ color: 'white' }}>
            <PersonIcon />
          </IconButton>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ color: 'white', mb: 1 }}>
            Welcome back!
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Your hearing health companion
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <ActionButton onClick={() => navigate('/test')}>
              <HearingIcon sx={{ fontSize: 40 }} />
              <Typography variant="h6">Start Test</Typography>
            </ActionButton>
          </Grid>
          <Grid item xs={12} md={6}>
            <ActionButton>
              <AnalyticsIcon sx={{ fontSize: 40 }} />
              <Typography variant="h6">View History</Typography>
            </ActionButton>
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ color: 'white', mb: 3 }}>
          Quick Actions
        </Typography>

        <Grid container spacing={3}>
          {quickActions.map((action, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <StyledCard>
                <CardContent sx={{ textAlign: 'center', p: 2 }}>
                  <IconButton sx={{ color: 'white', mb: 1 }}>
                    {action.icon}
                  </IconButton>
                  <Typography variant="body1" sx={{ color: 'white' }}>
                    {action.label}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </GradientBackground>
  );
}

export default Home; 