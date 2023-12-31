import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from 'styled-components';
import { selectIsLogged } from 'redux/selectors';
import { useSelector } from 'react-redux';
const AnimatedBox = styled(Box)`
  position: fixed;
  right: 6%;
  top: ${({ show }) => (show ? '11%' : '-100%')};
  transition: top 2s ease-in-out;
`;
const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const isLogged = useSelector(selectIsLogged);

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
      {!isLogged ?? (
        <AnimatedBox
          show={showMessage ? 'true' : ''}
          color="white"
          sx={{
            textShadow: '8px 8px 16px rgba(0, 0, 0, 1)',
          }}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          zIndex={100}
        >
          <Typography variant="body1">Please Signup or Login</Typography>
        </AnimatedBox>
      )}

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
            textShadow: '8px 8px 16px rgba(0, 0, 0, 1)',
            WebkitTextStroke: '2px black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '80vh',
            '@media (max-width: 480px)': {
              justifyContent: 'start',
            },
          }}
        >
          <span> Welcome</span>
          <span> to your</span>
          <span>Phone Book</span>
        </Typography>
      </Box>
    </>
  );
};

export default Home;
