let express= require('express');
let app= express();
let mainRoute= require('./routes/index');

app.use('/',mainRoute);

app.listen('3000',(error)=>{
    if(error) console.log(error);
    else  console.log('server running on the port 3000');
});

module.exports=app;