for(let x = 0; x <= 10; x++ ){
    for(let y = 0; y <= 10; y++){
        if(x == y || y == 0 || y == 10 || x + y == 10 || y == 5){
            document.write("*")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}
document.write("<br>")

for(let x = 0; x <= 10; x++ ){
    for(let y = 0; y <= 10; y++){
        if( x + y == 5 || x - y == 5 || -x - -y == 5 ||x + y == 15 ){
            document.write("*")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}
document.write("<br>")

for(let x = 0; x <= 10; x++ ){
    for(let y = 0; y <= 10; y++){
        if( x <= y){
            document.write("+")
        } else {
            document.write(" -")
        }
    }
    document.write("<br>")
}

