import express from "express"; 
import sum from "./sum.js";
 
const app = express(); 
const PORT = 8000; 
 
app.listen(PORT, () => { 
    console.log(`server is listening to port ${PORT}`); 
}); 
 
app.get("/", async (req, res) => {
    res.json({
        msg: "I love Anshika"
    });
});

app.get("/getSum/:a/:b", async(req,res)=>{
    const {a,b} = req.params;

    res.json({
        ans : sum(parseInt(a) , parseInt(b))
    });
})