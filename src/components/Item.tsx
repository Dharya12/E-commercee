import { useState , useEffect} from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import  data1 from '../products.json';
import './item.css'
import Data from '../Interfaces/cardItemInterface';
const Item =()=>{
    const [itemData , setItemData] = useState <Data[]> ();
    console.log("data is : " ,  data1);
    console.log(itemData);
    useEffect(()=>{
        setItemData(data1);
    },[itemData]);

    
       return( 
        <div style={{display : "flex" , flexWrap : "wrap" , justifyContent : "center" , alignItems :"center"}}>
            
            {
                data1.map((element , index :number)=>{return(
                    <Card className='itemCards' sx={{width : "300px" , m : 6}} key={index}>
                        <CardMedia
                            sx={{ width : "300px",height: 300 }}
                            image={element.image}
                            title={element.title}
                        />
                        <CardContent>
                            <Typography variant='h5'>{element.title}</Typography>
                            <Typography>  After Discount = {element.originalprice - ((element.originalprice)*(element.discount))/100}Rs</Typography>
                            <Typography style={{textDecoration: 'line-through' , color : "grey"}}> Original  Price = {element.originalprice}Rs</Typography>
                            <Typography>DISCOUNT = {element.discount}%</Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: "center"  , m : 0}}>
                            <Button size="small" variant='outlined' color="secondary" > Add to Cart</Button>
                        </CardActions>
                    </Card>
                )})
            }
        </div>
       )
}

export default Item;