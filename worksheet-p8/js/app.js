const profil = {
  nama: "Muhammad Syifaai Ulin Nuha",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const jumlahProyek = 3;

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);
console.log(profil); // Tambahkan ini agar objek profil tercetak di Console
// 1. Fungsi murni untuk menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran }) {
  return `${nama} ${peran}`;
}

// 2. Fungsi murni untuk merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(". ");

// Menguji fungsi di Console
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));
