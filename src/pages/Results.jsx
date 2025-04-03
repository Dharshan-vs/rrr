import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Paper,
  Grid,
  LinearProgress,
} from '@mui/material';
import {
  ArrowBack as BackIcon,
  Download as DownloadIcon,
  Share as ShareIcon,
  Print as PrintIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const GradientBackground = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.palette.secondary.main})`,
  padding: theme.spacing(3),
}));

const ResultCard = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  height: '100%',
}));

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  '& .MuiLinearProgress-bar': {
    borderRadius: 5,
  },
}));

function Results() {
  const navigate = useNavigate();

  // Mock data - replace with actual test results
  const testResults = {
    date: new Date().toLocaleDateString(),
    overallScore: 85,
    categories: [
      { name: 'Left Ear', score: 90 },
      { name: 'Right Ear', score: 80 },
      { name: 'Speech Recognition', score: 85 },
      { name: 'Background Noise', score: 75 },
    ],
  };

  const getScoreColor = (score) => {
    if (score >= 90) return '#4caf50';
    if (score >= 70) return '#2196f3';
    return '#f44336';
  };

  return (
    <GradientBackground>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <IconButton 
            onClick={() => navigate('/home')}
            sx={{ color: 'white', mr: 2 }}
          >
            <BackIcon />
          </IconButton>
          <Typography variant="h4" component="h1" sx={{ color: 'white', fontWeight: 'bold' }}>
            Test Results
          </Typography>
        </Box>

        <ResultCard sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ color: 'white' }}>
              Test Date: {testResults.date}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: 'white' }}>
                <DownloadIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <ShareIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <PrintIcon />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h3" sx={{ color: 'white', mb: 1 }}>
              {testResults.overallScore}%
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Overall Hearing Score
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {testResults.categories.map((category, index) => (
              <Grid item xs={12} key={index}>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body1" sx={{ color: 'white' }}>
                      {category.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: getScoreColor(category.score) }}>
                      {category.score}%
                    </Typography>
                  </Box>
                  <StyledLinearProgress
                    variant="determinate"
                    value={category.score}
                    sx={{
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: getScoreColor(category.score),
                      },
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </ResultCard>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/test')}
            sx={{
              background: 'linear-gradient(135deg, #2196f3, #1976d2)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(135deg, #1976d2, #1565c0)',
              },
            }}
          >
            Retake Test
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/home')}
            sx={{
              background: 'linear-gradient(135deg, #4caf50, #388e3c)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(135deg, #388e3c, #2e7d32)',
              },
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    </GradientBackground>
  );
}

export default Results; 