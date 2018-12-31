let express= require('express');
let router =express.Router();

router.get('/',(req,res)=>{
    res.send('main roout');
});
router.get('/test',(req,res)=>{
    res.send('test route')
});

router.get('/bad',(req,res)=>{
    res.send1('bad')
});

module.exports=router;