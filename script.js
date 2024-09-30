var text=prompt("undovli matn kiriting")

var son=prompt("matndagi o'chiriladigan undovnlar sonini kiriting")

console.log(text)
for (let i = 0; i < son; i++) {
    text=text.replace("!","")    
}

console.log(text)