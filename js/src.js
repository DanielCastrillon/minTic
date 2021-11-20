let operaciones=[];
let balance=0;

const registrarOperacion=(monto,tipo,categoria,fecha)=>{
    operaciones.push(
        {
            monto: x,
            tipo: gasto-ingreso,
            categoria: x,
            fecha: date
        }
    );
}
const registrarMetaAhorro=(meta)=>{}
const estaMiMetaCumplida=()=>{}


//FUNCION
//var operaciones = [];
//var balance = 0;

function registrarOperacion(monto, tipo, categoria, fecha) {
    //OBJETO
    let objeto1 = {
        ingresodemonto: monto,
        ingresodetipo: tipo,
        ingresodecategoria: categoria,
        ingresodefecha: fecha
    }
    //METER EL OBJETO EN EL ARRAY
    operaciones.push(objeto1)

    //CONDICIONAL SI ES IGUAL A INGRESO SUME DE LO CONTRARIO RESTE
    if (tipo == 'Ingreso') {
        balance = balance+monto;
    }else{
        balance
let operaciones = [];
let balance = 0;
function parametros(params) {
    
}

const registrarOperacion = (monto, tipo, categoria, fecha)=>{
    console.log(operaciones); 
    valMonto = parseInt(monto);

    console.log(valMonto);
    console.log(tipo);
    console.log(categoria);
    console.log(fecha);

    operaciones.push({
        montoVal:console.log(operaciones),
        tipoVal: tipo,
        categoriaVal: categoria,
        fechaVal: fecha
    });
}

console.log(operaciones);


const registrarMetaAhorro=(meta)=>{

}

const estaMiMetaCumplida=()=>{

}
module.exports.registrarMetaAhorro=registrarMetaAhorro;
module.exports.estaMiMetaCumplida=estaMiMetaCumplida;
module.exports.registrarOperacion=registrarOperacion;