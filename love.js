function input(){
    let name1=document.getElementById("a").value.trim();
    let name2=document.getElementById("b").value.trim();

    let n1=name1.toLowerCase();
    let n2=name2.toLowerCase();
    let n=n1+n2;
    
    let t=n.split("t").length-1;
    let r=n.split("r").length-1;
    let u=n.split("u").length-1;
    let e=n.split("e").length-1;


    if (name1 === "" || name2 === "") {
        document.getElementById("error").innerHTML= "🚨 Please enter both names!";
        document.getElementById("percent").innerHTML="";
        document.getElementById("quote").innerHTML="";
        return; // Stop further execution
    }
    var t1=t+r+u+e;
    if(t1>9){
        t1=9;
    }

    let l=n.split("t").length-1;
    let o=n.split("r").length-1;
    let v=n.split("u").length-1;
    let e1=n.split("e").length-1;

    var t2=l+o+v+e1;

    var str1=t1.toString();
    var str2=t2.toString();
    var total=Number(str1+str2);

    if(total<=30){
        document.getElementById("percent").innerHTML="🚀 Your Love percentage is "+total;
        document.getElementById("quote").innerHTML="😎 Both are Best Friends 😎";
    }
    else if(total>30 && total<=60){
        document.getElementById("percent").innerHTML="🚀 Your Love percentage is "+total;
        document.getElementById("quote").innerHTML="😎 Both are Just Lovers 🤩❤️";
    }
    else if(total>60 && total<=90){
        document.getElementById("percent").innerHTML="🚀 Your Love percentage is "+total;
        document.getElementById("quote").innerHTML="😎 Both are True Lovers 💕🥰😍";
    }
    else{
        document.getElementById("percent").innerHTML="🚀 Your Love percentage is "+total;
        document.getElementById("quote").innerHTML="😎 Both are Perfect Couples🥰😘";
    }

    console.log(str);
}

