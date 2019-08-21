var input = document.querySelector('ion-list');
var buttonAdd = document.querySelector('#btnAdd');
var buttonDelete = document.querySelector('#btnDelete');
var alertController = document.querySelector('ion-alert-controller');
let jumlah = 0;

buttonAdd.addEventListener('click', btnAddClick);
function btnAddClick(){
  console.log("Button Add Clicked");
  var inputName = document.getElementById('pengeluaran').value;
  var inputJumlah = document.getElementById('jumlah').value;

  console.log(inputJumlah == "" ? "No Price" : inputJumlah)
  console.log(inputName == "" ? "No Name" : inputName)

  if(inputJumlah == "" && inputName == ""){
    presentAlert("ALL_EMPTY")
  }
  else if(inputJumlah == "" && inputName != ""){
    presentAlert("NO_PRICE")
  }
  else if(inputJumlah != "" && inputName == ""){
    presentAlert("NO_NAME")
  }
  else{
    var jumlahPengeluaran = document.getElementById("jumlahPengeluaran");
    var semuaPengeluaran = document.getElementById("semuaPengeluaran");

    //Tampilin
    jumlahSatuan = (parseInt(inputJumlah, 10)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    semuaPengeluaran.innerHTML += 
      "<ion-item><ion-label>" + inputName + ": Rp. " + jumlahSatuan + "</ion-label></ion-item><br>"

    //Jumlahin
    jumlah += parseInt(inputJumlah, 10) 
    strJumlah = (jumlah).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    jumlahPengeluaran.innerHTML = "Rp. " + strJumlah
    
    console.log(jumlah);
  }
}

buttonDelete.addEventListener('click', btnDelClick);
function btnDelClick(){
  console.log("Button Delete Clicked");

  var jumlahPengeluaran = document.getElementById("jumlahPengeluaran");
  var semuaPengeluaran = document.getElementById("semuaPengeluaran");

  semuaPengeluaran.innerHTML = ""
  jumlahPengeluaran.innerHTML = "Rp 0,00"
  
  document.getElementById('pengeluaran').value = "";
  document.getElementById('jumlah').value = "";
}

async function presentAlert(status) {
  const alertController1 = document.querySelector('ion-alert-controller');
  await alertController1.componentOnReady();

  if(status == 'NO_NAME'){
    const alert = await alertController1.create({
      header: 'Terjadi Kesalahan',
      message: 'Mohon masukkan nama pengeluaran.',
      buttons: ['TUTUP']
    });
    return await alert.present();
  }
  else if(status == 'NO_PRICE'){
    const alert = await alertController1.create({
      header: 'Terjadi Kesalahan',
      message: 'Mohon masukkan jumlah pengeluaran.',
      buttons: ['TUTUP']
    });
    return await alert.present();
  }
  else if(status == 'ALL_EMPTY'){
    const alert = await alertController1.create({
      header: 'Terjadi Kesalahan',
      message: 'Mohon masukkan nama dan jumlah pengeluaran.',
      buttons: ['TUTUP']
    });
    return await alert.present();
  }
  else{
    const alert = await alertController1.create({
      header: 'Terjadi Kesalahan',
      subHeader: 'Subtitle',
      message: 'Mohon masukkan nama dan jumlah pengeluaran.',
      buttons: ['TUTUP']
    });
    return await alert.present();
  }
}