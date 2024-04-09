fs = require('fs');
var arglist = [];
var encText ="";
var text="";
var er = false;
function output(){
    if(arglist.indexOf("C")==-1 && arglist.indexOf("O")==-1){
        console.error("You have to specify an output method, idiot")
    }
    if(arglist.indexOf("C")!==-1){
        console.log(encText);
    }
    if(arglist.indexOf("O"!==-1)){
        fs.writeFile(arglist[arglist.indexOf("O")+1],encText,function(err){
            // if(err){
            //     throw(err)
            // }
        })
    }
}
function encrypt(t){
    var temp = ""
    if(arglist.indexOf("E")!==-1){
    for(i in t){
        temp=temp+t[i].charCodeAt()+"|";
    }
    temp=temp.slice(0,temp.length-1);
    return(temp);
    }else if(arglist.indexOf("U")!==-1){
        var temparr = t.split("|");
        for(i in temparr){
            temp = temp+String.fromCharCode(Number(temparr[i]));
        }
    console.log(temp);
    return(temp);
    }
}
function decrypt(t){



}
function split(arr,size){
    chunkSize = size;
    chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        chunks.push(chunk);
    }
    return(chunks);
}
process.argv.forEach((val,index)=>{arglist.push(val);});
// console.log(arglist);
if(arglist[2]=="help" || arglist[2]=="/?"||arglist.length==2){
    console.log("index.js {[T text] [F filename]} [C] [O filename] {[U]|[E]} [help|/?] ")
    
    console.log("  T text      The text to be en/decrypted.");
    console.log("  F filename  The filename of the txt file to be en/decrypted.");
    console.log("  C           Print the en/decrypted text to the console.");
    console.log("  O filename  The filename of the en/decrypted txt file to be created.");
    console.log("  U           Decrypt the text.");
    console.log("  E           Encrypt the text.");
    console.log("  help|/?     Shows this help message.")
}else{ 
    if(arglist.indexOf("T")==-1 && arglist.indexOf("F")==-1){
        console.error("You have to specify an input method, idiot")
    }else if(arglist.indexOf("T")!==-1 && arglist.indexOf("F")!==-1){
        console.error("You can't have T and F as arguments at the same time, dumbass!")
    }else if(arglist.indexOf("F")!==-1){
        
        fs.readFile(arglist[arglist.indexOf("F")+1],function(err,html){
            if(err){
                throw(err);
            }
            text=html.toString();
            encText=encrypt(text);
            console.log(encText);
            output();
            // console.log(html.toString());
        })
    }else if(arglist.indexOf("T")!==-1){
        text=arglist[arglist.indexOf("T")+1];
        encText=encrypt(text);
        output();
    }
    console.log("the text is:" + text);
    





    
}
// console.log(arglist);

