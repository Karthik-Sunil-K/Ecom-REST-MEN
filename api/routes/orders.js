const express=require('express');

const router = express.Router();


router.get('/' ,(req,res,next)=>{
    res.status(200).json({
        message:"this is just get"
    });
});
router.post('/' ,(req,res,next)=>{
    const orders={
        name:req.body.name,
        price:req.body.price
    }
    res.status(201).json({
        message:"this is just post",
        orders:orders
    });
});
router.get('/:orderId' ,(req,res,next)=>{
    res.status(200).json({
        message:"this is just get",
        id:req.params.orderId
    });
});
router.delete('/:orderId' ,(req,res,next)=>{
    res.status(200).json({
        message:"this is just dlt",
        id:req.params.orderId
    });
});

module.exports = router;