let operaciones=[];
let balance=0;
let metaAhorro=0;


function registrarOperacion(monto, tipo, categoria, fecha) {
    operaciones.push(
        {
            monto: monto,
            tipo: tipo,
            categoria: categoria,
            fecha: fecha
        }
    );
    if (tipo == 'ingreso') {
        balance = balance + monto;
    }
    else if (tipo == 'gasto') {
        balance = balance - monto;
    }
    localStorage.setItem("operaciones",JSON.stringify(operaciones));
    localStorage.setItem("balance",balance);
}

function registrarMetaAhorro(meta) {
    localStorage.setItem("metaAhorro", meta);
}

function estaMiMetaCumplida() {
    metaAhorro=parseFloat(localStorage.getItem("metaAhorro"));
    balance=parseFloat(localStorage.getItem("balance"));
    if (metaAhorro<balance) {
        console.log("cumple");
        return 'cumple';
    } else {
        console.log("no cumple");
        return "no cumple";
    }
}
registrarMetaAhorro(5000);
registrarOperacion(2000,'ingreso' , 'salario', '10/01/2015');
registrarOperacion(5000,'ingreso' , 'salario', '10/01/2015');
registrarOperacion(1200,'gasto' , 'salario', '10/01/2015');
estaMiMetaCumplida();
module.exports.registrarMetaAhorro=registrarMetaAhorro;
module.exports.estaMiMetaCumplida=estaMiMetaCumplida;
module.exports.registrarOperacion=registrarOperacion;



