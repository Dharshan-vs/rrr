import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  CircularProgress,
  Slider,
  IconButton,
  Paper,
} from '@mui/material';
import {
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  VolumeUp as VolumeIcon,
  ArrowBack as BackIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const GradientBackground = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.palette.secondary.main})`,
  padding: theme.spacing(3),
}));

const TestContainer = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  marginTop: theme.spacing(2),
}));

const VolumeSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.primary.main,
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    fontWeight: 'normal',
    top: -6,
    backgroundColor: 'unset',
    color: theme.palette.text.primary,
    '&:before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    },
  },
}));

function Test() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);

  const totalSteps = 10;

  useEffect(() => {
    let timer;
    if (isPlaying && currentStep <= totalSteps) {
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            setCurrentStep((prev) => prev + 1);
            return 0;
          }
          return prevProgress + 10;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, currentStep]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  const handleComplete = () => {
    navigate('/results');
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
            Hearing Test
          </Typography>
        </Box>

        <TestContainer>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
              Step {currentStep} of {totalSteps}
            </Typography>
            <CircularProgress
              variant="determinate"
              value={progress}
              size={120}
              thickness={4}
              sx={{ color: 'primary.main' }}
            />
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>
              Adjust the volume to a comfortable level and click play when ready.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <VolumeIcon sx={{ color: 'white' }} />
              <VolumeSlider
                value={volume}
                onChange={handleVolumeChange}
                aria-labelledby="volume-slider"
              />
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={isPlaying ? <PauseIcon /> : <PlayIcon />}
              onClick={handlePlayPause}
              sx={{
                background: 'linear-gradient(135deg, #2196f3, #1976d2)',
                color: 'white',
                '&:hover': {
                  background: 'linear-gradient(135deg, #1976d2, #1565c0)',
                },
              }}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </Button>
            {currentStep > totalSteps && (
              <Button
                variant="contained"
                size="large"
                onClick={handleComplete}
                sx={{
                  background: 'linear-gradient(135deg, #4caf50, #388e3c)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #388e3c, #2e7d32)',
                  },
                }}
              >
                Complete Test
              </Button>
            )}
          </Box>
        </TestContainer>
      </Container>
    </GradientBackground>
  );
}

export default Test; 