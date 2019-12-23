const modules={"repsh": require("repshark"),"emo":require("node-emoji"),"chalk":require("chalk"),"http":require("http"),"fs":require("fs"),"fund":require("./module/fund.js"),"serve": require("./module/serve.js"), "output": require("./module/input.output/output.js"), "noutput":(ent)=>{require("./module/input.output/output.js")(false, ent)}};
/**
 * Standard Settings:
 *    --port=8080
 *    --dir=.
 */
var datas;
modules.fs.readFile(__dirname+"/settings.json",'utf8',(err,data)=>{
	if(err){
		modules.chalk.bgRed.yellow("error while reading settings.json")
	}
	datas=JSON.parse(data);
	if(datas.clear){
		console.clear();
	}
	modules.noutput(modules.chalk.underline.bold.red(modules.emo.emojify(":coffee:  SharkServe Starting"))+"\n");
	modules.noutput(modules.chalk.underline.yellow("Settings:")+"\n");
const port =modules.fund("port",datas.port)
const portint=parseInt(port);
modules.noutput("\t"+modules.chalk.yellow("port:"+port)+"\n");
const dir=modules.fund("dir",datas.dir)
modules.noutput("\t"+modules.chalk.yellow("dir:"+dir)+"\n");
modules.serve(portint,dir,modules.fs,modules.output, modules.http,datas.nof, modules.chalk,modules.emo,modules.repsh);

});
module.exports=()=>{}
