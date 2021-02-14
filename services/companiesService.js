function getCompanies() {
    return axios.get("http://localhost:8080/companies/search").then(response =>  {
        return response.data;
    })  
}

function createCompany(data) {
    return axios.post("http://localhost:8080/companies/create", data)
    .then(response => response.data)
}

function deleteCompany (id) {
    return axios.delete("http://localhost:8080/companies/delete/" + id).then(response =>  {
        return response;
    })
}

function getTypes() {
    return axios.get("http://localhost:8080/companies/types").then(response =>  {
        return response.data;
    })  
}

function getDashboard() {
    return axios.get("http://localhost:8080/companies/dashboard").then(response =>  {
        return response.data;
    }) 
}
