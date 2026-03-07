function showPage(pageId) {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('calculator').classList.add('hidden');
    
    // Tampilkan halaman yang dipilih
    document.getElementById(pageId).classList.remove('hidden');

    // Alert khusus untuk Menu
    if(pageId === 'menu') {
        alert('Input Jumlah Pesanan agar di hitung otomatis oleh sistem');
    }
}

// perhitungan Menu Makanan
function hitungTotal() {
    const harga1 = 12000, harga2 = 10000, harga3 = 15000;
    
    let q1 = parseInt(document.getElementById('qty1').value) || 0;
    let q2 = parseInt(document.getElementById('qty2').value) || 0;
    let q3 = parseInt(document.getElementById('qty3').value) || 0;

    let total = (q1 * harga1) + (q2 * harga2) + (q3 * harga3);
    let diskon = 0;

    // diskon 10% jika total > 50.000
    if (total > 50000) {
        diskon = total * 0.1;
    }

    document.getElementById('total').value = total;
    document.getElementById('diskon').value = diskon;
    document.getElementById('bayar').value = total - diskon;
}

function resetMenu() {
    document.getElementById('qty1').value = 0;
    document.getElementById('qty2').value = 0;
    document.getElementById('qty3').value = 0;
    hitungTotal();
}

// logika Kalkulator Sederhana
function hitungKalkulator() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    let op = document.getElementById('operator').value;
    
    if (n1 === "" || n2 === "") {
        alert("inputan pertama dan kedua harus lebih dari 0");
        return;
    }

    // menggunakan eval untuk kalkulasi sederhana (pastikan input aman)
    let hasil = eval(n1 + op + n2);
    document.getElementById('result').value = hasil;
}

function resetKalkulator() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('result').value = "";
}