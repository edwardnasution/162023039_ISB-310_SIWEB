// referensi elemen dari HTML
const bgPicker = document.getElementById('bgPicker');
const textPicker = document.getElementById('textPicker');
const saveBtn = document.getElementById('saveBtn');
const body = document.getElementById('app-body');

// mengubah warna
saveBtn.addEventListener('click', function() {

    const selectedBgColor = bgPicker.value;
    const selectedTextColor = textPicker.value;

    body.style.backgroundColor = selectedBgColor;
    body.style.color = selectedTextColor;

    console.log("Warna latar diubah ke: " + selectedBgColor);
    console.log("Warna teks diubah ke: " + selectedTextColor);
});