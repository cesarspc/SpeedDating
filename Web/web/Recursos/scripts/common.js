// Metodo que envia peticion a la api
function sendRequest(repository, data, method) {
    fetch(`http://localhost:8081/api/${repository}`, {
        method: method,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            return response.json();  
        } else {
            return response.json().then(errorData => {
                throw new Error(errorData.message || response.statusText);
            });
        }
    })
    .then(data => {
        alert("Peticion exitosa");
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error en la peticion");
    });

}

