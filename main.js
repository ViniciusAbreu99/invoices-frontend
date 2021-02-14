const dashboard = getDashboard();
buildTable();
buildTotal();


function buildTable() {
    let table = document.querySelector("#table_companies");
    dashboard.then(function(data) {
        data.companiesByRegime.forEach(element => {
            let tr = document.createElement("tr");
            tr.appendChild(buildTd(element.taxRegime))
            tr.appendChild(buildTd(element.countCompanies))
            table.appendChild(tr);            
        });
    });
}

function buildTotal() {
    dashboard.then(function(data) {
        let totalCompaniesElement = document.querySelector("#total_companies");
        totalCompaniesElement.textContent = data.totalCompanies;
    })
}

function buildTd(value) {
    let td = document.createElement("td");
    td.textContent = value;
    return td;
}