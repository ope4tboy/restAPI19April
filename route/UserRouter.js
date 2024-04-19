const express = require ("express")
const router = express.Router()
const {getAllUser, getSingleUser, getCreateUser, update, deleteUser} = require ('../controllers/UserController')



router.get("/user", getAllUser)

router.get("/user/:id", getSingleUser)

router.post("/user/", getCreateUser)

router.put("user/:id", update)

router.delete("user/:id", deleteUser)

module.exports = router