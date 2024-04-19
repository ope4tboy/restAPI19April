const express = require ("express")
const router = express.Router()
const { getAllProducts, getSingleProduct, getCreatePost, update, deletePage} = require("../controllers/ProductController")

// router.get("/products").get(getAllProducts)

// router.get("/products/:id", getSingleProduct)

// router.post("/products/:id",getCreatePost)

// router.put("products/:id", update)

// router.delete("products/:id", deletePage)


router.route("/products").get(getAllProducts).post(getCreatePost)
router.route("/products/:id").get(getSingleProduct).put(update).delete(deletePage)

module.exports = router
