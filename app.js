const express=require('express');

const productRoutes = require('./api/routes/products');
const ordertRoutes = require('./api/routes/orders');
const { status } = require('express/lib/response');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers",)
});

app.use('/products',productRoutes);
app.use('/orders',ordertRoutes);



//error handling 
app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });
    
});

app.listen(9000,()=>{
    console.log('conn');
});