function fund(dname,st){
    const val=process.argv.find(element=>element.includes(dname));
    if(val){
        const sec=val.split("=")[1];
        if(sec){
         return sec;
        }else{
            return st;
        }
    }else{
      return st;
    }
}
module.exports=fund;