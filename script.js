function playMusic() {
    var audio = document.getElementById('valentineMusic');
    audio.play();
}

let currentIndex = 0;

function changeAppearance() {
    const hearts = ['❤️', '💖', '💘', '💕', '💓', '💗', '💞', '💝', '💟', '❣️'];
    const messages = [
        "Haiii sayangakuuu cintaku, Selamat Hari Valentine ya cintakuuu sayangkuuu cantikkuu maniskuuu🤍🤍🤍🤍🤍",
        "Aku mau sayang tau satu hal bahwa aku tuh sangat bersyukur bisa mengenal dan bisa bersama sayang, terimakasih yah telah menerima lebih kurangnya aku🥺",
        "Dan bersama sayang tuh aku banyak belajar banyak hal, aku belajar tentang kesabaran, kejujuran, kepercayaan, dan yang paling penting adalah tentang mengusahakan untuk sesorang yang sangat aku sayang🫶🫶",
        "Ini aku buat agar bisa sayang tahu bahwa hal hal romantis tidak selamanya bisa dilakukan secara langsung akan tetapi bisa juga dilakukan secara virtual seperti ini, mungkin tidak begitu spesial atau bermakna akan tetapiii...",
        "Sayang udah sangat berarti bagiku, ii lovee youu moree sayangkuu cintakuu cantikkuuu manisskuuuu bidadarikuuuu🫶🫶🫶🫶🫶🤍🤍🤍🤍🤍🥰",
        "Mungkin hanya sebuah kata kata sederhana yang bisa aku sampaikan melalui ini, akan tetapi aku juga pengen usahakan bahwa pasangan aku juga bisa mendapatkan ucapan ucapan yang romantis di hari hari yang spesial ini, seperti orang lain terhadap pasangannya. ",
        "Maaf ya sayang tidak bisa secara langsung namun ada saatnya ko, dan jika ketemu nanti aku bakalan peluk sayang se erat-eratnya pokoknya, tetap sama aku yah, tetap bareng aku🤍🥰🫶",
        "Pacar aku tetap semangat ya disana kerjanya lancar teruss dan jaga kesehatan terus ya sayangg, aku disini bakalan terus menjaga hati yang udah sayang berikan samaku, mendoakan yang terbaik yang selalu mengampiri pacar akuu aminnnn...",
        "Ikan hiuu makann ketupat, ii lovee you so muchh, maaf ya gak nyambung yang nyambungkan cinta dan sayangaku ke sayang hihiii",
        "Sekali lagi aku ucapkan SELAMAT HARI VALENTINE SAYANGKUUU CINTAKUU CANTIKKUU MANISKUUU BIDADARIKUUU, I LOVE YOU MOREE🥰🥰🤍🤍🫶🫶"
    ];
    document.getElementById('heart').innerHTML = hearts[currentIndex];
    document.getElementById('message').innerHTML = messages[currentIndex];
    currentIndex = (currentIndex + 1) % hearts.length;
}