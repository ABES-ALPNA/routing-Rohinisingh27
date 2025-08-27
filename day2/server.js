const server=require("http")
server.createServer((req,res)=>{
    // res.write("My first server")
    // res.end()
    if(req.url==='/'){
        res.write("This is my first page")
        res.end()
    }
    else if(req.url==='/about'){
            res.write("This is my about page")
            res.end()
        }
    else if(req.url==='/contact'){
            res.write("This is my contact page")
            res.end()
        }
    else {
        res.write("404 error page not found")
        res.end()
    }    
}).listen(5000,()=>{
    console.log("server is running at port 5000")// cd server.js then chrome --> localhost.5000 and run it.
                                                // localhost:5000/about or contact etc. on browser.
})
