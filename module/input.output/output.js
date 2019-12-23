module.exports=(fail, entry)=>{
    if(fail){
        process.stderr.write(entry);
    }else{
        process.stdout.write(entry);
    }
}