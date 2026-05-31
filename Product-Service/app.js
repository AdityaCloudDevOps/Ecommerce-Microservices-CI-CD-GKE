const express = require('express');
const app = express();

app.get('/products',(req,res)=>{

res.json([
{
id:1,
name:"MacBook Pro",
price:"2499"
},
{
id:2,
name:"iPhone 17",
price:"999"
},
{
id:3,
name:"AirPods Pro",
price:"199"
}
]);

});

app.listen(3000);