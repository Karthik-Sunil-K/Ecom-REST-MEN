const express=require('express');

const router = express.Router();


router.get('/' ,(req,res,next)=>{
    res.status(200).json({
        message:"this is just get"
    });
});
router.post('/' ,(req,res,next)=>{
    res.status(200).json({
        message:"this is just post"
    });
});
router.get('/:productID' ,(req,res,next)=>{
  const productID = req.params.productID;
  if(productID==='hai'){
    res.status(200).json({
        message:"correct id",
        id:productID
    });
  }else{
    res.status(200).json({
        message:"wrong id",
    });
  }
});

module.exports = router;