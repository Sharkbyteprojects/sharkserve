module.exports=(port,dir,fs,output,http,nof,chalk,emo,repsh,lhos,datalis,htmllocker,ar)=>{
    const fjs=fs.readFileSync(__dirname+"/reloader.browser.js");
const srt=http.createServer((req,res)=>{
        const isok=isallowed(req,lhos,datalis);
        const parts=req.url.split("?")[0];
        if(isok){
        output(false,chalk.bold.yellow("User called "+req.url)+"\n");
        if(ar&&parts==="/reloader.js/reloader.js"){
            res.writeHead(200, {'Content-Type': "application/javascript"});
            output(true, chalk.bold.green("200 Reloader.JS Respond")+"\n");
            res.end(fjs);
        }else{
            fs.readFile(dir+parts+"index.html"/*,'utf8'*/, {encoding: 'utf-8'},(err,data)=>{
                if(err){
                    filer(res,dir,fs,output,nof,chalk,parts,repsh);
                }else{
                	res.writeHead(200, {'Content-Type': 'text/html'});
                    output(true, chalk.bold.green("200 File "+dir+parts+"index.html respond!")+"\n");
                    let dats=data;
                    if(ar){
                        dats=dats.replace("</body>","<script src=\"/reloader.js/reloader.js\"></script></body>");
                    }
                    res.end(dats);
                }
            });
        }}else{
        	output(true,chalk.bold.red("403 Forbidden User called "+req.url+"\n\tIP: "+req.connection.remoteAddress)+"\n");
        	res.statusCode=403;
        	res.end(htmllocker);
        }
    });
    if(ar){
        const io = require('socket.io')(srt);
        io.on('connection', function(socket){
            socket.emit("welcome","true");
        });
        fs.watch(dir,event=>{
            io.emit("reload", 1);
        });
    }
    srt.listen(port,()=>{
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
function isallowed(req,manag,dsli){
	var returns=true;
	if(manag){
	const allowed=req.connection.remoteAddress;
    if(dsli.includes(allowed)){
    	returns=true;
    }else{
    	returns=false;
    }
    }
    return returns;
}