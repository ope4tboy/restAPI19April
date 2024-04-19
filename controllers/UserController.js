exports.getAllUser = (req, res) =>{
    res.status(200)
    res.json([
        {
            productName : "Apple Laptop",
            productPrice : "$1500",
        },
    
        {
            productName : "Hp Laptop",
            productPrice : "$1300",
        },
    
        {
            productName : "Dell Laptop",
            productPrice : "$1000",
        }
    ])
    
    }
    
    exports.getSingleUser = (req, res) =>{
        res.status(200)
        res.json({
            message: "a single product"
        })}
    
    
    
            exports.getCreateUser = (req, res) =>{
                res.status(200)
                res.json({
            
                })
    }
    
    exports.deleteUser = (req, res) =>{
        res.status(200)
        res.json({
    
        })
    }
    
    exports.update = (req, res) =>{
        res.status(200)
        res.json({
    
        })
    }
    
    
    