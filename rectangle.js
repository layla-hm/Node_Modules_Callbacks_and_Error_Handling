module.exports = (x,y, callback) => {
    if (x <= 0 || y <= 0){
        setTimeout(() => callback(new Error("rectangle dimensions should be greater than zero: l=" +x + "and b=" +y), null), 2000)
    }
    else {
        setTimeout(() => 
        callback (null, 
            {
            perimetre: (x,y) =>  (2*(x+y)),
            area: (x,y) => (x*y) 
        })
        ,2000)
    }
}














