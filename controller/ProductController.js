const ProductSchema = require('../model/Product');

const saveProduct=(req,resp)=>{
    const Product= new ProductSchema({
        description: req.body.description,
        qty: req.body.qty,
        unitPrice: req.body.unitPrice
    });
    Product.save().then(result=>{
        resp.json({data:{status:201,message:'Product Saved'}});
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
}

const getAllProducts=(req,resp)=>{
    ProductSchema.find().then(result=>{
        resp.json({data:{status:201,value:result}});
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
}

module.exports={
    saveProduct,getAllProducts
}