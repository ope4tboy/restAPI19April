exports.getAllProducts = (req, res) =>{
res.status(200)
res.json([
    {
        productName : "iphone15",
        productPrice : "$1500",
    },

    {
        productName : "iphone14",
        productPrice : "$1300",
    },

    {
        productName : "iphone13",
        productPrice : "$1000",
    }
])

}

exports.getSingleProduct = (req, res) =>{
    res.status(200)
    res.json({
        message: "a single product"
    })}



        exports.getCreatePost = (req, res) =>{
            res.status(200)
            res.json({
        
            })
}

exports.deletePage = (req, res) =>{
    res.status(200)
    res.json({

    })
}

exports.update = (req, res) =>{
    res.status(200)
    res.json({

    })
}


