module.exports=(port,dir,fs,output,http,nof,chalk,emo)=>{
    http.createServer((req,res)=>{
        const parts=req.url;
        output(false,chalk.bold.yellow("User called "+parts)+"\n");
            fs.readFile(dir+parts+"index.html",'utf8',(err,data)=>{
                if(err){
                    filer(res,dir,fs,output,nof,chalk,parts);
                }else{
                    output(true, chalk.bold.green("200 File "+dir+parts.split("/").push("index.html").join("/")+" respond!")+"\n");
                    res.end(repsh(data, "${server}", "SharkServe v1.0.1"));
                }
            });
    }).listen(port,()=>{
        output(false,chalk.bold.blue("Server listen on http://localhost:"+port)+"\n");
    });
}
function filer(res,dir,fs,output,nof,chalk,parts){
    fs.readFile(dir+parts,'utf8',(err,data)=>{
        if(err){
            output(true, chalk.bold.red("404 File "+dir+parts+" doesn't exist!")+"\n");
            res.statusCode=404;
            res.end(nof(parts));
        }else{
            output(true, chalk.bold.green("200 File "+dir+parts+" respond!")+"\n");
            res.end(data);
        }
    });
}