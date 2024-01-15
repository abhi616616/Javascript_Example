function fun(){
    let n=11;
    for(let i=1;i<=n;i++)
    {
        for(let j=1;j<i;j++)
        {
            document.write(" &nbsp ")
        }
        for(let k=i;k<=n;k++)
        {
            document.write("*");
        }
        document.write("<br>");
    }
}
fun();