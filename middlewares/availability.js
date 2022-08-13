let today = new Date();
let day=today.getDay();
let hour=today.getHours();
function availability(req,res,next) {
    if( hour<=9|hour>=17|day>=5){
        res.send("<h1>website is closed at the moment!<h1/>")
    }  
    else
    next()
}
module.exports=availability