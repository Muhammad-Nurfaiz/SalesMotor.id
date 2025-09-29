const motorData = {
  vario160: {
    nama: "Honda Vario 160",
    harga: "Rp26.800.000",
    warna: [
      { nama: "Hitam", kode: "#0a0a0a", gambar: "assets/vario/honda-vario-150-esp-color-458797.avif" },
      { nama: "Putih", kode: "#f3f4f6", gambar: "assets/vario/honda-vario-150-esp-color-458797.avif" },
      { nama: "Merah", kode: "#dc2626", gambar: "assets/vario/honda-vario-150-esp-color-458797.avif" }
    ],
    spesifikasi: [
      ["Mesin", "160cc, 4-langkah, eSP+"],
      ["Transmisi", "Otomatis, V-Matic"],
      ["Kapasitas Tangki", "5,5 liter"],
      ["Rem", "CBS / ABS"],
      ["Ban", "Tubeless depan & belakang"]
    ],
    fitur: [
      "✅ Smart Key System",
      "✅ Bagasi Luas 18L",
      "✅ Panel Digital",
      "✅ Irit BBM"
    ]
  },

  nmax: {
    nama: "Yamaha NMAX",
    harga: "Rp31.115.000",
    warna: [
      { nama: "Hitam Doff", kode: "#111827", gambar: "assets/nmax/nmax-hitam.webp" },
      { nama: "Silver", kode: "#9ca3af", gambar: "assets/nmax/nmax-silver.avif" },
      { nama: "Merah", kode: "#b91c1c", gambar: "assets/nmax/nmax-merah.png" }
    ],
    spesifikasi: [
      ["Mesin", "155cc, Blue Core, VVA"],
      ["Transmisi", "Otomatis CVT"],
      ["Kapasitas Tangki", "7,1 liter"],
      ["Rem", "ABS / Non-ABS"],
      ["Fitur Tambahan", "Stop & Start System, TCS"]
    ],
    fitur: [
      "✅ Teknologi VVA",
      "✅ Bagasi 23 Liter",
      "✅ ABS & TCS",
      "✅ Speedometer Full Digital"
    ]
  },

  gsxr150: {
    nama: "Suzuki GSX-R150",
    harga: "Rp35.200.000",
    warna: [
      { nama: "Biru Racing", kode: "#3b82f6", gambar: "assets/gsxr/gsx-blue-300x252.webp" },
      { nama: "Hitam Glossy", kode: "#1f2937", gambar: "assets/gsxr/gsxr-hitam.webp" }
    ],
    spesifikasi: [
      ["Mesin", "147.3cc, DOHC, 4-Valve"],
      ["Transmisi", "6-Speed Manual"],
      ["Kapasitas Tangki", "11 liter"],
      ["Rem", "Disk Brake Depan & Belakang"],
      ["Bobot", "131 kg"]
    ],
    fitur: [
      "✅ Kunci Keyless",
      "✅ Panel Digital",
      "✅ Mesin DOHC Powerfull",
      "✅ Lampu LED Sporty"
    ]
  },

  jupiter: {
    nama: "Yamaha Jupiter Z1",
    harga: "Rp19.790.000",
    warna: [
      { nama: "Merah Hitam", kode: "#1f2937", gambar: "assets/jupiter/jupiter-black.png" },
      { nama: "Biru Silver", kode: "#991b1b", gambar: "assets/jupiter/jupiter-red.png" },
      { nama: "Biru Silver", kode: "#60a5fa", gambar: "assets/jupiter/jupiter-blue.png" }
    ],
    spesifikasi: [
      ["Mesin", "113.7cc, 4-Stroke SOHC"],
      ["Transmisi", "Manual 4-speed"],
      ["Kapasitas Tangki", "4,1 liter"],
      ["Rem", "Cakram Depan / Tromol Belakang"],
      ["Ban", "Tubeless"]
    ],
    fitur: [
      "✅ Mesin Fuel Injection",
      "✅ Desain Sporty",
      "✅ Irit BBM",
      "✅ Cocok untuk Harian"
    ]
  },

  scoopy: {
    nama: "Honda Scoopy",
    harga: "Rp21.875.000",
    warna: [
      { nama: "Cream", kode: "#fcd34d", gambar: "assets/scoopy/1-60-05112024-030828.webp" },
      { nama: "Merah Marun", kode: "#7f1d1d", gambar: "assets/scoopy/1-60-05112024-030828.webp" },
      { nama: "Abu Retro", kode: "#9ca3af", gambar: "assets/scoopy/1-60-05112024-030828.webp" }
    ],
    spesifikasi: [
      ["Mesin", "110cc, eSP"],
      ["Transmisi", "Otomatis"],
      ["Kapasitas Tangki", "4,2 liter"],
      ["Rem", "CBS"],
      ["Bobot", "95 kg"]
    ],
    fitur: [
      "✅ Smart Key System",
      "✅ Desain Retro Modern",
      "✅ Bagasi Luas",
      "✅ Charger USB"
    ]
  },

  beatdeluxe: {
    nama: "Honda Beat Deluxe",
    harga: "Rp18.430.000",
    warna: [
      { nama: "Biru", kode: "#2563eb", gambar: "assets/beat deluxe blue.webp" },
      { nama: "Hitam", kode: "#111827", gambar: "assets/beat deluxe black.webp" },
      { nama: "Hijau", kode: "#006400", gambar: "assets/beat deluxe green.webp" },
      { nama: "Silver", kode: "#9ca3af", gambar: "assets/beat deluxe dark silver.webp" }
    ],
    spesifikasi: [
      ["Mesin", "110cc, eSP, SOHC, 4 langkah"],
      ["Transmisi", "Otomatis V-Matic"],
      ["Kapasitas Tangki", "4,2 liter"],
      ["Rem", "Cakram depan, tromol belakang"],
      ["Bobot", "89 kg"]
    ],
    fitur: [
      "✅ Panel Meter Full Digital",
      "✅ Power Charger",
      "✅ Side Stand Switch",
      "✅ Secure Key Shutter",
      "✅ Irit BBM hingga 60 km/liter"
    ]
  }

};

