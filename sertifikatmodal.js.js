// Fungsi untuk membuka modal
function openModal(element) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = element.src; // Menampilkan gambar yang diklik
    captionText.innerHTML = element.alt; // Menampilkan caption gambar
}

// Fungsi untuk menutup modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
