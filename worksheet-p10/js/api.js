// Tetapkan alamat API di satu tempat
const ALAMAT = "https://jsonplaceholder.typicode.com/posts"; // Contoh API publik, atau ganti dengan yang Anda pilih

export async function ambilNotisia() {
  const respons = await fetch(ALAMAT);
  console.log("status", respons.status, "ok", respons.ok);

  // Periksa respons.ok karena fetch tidak melempar galat pada status 404/500
  if (!respons.ok) {
    throw new Error("status " + respons.status);
  }

  return respons.json();
}