const urlParams = new URLSearchParams(window.location.search);
const motorKey = urlParams.get("motor");

if (motorKey && motorData[motorKey]) {
  const motor = motorData[motorKey];

  const imageElement = document.querySelector("img#changeable-image");
  const btnWA = document.getElementById("whatsappBtn");
  const warnaContainer = document.getElementById("warna-varian");

  document.title = "Detail Motor - " + motor.nama;
  document.querySelector("h2").textContent = motor.nama;
  document.querySelector("p.text-red-600").textContent = "Harga OTR: " + motor.harga;

  imageElement.src = motor.warna[0].gambar;
  imageElement.alt = motor.warna[0].nama;

  warnaContainer.innerHTML = "";
  motor.warna.forEach((w, index) => {
    const btn = document.createElement("button");
    btn.className = "w-6 h-6 rounded-full border-2 border-gray-300 hover:border-black";
    btn.style.backgroundColor = w.kode;
    btn.title = w.nama;
    btn.onclick = () => highlightSelected(index);
    warnaContainer.appendChild(btn);
  });

  function highlightSelected(selectedIndex) {
    const btns = document.querySelectorAll("#warna-varian button");
    btns.forEach((btn, i) => {
      if (i === selectedIndex) {
        btn.classList.add("border-black");
        btn.classList.remove("border-gray-300");
      } else {
        btn.classList.remove("border-black");
        btn.classList.add("border-gray-300");
      }
    });

    const warnaTerpilih = motor.warna[selectedIndex];
    imageElement.src = warnaTerpilih.gambar;
    imageElement.alt = warnaTerpilih.nama;
    updateWhatsAppLink(selectedIndex);
  }

  const whatsappNumber = "6289529850197"; // ganti nomor WA sales
  function updateWhatsAppLink(selectedIndex = 0) {
    const selectedWarna = motor.warna[selectedIndex];
    const link = window.location.href;
    const text = `Halo, saya tertarik dengan motor *${motor.nama}* warna *${selectedWarna.nama}*.\nLink: ${link}\nApakah masih tersedia?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    btnWA.href = url;
  }

  highlightSelected(0);

  // Render Spesifikasi
  const specTable = document.querySelector("section:nth-of-type(3) tbody");
  specTable.innerHTML = "";
  motor.spesifikasi.forEach(([label, value]) => {
    specTable.innerHTML += `
      <tr><th class="p-2 border font-medium">${label}</th><td class="p-2 border">${value}</td></tr>
    `;
  });

  // Render Fitur
  const fiturContainer = document.querySelector("section:nth-of-type(4) .grid");
  fiturContainer.innerHTML = "";
  motor.fitur.forEach(fitur => {
    fiturContainer.innerHTML += `
      <div class="bg-gray-100 p-4 rounded shadow">
        <h4 class="font-semibold mb-2">${fitur}</h4>
      </div>
    `;
  });

} else {
  console.log('masih bingung')
}

function toggleSortDropdown() {
  document.getElementById("sortDropdown").classList.toggle("hidden");
}

function sortHarga(asc = true) {
  const container = document.querySelector(".grid"); // grid motor
  const cards = Array.from(container.querySelectorAll("[data-category]"));

    // Ambil harga dari teks, lalu sort
  cards.sort((a, b) => {
    const hargaA = parseInt(a.querySelector("p").textContent.replace(/[^\d]/g, ""));
    const hargaB = parseInt(b.querySelector("p").textContent.replace(/[^\d]/g, ""));
    return asc ? hargaA - hargaB : hargaB - hargaA;
  });

    // Susun ulang di dalam container
  cards.forEach(card => container.appendChild(card));

    // Tutup dropdown
  document.getElementById("sortDropdown").classList.add("hidden");
}

function sortCategory(btn, category) {
  const cards = document.querySelectorAll("[data-category]");
  const buttons = document.querySelectorAll(".category-btn");

    // Reset semua tombol
  buttons.forEach(button => {
    button.classList.remove("bg-red-600", "text-white", "shadow-md");
    button.classList.add("bg-gray-100", "text-gray-800");
  });

    // Tambahkan gaya ke tombol aktif
  btn.classList.remove("bg-gray-100", "text-gray-800");
  btn.classList.add("bg-red-600", "text-white", "shadow-md");

    // Tampilkan kartu motor sesuai kategori
  cards.forEach(card => {
    const cat = card.getAttribute("data-category");
    if (category === "semua" || cat === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}