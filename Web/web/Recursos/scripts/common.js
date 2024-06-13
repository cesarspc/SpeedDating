// Metodo que envia peticion a la api
async function sendRequest(repository, data, method) {
    const options = {
        method: method,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    };

    if (method !== "GET") {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(`http://localhost:8081/api/${repository}`, options);
        const data_1 = await response.json();
        return data_1;
    } catch (err) { }
}


function addRow(data, tbody) {
    // Crear una nueva fila
    let fila = document.createElement("tr");
    const claves = Object.keys(data);

    // Crear celdas para la nueva fila
    let celdas = [];
    for (i = 0; i < claves.length; i++) {
        celdas.push(document.createElement("td"));
    }

    // Agregar a fila
    for (j = 0; j < claves.length; j++) {
        let valor = data[claves[j]];

        // Coloca si o no evaluando primero si el valor es booleano
        celdas[j].textContent = typeof(valor) === "boolean" ? (valor ? "Si" : "No") : valor;
        fila.appendChild(celdas[j]);
    }

    tbody.appendChild(fila);
}
