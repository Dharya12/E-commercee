import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import "./bodyDataContainer.css"

const BodyDataContainer =() =>{
    return(
        <Grid>
            <Grid xs={12}
                sx={{bgcolor : "white"}}
            >
                <Box width="100%">
                    <Typography component="div" style={{display : "flex" , flexDirection : "row" , flexWrap : "wrap"}} sx={{justifyContent : "center"}}>
                        <img src="/kit2.png" className="bodydata"></img>
                        <img src="/batImage1.png" className="bodydata" ></img>
                        <img src="/bowl1.jpg" className="bodydata" ></img>
                        <img src="/bat2.png" className="bodydata" ></img>
                        <img src="/jersyimage.png" className="bodydata" ></img>
                        <img src="/bat3.png" className="bodydata" ></img>
                        <img src="/bat4.png" className="bodydata" ></img>
                        <img src="/bowl2.png" className="bodydata" ></img>
                    </Typography>
                    {/* <ImageList >
                        <ImageListItem>
                            <img
                                src="public/kit2.png"
                                alt="fsgfsdgsd"
                                loading="lazy"
                            />
    </ImageListItem>

                    </ImageList> */}
                </Box>
                

            </Grid>
        </Grid>
    )
}
export default BodyDataContainer ;