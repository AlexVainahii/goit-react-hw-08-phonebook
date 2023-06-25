import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  ResponsiveLayout,
  Navigation,
  NavigationLink,
} from './Layout.styled';

import { useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';
import AuthImage from '../../images/Auth.jpeg';

const defaultTheme = createTheme();
const Layout = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{ height: '100vh', overflow: 'hidden' }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={15}
          md={15}
          sx={{
            backgroundImage: `url(${AuthImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: t =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Container>
            <Navigation>
              <NavigationLink to="/">Головна</NavigationLink>
              <div style={{ display: 'flex' }}>
                <NavigationLink to="/register">Sign Up</NavigationLink>
                <NavigationLink to="/login"> Sign In</NavigationLink>
              </div>
            </Navigation>
          </Container>

          <Outlet />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default Layout;
