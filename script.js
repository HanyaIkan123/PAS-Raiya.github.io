var nama = prompt("Masukan Nick mu");
alert("Selamat Datang " + nama);
var user = confirm("Apakah Kamu Ingin Bermain ?");
if (user) {
    alert('Baiklah, Mari kita Mulai!');
} else {
    alert('Baiklah, aku tidak akan melarang.');
    alert("Tapi kamu tetap main :v")
}

alert("Kita akan bermain Tebak Angka")
alert("Tebak angka dari 1-10")
alert("Gampang kok ini. Kesempatan menang mu 10% dan 3 kali kesempatan menjawab")
alert("Mari kita mulai "+ nama)

var targetNomer = Math.floor(Math.random() * 10) + 1;
var kesempatan = 3;

do {
    var jawaban1 = prompt('Tebak angka antara 1 dan 10:');
    var Jawaban2 = parseInt(jawaban1);

    if (!isNaN(Jawaban2)) {
        if (Jawaban2 === targetNomer) {
            alert('Selamat! ' + Nama );
            alert('Kamu menebak benar.')
            alert("Refresh Tab nya jika kamu mau main lagi")
            break;
        } else {
            alert('Yah Jawabannya Yang bener ini ' + targetNomer);
            alert("Jangan Sedih " + nama)
            alert("mari kita coba lagi")
            kesempatan--;
        }
    } else {
        alert('Masukan angka woy bukan yang lain.');
        kesempatan--;
    }
} while (kesempatan > 0);

if (kesempatan === 0) {
    alert('Maaf kesempatan kamu habis, Jawabannya ' + targetNomer);
    alert("Refresh Tab nya lagi biar bisa main lagi")
}


