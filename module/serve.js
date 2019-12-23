module.exports=(port,dir,fs,output,http,nof,chalk,emo,repsh)=>{
    http.createServer((req,res)=>{
        const parts=req.url.split("?")[0];
        output(false,chalk.bold.yellow("User called "+req.url)+"\n");
            fs.readFile(dir+parts+"index.html"/*,'utf8'*/,(err,data)=>{
                if(err){
                    filer(res,dir,fs,output,nof,chalk,parts,repsh);
                }else{
                    output(true, chalk.bold.green("200 File "+dir+parts+"index.html respond!")+"\n");
                    res.end(data);
                }
            });
    }).listen(port,()=>{
        output(false,chalk.bold.blue("Server listen on http://localhost:"+port)+"\n");
    });
}
function filer(res,dir,fs,output,nof,chalk,parts,repsh){
    fs.readFile(dir+parts/*,'utf8'*/,(err,data)=>{
        if(err){
            output(true, chalk.bold.red("404 File "+dir+parts+" doesn't exist!")+"\n");
            res.statusCode=404;
            res.end(repsh(nof.html,nof.sea, parts));
        }else{
            output(true, chalk.bold.green("200 File "+dir+parts+" respond!")+"\n");
            res.end(data);
        }
    });
}