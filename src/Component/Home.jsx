// import React, { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { useEffect } from 'react';
// import axios from 'axios';
// import './Home.css'

// const Home = () => {

//     const [products,setProduct]=useState([]);

//     useEffect(()=>{// useState is used to manage state within a component, allowing you to store and update data. useEffect is used to perform side effects in a component, such as updating the document title, fetching data, or subscribing to events.
//         axios.get('https://fakestoreapi.com/products').then((res)=>{
//             setProduct(res.data);
//         })
//     },[])

//   //Axios is a popular JavaScript library used for making HTTP requests from a web browser or Node. js. It simplifies the process of 
//   //sending asynchronous HTTP requests to a server, and also handles the response.

   
//   return (
//    <>
//    <div class="container-fluid">
//     <div class="row mb-5">
      
//     {products.map((product) =>(

      
//      <Card sx={{ maxWidth: 405 }}>

//     <CardMedia
//         sx={{ height: 400 }}
//         image={product.image}
//         title={product.title}
//       />
//       <CardContent class="details">
//         <Typography gutterBottom variant="h5" component="div">{product.title}</Typography><br />
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>{product.rating.rate}</Typography><br />
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>{product.rating.Price}</Typography><br />
//        </CardContent>
    
//       </Card> 
//     ))};
//       </div>
//     </div>
  
//    </> 
//   )
// }

// export default Home

// {/* //<image scr={}/> */}


import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Container from '@mui/material/Container';

export const Home = () => {
    const [products, setProducts] = useState([]);

    // Fetch data from the external API
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProducts(res.data); // Set fetched product data
            })
            .catch((error) => {
                console.error("Error fetching data: ", error); // Handle error
            });
    }, []);

    return (
        <Container>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                image={product.image}
                                alt={product.title}
                                style={{ objectFit: 'contain' }} // Ensures the image fits nicely within the card
                            />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Rate: {product.rating.rate} | Count: {product.rating.count}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Home;
