const express = require("express");
const app = express();
const PORT = 3000;

function generateContacts(count=50) {
  return Array.from({length:count}, (_,i)=>({
    name:`Contact ${i+1}`,
    phone:`23480${Math.floor(10000000+Math.random()*89999999)}`
  }));
}

app.get("/contacts", (req,res)=>{
  const contacts = generateContacts();
  res.json(contacts);
});

app.listen(PORT, ()=>console.log(`Service running on http://localhost:${PORT}`));
