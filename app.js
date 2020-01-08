const express  =  require ("express");
const app = express()


const PORT = 3000;
// how to create base URL
//app.get('/', function (req, res){
//create the response object and send it    
    //res.send("Hello world");
//})
app.get("/api/heroes", (req, res)=>{
    // var heroes = ['heeeeeeeeee', 'ssssss', 'kkkkk', 'nnnnnnn'];
    // res.send(heroes);
});
app.get("/api/heroes/1", (req, res) =>{
   // var name = 'maya';
    //var age = 23;
    let her= {
        name: 'maya',
        age:23,
        superp:['hhh', 'fff']
    }
    res.send(her)
});

//define the wich port url will be appier
app.listen(PORT, ()=>{

   // console.log("port" +PORT);
   //using $ markes can be define many concatenate
   //console.log(`kkkkkkkkkk ${PORT}`);
});