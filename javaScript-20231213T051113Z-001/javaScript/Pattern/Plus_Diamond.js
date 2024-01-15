n=4;
for(let i=0;i<=n;i++){
    for(let j=0;j<=n;j++){
        if(i==2 || j==2){
            document.write("    *  ")
        }
        else{
            document.write("  &nbsp  ")
        }
    }
    document.write("<br>")
}