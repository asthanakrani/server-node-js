const http =  require ('http');
const PORT = 3000;
const fs = require('fs');
const server = http.createServer((req,res)=>{
    console.log(req.url);

    let random = `${Math.floor(Math.random * 100)} ${req.url} : New Request `;

    fs.appendFile("text.txt", random ,() => {
         
        
        console.log(random);
        if(req.url== "/"){
            fs.readFile('index.html' , 'utf-8' , (err,data) => {
                res.statusCode=200;
                res.setHeader=("content-type", "text/html");
                res.end(data);
            
            })
        }else if(req.url == "/about"){
            fs.readFile('about.html' , 'utf-8' , (err,data) => {
                res.statusCode=200;
                res.setHeader=("content-type", "text/html");
                res.end(data);
            
            })
        }else{
            fs.readFile('error.html' , 'utf-8' , (err,data) => {
                res.statusCode=200;
                res.setHeader=("content-type", "text/html");
                res.end(data);
            
            })
        }
    })
    
})
server.listen(PORT,()=>{

    console.log(`server running at http://localhost:${PORT}`);

})