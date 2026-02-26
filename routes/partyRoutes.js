import express from "express"
const router = express.Router()


// Add New Party
router.post("/",)

// get list of all parties
router.get("/",)

// get party by id
router.get("/{party_id}",)

// search party by name , contact number , party type
router.get("/search",)

//update party details
router.put("/{party_id}",)

//Delete the party
router.delete("/{party_id}",)

//Change party status
router.patch("/{party_id}/status",)

export default router;
