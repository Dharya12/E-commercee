import Grid from '@mui/material/Unstable_Grid2/Grid2';
import AppBar from '@mui/material/AppBar';
import { CssBaseline} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
// import {Tabs , Tab} from '@mui/material';
import './navbar.css';


const Navbar=()=> {
    return (
      <Grid > 

        <Grid xs={12}>
          <AppBar position="static">
            <CssBaseline />
            <Toolbar  style={{backgroundColor : "black"}}  sx={{display : "flex" , flexWrap : "wrap"}}>
              <Typography variant="h4" component="div"  sx={{mr : 'auto'}}>
                CRICKET DIRECT
              </Typography>
              <Box className='pages' component="div" sx={{display : "flex" , flexWrap : "wrap"}}>
                <Typography sx={{color : 'white'}}>
                  <Link to='/' style={{textDecoration: 'none' , color : 'white'}}>Home</Link>
                </Typography>
                <Typography><Link to='/products' style={{textDecoration: 'none' , color : 'white'}}>Products</Link></Typography>
                <Typography><Link to='/about' style={{textDecoration: 'none' , color : 'white'}}>About</Link></Typography>
                <Typography><Link to='/cart' style={{textDecoration: 'none' , color : 'white'}}> Cart</Link> </Typography>
              </Box>
              {/* <Tabs sx={{ margin: 'auto'  }} >
              <Tab sx={{color : 'white' , marginRight: 5  }}  label='Home'></Tab>
              <Tab sx={{color : 'white' , marginRight: 5  }} label="Products"></Tab>
              <Tab sx={{color : 'white' , marginRight: 5  }} label='About' ></Tab>
              <Tab sx={{color : 'white' }} label='Cart'></Tab>
              </Tabs> */}
              <Typography sx={{ml :'auto'}}><Link to='/' style={{textDecoration: 'none' , color : 'white'}}>Sign Out</Link></Typography>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
      );
  }
export default Navbar;