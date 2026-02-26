import express from "express"
const router = express.Router()


router.post("/")
router.get("/")
router.put("/{categoryId}")
router.delete("/{categoryId}")

export default router;
