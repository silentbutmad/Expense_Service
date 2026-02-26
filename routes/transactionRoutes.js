import express from "express"
const router = express.Router()

// Add New Transaction
router.post("/",)

// get list of all Transactions
router.get("/",)

// get Transaction by id
router.get("/{transaction_id}",)

// search Transaction 
router.get("/search",)

//update Transaction details
router.put("/{transaction_id}",)

//Delete the Transaction
router.delete("/{transaction_id}",)

//Change Transaction status
router.patch("/{transaction_id}/status",)


export default router;