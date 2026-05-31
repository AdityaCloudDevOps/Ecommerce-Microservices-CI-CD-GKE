const express = require('express');
const app = express();

app.get('/orders',(req,res)=>{

res.json([
{
orderId:1001,
status:"Delivered"
},
{
orderId:1002,
status:"Shipped"
}
]);

});

app.listen(3000);