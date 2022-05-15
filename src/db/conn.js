const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/TimePassAPI",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("Mongoose Connected")
})
.catch((e)=>{
    console.log("Mongoose Not Connected")
});