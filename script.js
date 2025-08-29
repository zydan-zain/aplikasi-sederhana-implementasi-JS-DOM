const form = document.getElementById("formLagu")
const judul = document.getElementById("judul")
const penyanyi = document.getElementById("penyanyi")
const genre = document.getElementById("genre")
const daftar = document.getElementById("daftarLagu")

form.addEventListener("submit", function(e) {
  e.preventDefault()

  if (judul.value === "" || penyanyi.value === "" || genre.value === "") {
    alert("Isi dulu semua data lagu!")
    return
  }

  const div = document.createElement("div")
  div.className = "kartu"
  div.innerHTML = `
    <b>${judul.value}</b>
    <span>${penyanyi.value} · ${genre.value}</span>
  `
  daftar.appendChild(div)

  judul.value = ""
  penyanyi.value = ""
  genre.value = ""
})