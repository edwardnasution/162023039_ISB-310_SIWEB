const tglSelect = document.getElementById('tgl');
const thnSelect = document.getElementById('thn');

for (let i = 1; i <= 31; i++) tglSelect.options.add(new Option(i, i));
for (let i = 1950; i <= 2026; i++) thnSelect.options.add(new Option(i, i));

const ramalanData = {
    0: "Garis Hidup 1: Anda adalah perwujudan dari potensi murni dan energi yang tak terbatas. Dalam perjalanan hidup Anda, Anda ibarat kanvas kosong yang memiliki kemampuan luar biasa untuk menyerap segala jenis ilmu dan pengalaman. Anda memiliki intuisi yang sangat tajam dan seringkali merasa terhubung dengan sesuatu yang lebih besar dari diri Anda sendiri. Kekuatan utama Anda adalah kemampuan untuk memulai kembali dari nol tanpa rasa takut, menjadikan setiap kegagalan sebagai batu loncatan menuju pemahaman yang lebih dalam. Anda adalah sosok yang sulit ditebak namun selalu membawa perubahan positif bagi lingkungan sekitar. Tantangan terbesar Anda adalah menentukan arah di tengah begitu banyak pilihan, namun begitu Anda memfokuskan energi, Anda mampu mencapai hal-hal yang dianggap mustahil oleh orang lain.",
    1: "Garis Hidup 2: Sebagai individu dengan angka garis hidup 1, kemandirian dan kepemimpinan adalah napas utama dalam hidup Anda. Anda adalah tipe pionir yang tidak takut untuk berjalan sendirian di jalur yang belum pernah dilalui orang lain. Motivasi diri Anda sangat tinggi, dan Anda memiliki kemampuan untuk bangkit kembali dengan cepat dari keterpurukan. Anda melihat dunia sebagai tempat penuh peluang yang menunggu untuk ditaklukkan. Namun, di balik ketangguhan tersebut, Anda seringkali merasa memikul beban yang berat karena keinginan untuk selalu menjadi yang terbaik. Anda perlu belajar bahwa meminta bantuan bukanlah tanda kelemahan, melainkan bagian dari strategi menuju kesuksesan yang lebih besar. Fokus Anda pada tujuan seringkali membuat Anda mengabaikan detail kecil, namun visi jangka panjang Anda adalah apa yang akan membawa Anda pada puncak pencapaian karier dan reputasi yang disegani.",
    2: "Garis Hidup 3: Harmoni, diplomasi, dan kepekaan adalah pilar utama bagi Anda yang berada di bawah naungan angka 2. Anda memiliki kemampuan alami untuk melihat dua sisi dari setiap koin, menjadikan Anda mediator yang luar biasa dalam konflik apa pun. Kekuatan Anda bukan terletak pada dominasi, melainkan pada kerja sama dan kemitraan. Anda sangat peka terhadap perasaan orang lain dan seringkali bertindak sebagai penopang emosional bagi orang-orang di sekitar Anda. Dalam dunia yang serba cepat dan keras, Anda adalah oasis ketenangan. Tantangan Anda adalah belajar untuk berkata 'tidak' dan menjaga batas agar energi Anda tidak terkuras habis oleh kebutuhan orang lain. Anda akan menemukan kepuasan tertinggi dalam hubungan yang stabil dan lingkungan kerja yang mendukung kolaborasi daripada kompetisi. Keseimbangan antara memberi dan menerima adalah pelajaran terbesar dalam perjalanan hidup Anda.",
    3: "Garis Hidup 4: Bagi mereka yang jumlah angka hari lahirnya 3, ekspresi, sosialisasi, dan kreativitas adalah pelajaran utama yang harus ditempuh dalam hidupnya. Anda adalah entertainer alami yang memiliki bakat kreatif istimewa, baik dalam bidang verbal, tulisan, akting, maupun seni visual lainnya. Karakter Anda hangat, bersahabat, dan sangat terbuka, membuat Anda mudah diterima di setiap lingkaran sosial. Anda memiliki kemampuan untuk melihat sisi terang dari setiap situasi dan menularkan optimisme tersebut kepada orang lain. Namun, sisi negatifnya, Anda mungkin sering kehilangan fokus karena minat yang terlalu beragam dan cenderung menghindari tanggung jawab yang terasa membosankan atau terlalu serius. Anda tidak terlalu pandai menangani perihal keuangan karena seringkali hidup untuk saat ini tanpa terlalu khawatir akan hari esok. Jika Anda mampu memfokuskan energi dan talenta pada minat yang tepat, kemampuan Anda dalam seni dan komunikasi akan melesat melampaui rata-rata.",
    4: "Garis Hidup 5: Anda adalah simbol dari stabilitas, ketertiban, dan kerja keras yang tak tergoyahkan. Bagi Anda, hidup adalah tentang membangun fondasi yang kokoh untuk masa depan. Anda sangat menghargai struktur, aturan, dan kejujuran dalam setiap tindakan. Anda adalah tipe orang yang akan menyelesaikan apa yang telah dimulai, tidak peduli seberapa sulit tantangannya. Keandalan Anda membuat Anda menjadi tumpuan bagi keluarga dan organisasi. Namun, kecenderungan Anda untuk terlalu kaku dan sulit menerima perubahan mendadak bisa menjadi penghambat. Anda seringkali terlalu serius dalam memandang hidup sehingga lupa untuk menikmati momen-momen santai. Pelajaran hidup Anda adalah belajar untuk lebih fleksibel dan memahami bahwa tidak semua hal dalam hidup ini bisa dikendalikan. Kesuksesan finansial dan rasa aman akan datang kepada Anda melalui ketekunan yang konsisten dan manajemen yang rapi.",
    5: "Garis Hidup 6: Kebebasan adalah harga mati bagi Anda yang memiliki garis hidup 5. Anda adalah petualang sejati yang selalu haus akan pengalaman baru dan perubahan yang dinamis. Hidup Anda penuh dengan variasi, perjalanan, dan pertemuan dengan berbagai macam orang yang menarik. Anda memiliki kemampuan adaptasi yang luar biasa dan pikiran yang sangat progresif. Anda tidak suka dikekang oleh aturan yang tidak masuk akal atau rutinitas yang monoton. Namun, sifat impulsif Anda terkadang bisa membawa Anda pada risiko yang tidak perlu atau ketidakkonsistenan dalam karier dan hubungan. Tantangan terbesar Anda adalah menemukan cara untuk tetap bebas tanpa menjadi ceroboh. Ketika Anda mampu mendisiplinkan diri tanpa mematikan semangat petualang Anda, Anda akan menjadi sosok yang sangat berpengaruh dan penuh pengetahuan karena pengalaman hidup Anda yang sangat kaya.",
    6: "Garis Hidup 7: Fokus utama dalam hidup Anda adalah pengabdian, cinta, dan tanggung jawab terhadap sesama, terutama keluarga. Anda adalah 'pengasuh' alami yang merasa paling bahagia saat bisa membantu dan melindungi orang lain. Anda memiliki standar moral yang tinggi dan keinginan kuat untuk menciptakan keindahan serta keharmonisan di lingkungan tempat tinggal Anda. Orang-orang secara alami datang kepada Anda untuk mencari saran dan perlindungan karena aura kebapakan atau keibuan yang Anda pancarkan. Namun, kecenderungan untuk terlalu ikut campur atau memaksakan idealisme Anda kepada orang lain bisa memicu konflik. Anda harus belajar bahwa setiap orang memiliki jalan hidupnya sendiri. Kepuasan sejati bagi Anda akan ditemukan melalui pelayanan yang tulus dan kemampuan untuk menyeimbangkan kasih sayang terhadap orang lain dengan perawatan terhadap diri sendiri.",
    7: "Garis Hidup 8: Anda adalah seorang pencari kebenaran, pemikir mendalam, dan analis yang tajam. Hidup Anda seringkali diwarnai oleh perjalanan batin untuk memahami rahasia alam semesta atau kedalaman ilmu pengetahuan. Anda lebih menghargai kualitas daripada kuantitas dalam hal pertemanan dan lebih suka menyendiri untuk mengisi ulang energi Anda. Anda memiliki intuisi yang luar biasa dan seringkali mampu melihat apa yang tersembunyi di balik permukaan. Sifat Anda yang skeptis terhadap hal-hal yang dangkal membuat Anda menjadi penilai karakter yang hebat. Tantangan bagi Anda adalah menghindari sikap menutup diri atau menjadi terlalu dingin dan sinis terhadap dunia luar. Ketika Anda berhasil menyatukan kecerdasan intelektual dengan kebijaksanaan spiritual, Anda akan menjadi guru atau ahli yang sangat dihormati di bidang Anda.",
    8: "Garis Hidup 9: Kekuasaan, otoritas, dan pencapaian materi adalah ranah di mana Anda bersinar. Anda memiliki pemahaman alami tentang bagaimana dunia bekerja, terutama dalam hal bisnis dan manajemen besar. Anda adalah sosok yang ambisius, memiliki visi yang luas, dan energi yang seolah tidak pernah habis untuk mengejar tujuan Anda. Anda lahir untuk memimpin dan mengelola sumber daya secara efisien. Namun, risiko terbesar bagi Anda adalah menjadi terlalu terobsesi dengan status atau harta hingga mengabaikan aspek emosional dan spiritual dalam hidup. Pelajaran hidup Anda adalah memahami bahwa kekuatan yang sebenarnya digunakan untuk memberdayakan orang lain, bukan sekadar untuk dominasi pribadi. Jika Anda mampu menjaga integritas dan keseimbangan, Anda akan mencapai kemakmuran yang berdampak besar bagi kesejahteraan orang banyak.",
    9: "Garis Hidup 10: Anda adalah jiwa tua yang penuh dengan kearifan dan kasih sayang universal. Sebagai angka terakhir dalam siklus utama, Anda mewakili penyelesaian dan kemanusiaan yang tanpa batas. Anda memiliki pandangan yang sangat luas dan seringkali merasa terpanggil untuk melakukan perubahan sosial atau membantu mereka yang terpinggirkan. Anda adalah individu yang sangat toleran dan mampu merangkul semua perbedaan. Namun, sifat idealis Anda seringkali membuat Anda merasa kecewa ketika realitas dunia tidak sesuai dengan harapan Anda. Anda mungkin sering mengalami fase melepaskan hal-hal lama untuk memulai sesuatu yang baru secara spiritual. Tantangan Anda adalah belajar melepaskan masa lalu tanpa rasa sakit hati. Keberhasilan bagi Anda bukan diukur dari apa yang Anda kumpulkan, melainkan dari seberapa banyak hidup orang lain yang telah Anda ubah menjadi lebih baik."
};

