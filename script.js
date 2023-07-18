let inputForm = document.getElementById('input-form');
let btnBio = document.getElementById('bio');
let btnSubmit = document.getElementsByName('submit')[0];
let nama = document.getElementById('name');
let role = document.getElementById('role');
let availability = document.getElementById('availability');
let usia = document.getElementById('usia');
let lokasi = document.getElementById('lokasi');
let pengalaman = document.getElementById('pengalaman');
let email = document.getElementById('email');

let formName = document.getElementsByName('nama');
let formRole = document.getElementsByName('role');
let formAvailability = document.getElementsByName('availability');
let formUsia = document.getElementsByName('usia');
let formLokasi = document.getElementsByName('lokasi');
let formPengalaman = document.getElementsByName('pengalaman');
let formEmail = document.getElementsByName('email');


function buttonEdit(event) {
    event.preventDefault();
    let inputForm = document.getElementById("input-form");
    inputForm.style.display = "block";
    let nama = document.getElementById('name').innerHTML;
    document.getElementById("formNama").value = nama;

}

function buttonSubmit(event) {
    event.preventDefault();
    let nama = document.getElementById('formNama').value;
    document.getElementById("name").innerHTML = nama;
    let role = document.getElementById('formRole').value;
    document.getElementById("role").innerHTML = role;
    let availability = document.getElementById('formAvailability').value;
    document.getElementById("availability").innerHTML = availability;
    let usia = document.getElementById('formUsia').value;
    document.getElementById("usia").innerHTML = usia;
    let lokasi = document.getElementById('formLokasi').value;
    document.getElementById("lokasi").innerHTML = lokasi;
    let pengalaman = document.getElementById('formPengalaman').value;
    document.getElementById("pengalaman").innerHTML = pengalaman + " tahun";
    let email = document.getElementById('formEmail').value;
    document.getElementById("email").innerHTML = email;
    inputForm.style.display = 'none';
        
}
