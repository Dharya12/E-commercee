import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Button, Typography } from "@mui/material";

const HeadContainer =()=>{

    
    return(
        <Grid container >
            <Grid xs={5} height="auto"  sx={{mt : "2px"}}>
                    <Typography
                        sx={{display :"flex"  , alignItems : "center"}}
                        width ='100%'
                        height="100%"
                        bgcolor=" #a9b2bd"
                        justifyContent="center"
                    >
                        <img src="/bat3.png" style={{  width : "100%"  , height : "100%"}}></img>
                    </Typography>
            </Grid>
            <Grid xs={7}>
                    <Box width ='100%'
                        height='100%'
                       
                       
                       fontFamily = ' serif'
                       paddingLeft="40px"
                    >
                        <Typography component="div" style={{width :"100%" , height : '100%' , display : "flex" , flexDirection : "column" , }} sx={{ justifyContent : 'center',alignItems : "center" ,}}>
                            <Typography variant="h4"  color='#a544b8' sx={{mt : 3}}>READY TO BUY SOME CRICKET EQUIPMENT?</Typography>
                            <Typography variant="h1" >50% OFF</Typography>
                            <Typography variant="h4" color='#a544b8'>Full Priced Styles</Typography>
                            <Button  variant="contained"  color="secondary" sx={{mt : 3 , mb:3}}>Shop Now</Button>
                        </Typography>
                        
                    </Box>
            </Grid>
            
        </Grid>
    )
}
export default HeadContainer ;