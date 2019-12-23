const crypto = require('crypto');
const fs=require("fs");
module.exports=(ch,out)=>{
	out(false, ch.blue("Start Verify files\n"));
	        datas=JSON.parse(fs.readFileSync(__dirname+"/hash.json","utf8"));
        if(datas.activ){
        datas.hash.forEach((item,index)=>{
      const hash = crypto.createHmac('sha256', fs.readFileSync(__dirname+"/"+item.filename/*,'utf8'*/)).digest('hex');
      if(hash==item.sha){
      	out(false, ch.bold.green("File Verified: "+"module/"+item.filename+"\n"));   
      }else{
         out(true, ch.bold.red("Broken File: "+"module/"+item.filename+"\n"));   
      }
   
});
        out(false, ch.green("Complete Verified\n"));
}       
}