function hitungGarisHidup() {
    let t = document.getElementById('tgl').value;
    let b = document.getElementById('bln').value;
    let th = document.getElementById('thn').value;

    // gabungkan semua angka
    let gabung = t.toString() + b.toString() + th.toString();
    
    // hasil 1: Penjumlahan digit pertama
    let h1 = 0;
    for(let char of gabung) { h1 += parseInt(char); }

    // Hasil 2 & Akhir: Reduksi menjadi satu digit
    let h2 = h1;
    while (h2 >= 10) {
        let temp = 0;
        let s = h2.toString();
        for(let char of s) { temp += parseInt(char); }
        h2 = temp;
    }
    document.getElementById('outTgl').value = t;
    document.getElementById('outBln').value = b;
    document.getElementById('outThn').value = th;
    document.getElementById('outH1').value = h1;
    document.getElementById('outAkhir').value = h2;

    // tampilkan deskripsi Ramalan
    const area = document.getElementById('ramalanArea');
    const judul = document.getElementById('ramalanJudul');
    const teks = document.getElementById('ramalanTeks');

    area.style.display = "block";
    judul.innerText = "Tanggal Lahir Anda Berada Pada Garis Hidup " + h2;
    teks.innerText = ramalanData[h2];
}

function resetForm() {
    location.reload();
}