addMasks();
const companies = getCompanies();
buildCompanies();
buildRegimeSelect();

function clearErrors() {
    document.querySelector("#error").textContent = ""
}

function buildRegimeSelect() {
    let select = document.querySelector("#taxRegime");
    getTypes().then(function (data) {
        data.forEach(element => {
            let option = document.createElement("option");
            option.setAttribute("value", element.code);
            option.text = element.description;
            select.appendChild(option);
        })
    })
}

function addMasks() {
    $("#cnpj").mask("00.000.000/0000-00");
}

function buildCompanies() {
    companies.then(function (data) {
        let table = document.querySelector("#list_companies");
        data.forEach(element => {
            let tr = document.createElement("tr");
            let tdAction = document.createElement("td");
            let i = document.createElement("i");

            i.classList.add("fas");
            i.classList.add("fa-trash-alt");

            let a = document.createElement("a");
            a.appendChild(i);
            a.setAttribute("href", "#")
            a.setAttribute("onClick", "deleteCompanyById(" + element.id + ")");
            tdAction.appendChild(a);

            tr.appendChild(buildTd(element.companyName));
            tr.appendChild(buildTd(element.cnpj));
            tr.appendChild(buildTd(element.email));
            tr.appendChild(buildTd(element.taxRegime));
            tr.appendChild(tdAction);

            table.appendChild(tr);
        });
    })
}

function buildTd(value) {
    let td = document.createElement("td");
    td.textContent = value;
    return td;
}

function deleteCompanyById(id) {
    deleteCompany(id).then(function (response) {
        if (response.status == 204) {
            location.reload();
        }
    });
}

function registerCompany() {
    let request = {
        "companyName": document.querySelector("#name").value,
        "cnpj": document.querySelector("#cnpj").value,
        "email": document.querySelector("#email").value,
        "taxRegime": document.querySelector("#taxRegime").value
    }

    createCompany(request).then(function (data) {
        console.log(data);
        if (data.success == true) {
            location.reload();
        }
    }).catch(function (response) {
        document.querySelector("#error").textContent = "Erro ao cadastrar funcionário, verifique os dados e tente novamente."
    })
}