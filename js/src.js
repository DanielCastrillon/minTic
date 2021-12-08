let ValorTotal=0;

async function valorDeIngresos() {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/personal-finance/operations");
    let operacionesRegistradas = await response.json();
    operacionesRegistradas.forEach(element => {
        if (element.tipo == "ingreso") {
            ValorTotal = JSON.parse(element.monto) + ValorTotal;
        }
    });
    return ValorTotal; 
}

module.exports.valorDeIngresos=valorDeIngresos;
