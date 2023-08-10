
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";



const app = express();

//Configure the view engine
app.set("view engine", "ejs"); //Use EJS as the view engine
// app.set("views" , __dirname + "/views");//Set the path to your views directory

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


//Define your content variable

const homeStartingContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id commodo dolor. Sed vel nisi imperdiet, blandit risus at, ullamcorper nulla. Sed sit amet enim in ligula cursus";

const aboutContent =
  "tempus in ut turpis. Vivamus urna libero, gravida sed nisl ac, dapibus cursus tellus. Proin vitae urna dignissim, hendrerit leo quis, semper odio. Integer nec nulla sed orci commodo ullamcorper non quis libero. In a rutrum elit.";
const contactContent =
  "Quisque porta porttitor risus id pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus hendrerit auctor.";


app.get("/", (req,res)=>{ 

    
 res.render("home.ejs", {ejsHomeStartingContent: homeStartingContent});
});



app.listen(3000, ()=>{
    console.log("server is listening on port 3000")
} );