
 const registrarOperacion=async(monto, tipo, categoria, fecha) =>{
    let response = await fetch(
        "https://misiontic2022upb.vercel.app/api/personal-finance/operations",
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    monto: monto,
                    tipo: tipo,
                    categoria: categoria,
                    fecha: fecha
                }
            ),
        }
    );
    console.log(await response.text());
    return response.json();
}
const estaMimetaCumplida=async(meta)=> {
        let response = await fetch("https://misiontic2022upb.vercel.app/api/personal-finance/is-my-goal-achieved/4000");
        let estaMiMetaCumplida = await response.json();
        return response.json();
}
estaMimetaCumplida(2000);
registrarOperacion(1000,"ingreso","salario","01/10/2016");
module.exports.estaMiMetaCumplida=estaMimetaCumplida;
module.exports.registrarOperacion=registrarOperacion;

