var ipDesc=document.querySelector("#text");
var expense=document.querySelector("#exp");
var btn=document.getElementById("btn");
var tot=document.getElementById("total");
var tab=document.getElementById("list");

let total=0;
let allExp=[];

btn.addEventListener("click",addTotal);

function getdate(mom)
{
    return (mom.toLocaleDateString('en-US',{ year: 'numeric', month: 'long', day: 'numeric'}));
}

function createlist(desc,amt,mom){
    {
        return `<li class="list-group-item d-flex justify-content-between my-1">
        <div class="d-flex flex-column">
        ${desc}
        <small class="text-muted">${getdate(mom)}</small>
        </div>
        <div>
        <spam class="px-5">
        ${amt}
        </spam>
        
        <button type="button" class="btn btn-outline-danger" onclick="dele(${mom.valueOf()})">
        <i class="fas fa-trash-alt"></i>
        </button>
        </div>
        </li>`

    }


}



function addTotal(){

    const expObj={};
    const ipText=ipDesc.value;
    const exp=expense.value;
    const ipNum=parseInt(exp,10);

    expObj.desc=ipText;
    expObj.amt=ipNum;
    expObj.mom=new Date();
    
    allExp.push(expObj);

    total=total+ipNum;
    tot.textContent=`Total Spent:${total}`;

    let alle= allExp.map(exp=>createlist(exp.desc,exp.amt,exp.mom));

    let all=alle.join("");

    tab.innerHTML=all;


}


function dele(mom)
{
    let narr=[];

    for(let i=0;i<allExp.length;i++)
    {
        if(mom!==allExp[i].mom.valueOf())
        {
            narr.push(allExp[i]);
        }
        //console.log(mom.valueof);
    }
    console.log(narr);
    
    allExp=narr;
    
    let alle2= narr.map(exp=>createlist(exp.desc,exp.amt,exp.mom));

    let all2=alle2.join("");

    tab.innerHTML=all2;

};

