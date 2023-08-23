import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import "./bodyContainer2.css"

const BodyDataContainer2 =() =>{
    return(
        <Grid>
            <Grid xs={12}
                sx={{bgcolor : "#343c39" , color:"white" , mt :"1px"}}
            >
                <Box width="100%" sx={{pt : 5 , pb : 5}}>
                    <Typography component="div" style={{display : "flex" , flexDirection : "column" , flexWrap : "wrap" , justifyContent :"center"}} sx={{alignItems : "center"}}>
                        <Typography variant="h5">READY TO BUY SOME CRICKET EQUIPMENT?</Typography>
                        <Typography variant="h6" sx={{pt : 3 , pl : 5}}> Training is all well and good but a cricket club must be fully prepared and well-stocked for match action. Therefore, as a cricket club you should consider the below cricket items essential:</Typography>
                        <Typography component="div" style={{display : "flex" , flexDirection : "row" , flexWrap : "wrap" , justifyContent :"center"}} sx={{alignItems : "center"}}>
                            <ul className="productsList">
                                <li>Bats</li>
                                <li>Kit Bags</li>
                                <li>Helmets</li>
                            </ul> 
                            <ul>
                                <li>Sports Wear</li>
                                <li>Balls</li>
                                <li>Tennis Balls Bats</li>
                            </ul>   
                        </Typography>
                    </Typography>
                </Box>
                

            </Grid>
        </Grid>
    )
}
export default BodyDataContainer2 ;