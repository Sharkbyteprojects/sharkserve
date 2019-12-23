const modules={"repsh": require("repshark"),"emo":require("node-emoji"),"chalk":require("chalk"),"nof":require("./module/404.js"),"http":require("http"),"fs":require("fs"),"fund":require("./module/fund.js"),"serve": require("./module/serve.js"), "output": require("./module/input.output/output.js"), "noutput":(ent)=>{require("./module/input.output/output.js")(false, ent)}};
modules.noutput(modules.chalk.red(modules.emo.emojify(":coffee:  SharkServe Starting"))+"\n");
/**
 * Standard Settings:
 *    --port=8080
 *    --dir=.
 */
var datas;
modules.fs.readFile(__dirname+"/settings.json",'utf8',(err,data)=>{
	datas=JSON.parse(data);
	modules.noutput(modules.chalk.yellow("Settings:")+"\n");
const port =modules.fund("port",datas.port)
const portint=parseInt(port);
modules.noutput("\t"+modules.chalk.yellow("port:"+port)+"\n");
const dir=modules.fund("dir",datas.dir)
modules.noutput("\t"+modules.chalk.yellow("dir:"+dir)+"\n");
modules.serve(portint,dir,modules.fs,modules.output, modules.http,modules.nof, modules.chalk,modules.emo,modules.repsh)

});
module.exports=()=>{}
