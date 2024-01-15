const datas=[
   {name:"abhinav",profession:"Software Developer"},
    {name:"Kumar",profession:"Software Engineer"}
];

function get(){
    setTimeout(()=>{
        let output=""
        datas.forEach((data,index)=>{
        output=output+`<li>${data.profession},${data.name}</li>`
        })
        document.body.innerHTML=output
    },1000)
}
get();