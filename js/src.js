let operaciones=[];
let balance=0;

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
    if (Number(localStorage.getItem("metaAhorro")) < Number(localStorage.getItem("balance"))) {
        return 'cumple';
    } else {
        return "no cumple";
    }
}

module.exports.registrarMetaAhorro=registrarMetaAhorro;
module.exports.estaMiMetaCumplida=estaMiMetaCumplida;
module.exports.registrarOperacion=registrarOperacion;

