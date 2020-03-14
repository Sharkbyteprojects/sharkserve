const modules={"verify": require("./module/verify.js"),"repsh": require("repshark"),"emo":require("node-emoji"),"chalk":require("chalk"),"http":require("http"),"fs":require("fs"),"fund":require("./module/fund.js"),"serve": require("./module/serve.js"), "output": require("./module/input.output/output.js"), "noutput":(ent)=>{require("./module/input.output/output.js")(false, ent)}};
/**
 * Standard Settings:
 *    --port=8080
 *    --dir=.
 *    --lhost=0
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
	 modules.noutput(modules.chalk.underline.bold.red(modules.emo.emojify(":coffee:  SharkServe Prepare"))+"\n");
modules.verify(modules.chalk, modules.output);

	modules.noutput(modules.chalk.underline.bold.red(modules.emo.emojify(":coffee:  SharkServe Starting"))+"\n");
	modules.noutput(modules.chalk.underline.yellow("Settings:")+"\n");
const port =modules.fund("port",datas.port)
const portint=parseInt(port);
modules.noutput("\t"+modules.chalk.yellow("port:"+port)+"\n");
const dir=modules.fund("dir",datas.dir)
modules.noutput("\t"+modules.chalk.yellow("dir:"+dir)+"\n");
var onlymode=parseInt(modules.fund("lhost",datas.iplocker.act));
if(onlymode==1){
modules.noutput("\t"+modules.chalk.yellow("lhost only:"+"true")+"\n");
onlymode=true;
}else{
modules.noutput("\t"+modules.chalk.yellow("lhost only:"+"false")+"\n");
onlymode=false;
}
var ar=parseInt(modules.fund("autoreload",datas.reload));
if(ar==1){
modules.noutput("\t"+modules.chalk.yellow("autoreload:"+"true")+"\n");
ar=true;
}else{
modules.noutput("\t"+modules.chalk.yellow("autoreload:"+"false")+"\n");
ar=false;
}
modules.serve(portint,dir,modules.fs,modules.output, modules.http,datas.nof, modules.chalk,modules.emo,modules.repsh,onlymode,datas.iplocker.localhost,datas.iplocker.html,ar);

});
module.exports=()=>{}
