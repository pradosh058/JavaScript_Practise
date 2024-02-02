let message = "   I am      a       Software       Developer";

const filterString = (string) => {
    let ans="";
    for(let i = 0; i< string.length; i++){
        if(string[i] !== " "){
            ans+=string[i];
        }
    }
    return ans;
}

const ans = filterString(message);
console.log(ans);