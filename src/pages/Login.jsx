import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const GradientBackground = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.palette.secondary.main})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  width: '100%',
  maxWidth: 400,
}));

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    navigate('/home');
  };

  return (
    <GradientBackground>
      <Container maxWidth="sm">
        <StyledPaper elevation={3}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
            HearSense
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 4 }}>
            Your Personal Hearing Assistant
          </Typography>

          <Box component="form" onSubmit={handleLogin} sx={{ width: '100%' }}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
              }}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Link
              component="button"
              variant="body2"
              sx={{ color: 'primary.main', display: 'block', textAlign: 'center', mb: 2 }}
            >
              Forgot Password?
            </Link>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Don't have an account?{' '}
                <Link
                  component="button"
                  variant="body2"
                  sx={{ color: 'primary.main', fontWeight: 'bold' }}
                >
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </StyledPaper>
      </Container>
    </GradientBackground>
  );
}

export default Login; 