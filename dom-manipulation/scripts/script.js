/*
  =====================================================
  SECTION 1 - MENGUBAH KONTEN HTML
  =====================================================
*/

function ubahKonten() {
  document.getElementById("text-content").innerHTML = "Selamat Pagi, Dunia!";
}

/*
  =====================================================
  SECTION 2 - MENGUBAH STYLE
  =====================================================
*/

function ubahStyle() {
  let teks = document.getElementById("text-style");

  teks.style.color = "red";
  teks.style.fontSize = "20px";
}

/*
  =====================================================
  SECTION 3 - MANIPULASI CLASS
  =====================================================
*/

function tambahClass() {
  let teks = document.getElementById("text-class");

  teks.classList.add("bg-red-500");

}

function hapusClass() {
  let teks = document.getElementById("text-class");

  teks.classList.remove("bg-red-500");
}

function toggleClass() {
  let teks = document.getElementById("text-class");

  teks.classList.toggle("bg-red-500");

}

/*
  =====================================================
  SECTION 4 - CREATE ELEMENT
  =====================================================
*/

function tambahElement() {
  let ul = document.getElementById("list-tech");
  let li = document.createElement("li");

  li.innerHTML = "JavaScript"; 
  ul.append(li);
}

/*
  =====================================================
  SECTION 5 - INLINE EVENT & EVENT LISTENER
  =====================================================
*/

// INLINE EVENT
function alertInline() {
  alert("Tombol ini menggunakan inline event!");
}

// EVENT LISTENER
let btnEvent = document.getElementById("btn-event-listener");
btnEvent.addEventListener("click", function() {
  alert("Tombol ini menggunakan event listener!");
});

/*
  =====================================================
  SECTION 6 - MANIPULASI STYLE SPECIFIC
  =====================================================
*/

function ubahBackground() {
  let background = document.querySelector(".manipulasi-card");
  background.style.backgroundColor = "lightblue";
}
