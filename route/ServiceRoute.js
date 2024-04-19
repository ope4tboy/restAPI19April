const express = require ("express")
const router = express.Router()
const {getAllService, getSingleService, getCreateService, update, deleteService} = require ('../controllers/ServiceController')



router.get("/service", getAllService)

router.get("/service/:id", getSingleService)

router.post("/service/", getCreateService)

router.put("/service/:id", update)

router.delete("/service/:id", deleteService)

module.exports = router