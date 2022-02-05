import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import transliterator from '../helpers/transliterator';

const pages = ['люди', 'сообщества', 'игры', 'музыка', 'помощь', 'выйти'];

function AppBarNav() {
  return (
    <AppBar position="static" sx={{ mb: '25px' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/">ВСети</NavLink>
        </Typography>
        <Box component='nav' sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><NavLink to={`/${transliterator(page)}`}>{page}</NavLink>
              </Button>
            ))}
          </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarNav;