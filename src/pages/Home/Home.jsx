import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from 'styled-components';
const AnimatedBox = styled(Box)`
  position: fixed;
  right: 3%;
  top: ${({ show }) => (show ? '10%' : '-100%')};
  transition: top 2s ease-in-out;
`;
const Home = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 6000);
    }, 15000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <AnimatedBox
        show={showMessage}
        color="white"
        sx={{
          textShadow: '8px 8px 16px rgba(0, 0, 0, 0.7)',
        }}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        zIndex={100}
      >
        <Typography variant="body1">Please Signup or Login</Typography>
      </AnimatedBox>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography
          variant="h1"
          component="h1"
          align="center"
          color="#fff"
          sx={{
            textShadow: '8px 8px 16px rgba(0, 0, 0, 0.7)',
          }}
        >
          Welcome to your Phone Book
        </Typography>
      </Box>
    </>
  );
};

export default Home;
