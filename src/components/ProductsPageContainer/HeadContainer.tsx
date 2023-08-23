import { Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const HeadContainer = () =>{
    return(
        <>
        
        <Grid>
            <Grid xs={12} sx={{bgcolor : "#dde6ee" , mt :"3px"}}>
                <Typography variant="h4" sx={{fontFamily : "monospace" , display : "flex" , alignItems : "center" , justifyContent : "center"}}>
                    Special Cricket Products With Offers
                </Typography>
                
            </Grid>
        </Grid>
        <Grid>
            <Grid xs={12}>
                
            </Grid>
        </Grid>
        </>
    )
}

export default HeadContainer ;