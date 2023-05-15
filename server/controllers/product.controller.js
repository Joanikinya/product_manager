const ProductManager = require("../models/product.model")

// test api
module.exports.apiTest = (req, res)=>{
    res.json({message: "ok"})
}

// all products
module.exports.allProducts = (req, res)=>{
    ProductManager.find() // array of objects
        .then(productList => res.json(productList))
        .catch(err=>res.json(err))
}

// one product
module.exports.oneProduct = (req, res)=>{
    ProductManager.findOne({_id: req.params.id}) // return the found object
        .then(foundDest => res.json(foundDest))
        .catch(err=>res.json(err))
}

// create product
module.exports.addProduct = (req, res)=>{
    ProductManager.create(req.body) // will return the created object
        .then(newProduct => res.json(newProduct))
        .catch(err=>res.json(err))
}

// update product -- create & getOne
module.exports.updateProduct = (req, res)=>{
    ProductManager.findOneAndUpdate(
        {_id: req.params.id},       // criteria
        req.body, // partial formData 
        {new: true, runValidators:true}
        // new: true -- return the updated object
        // runValidator -- to perform validation specified in model
    )
        .then(updatedProduct =>res.json(updatedProduct))
        .catch(err=>res.json(err))
}

// delete product
module.exports.deleteProduct = (req, res)=>{
    ProductManager.deleteOne({_id: req.params.id})
        .then(status=> res.json(status))
        .catch(err=>res.json(err))
}
