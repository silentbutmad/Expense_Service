import express from "express"
const router = express.Router()

// Add New Item
router.post("/",)

// get list of all Items
router.get("/",)

// get Item by id
router.get("/{item_id}",)

// search Item by name 
router.get("/search",)

//update Item details
router.put("/{item_id}",)

//Delete the Item
router.delete("/{item_id}",)

//Change Item status
router.patch("/{item_id}/status",)


export default router;