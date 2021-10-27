const fs = require("fs");

const colors=require("colors")

const crearArchivo = async(base=5,listar=false,hasta=10)=>{


    try{
     
        
            let salida="",consola="";
            let size=hasta;
        
        
        for(let i=1;i<=size;i++){
        
         salida +=`${(base)} x ${(i)} = ${base*i}\n`;
         consola +=`${(base)} ${"x".green} ${colors.yellow(i)} ${"=".green} ${base*i}\n`;
        
        }
        
        if(listar){
            
        console.log(("==============================".rainbow));
        console.log("Tabla del:",base);
        console.log(("==============================".rainbow));
        console.log( consola );
        }
      
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        
        return `tabla-${base}.txt`;
        
    }catch(error){
        throw error; 
    }

}

module.exports={
    crearArchivo
}