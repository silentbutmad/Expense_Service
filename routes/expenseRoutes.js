import express from "express"
const router = express.Router()
import expenseController from '../controllers/expenseController'

router.post('/', expenseController.createExpense)
router.get('/', expenseController.getExpenses)
router.delete('/:id', expenseController.deleteExpense)

 export default router