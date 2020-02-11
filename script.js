var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nombre"] = document.getElementById("nombre").value;
    formData["nit"] = document.getElementById("nit").value;
    formData["fecha"] = document.getElementById("fecha").value;
    formData["direccion"] = document.getElementById("direccion").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nombre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nit;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.fecha;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.direccion;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("nombre").value = "";
    document.getElementById("nit").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("direccion").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nombre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nit").value = selectedRow.cells[1].innerHTML;
    document.getElementById("fecha").value = selectedRow.cells[2].innerHTML;
    document.getElementById("direccion").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nombre;
    selectedRow.cells[1].innerHTML = formData.nit;
    selectedRow.cells[2].innerHTML = formData.fecha;
    selectedRow.cells[3].innerHTML = formData.direccion;
}

function onDelete(td) {
    if (confirm('seguro que desea eliminar este registro ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nombre").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}