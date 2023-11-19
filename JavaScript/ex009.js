const num = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < num.length; i++) {
    let par = num[i]
    if (par % 2 === 0){
        console.log(par)
    } else {
        
        console.log(par + ' É Impar')
    }
   
    
}