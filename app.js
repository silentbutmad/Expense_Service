import dotenv from "dotenv"
import express from "express"
import cors from "cors"
//import expenseRoutes from './routes/expenseRoutes'


dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use("/",(req,res)=>{
    res.send("HI");
})

app.use("/api/expense/parties",)
app.use("/api/expense/items",)
app.use("/api/expense/transactions",)
//app.use("/api/expense/transactions/{transactionId}/items",)
app.use("/api/expense/dashboard",)
app.use("/api/expense/categories",)

//app.use('/api/expenses', expenseRoutes)

app.listen(5000, () => {
  console.log("Expense Service running on port 5000")
})