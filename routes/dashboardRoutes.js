import express from "express"
const router = express.Router()


router.get("/summary")
router.get("/cashflow")
router.get("/top-parties")
router.get("/top-items")

export default router;
