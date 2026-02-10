// TYPE TEXT
let text = "A Special Message For You, Chloee 💖";
let i = 0;
function type() {
    if (i < text.length) {
        document.getElementById("typeText").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 70);
    }
}
type();

// Play music with cinematic fade-in when approval button is clicked
function startMusic() {
    let music = document.getElementById("bgMusic");
    if (!music) return;
    if (!music.paused) return; // already playing
    music.volume = 0;
    music.play().catch(() => {});

    let fade = setInterval(() => {
        music.volume = Math.min(music.volume + 0.02, 1);
        if (music.volume >= 1) {
            clearInterval(fade);
        }
    }, 200);
}

document.getElementById("yes1").addEventListener("click", startMusic);
document.getElementById("yes2").addEventListener("click", startMusic);


// Falling Petals Generator
function createPetal() {
    let petal = document.createElement("span");
    petal.innerHTML = "🌸";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (Math.random() * 5 + 4) + "s";
    petal.style.fontSize = (Math.random() * 12 + 16) + "px";

    document.getElementById("hearts").appendChild(petal);

    setTimeout(() => petal.remove(), 9000);
}

setInterval(createPetal, window.innerWidth < 600 ? 700 : 350);



// PAGE SWITCH
function showPage(n) {
    document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
    document.getElementById("page"+n).classList.add("active");
}

// MODAL
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const modalBtn = document.getElementById("modalBtn");
const modalGif = document.getElementById("modalGif");

// NO BUTTON
document.getElementById("no1").onclick = () => {
    modal.style.display = "block";
    modalGif.src = "https://media.giphy.com/media/3o6wrvdHFbwBrUFenu/giphy.gif";
    modalText.innerHTML = "My heart said… please try again 😢";
    modalBtn.innerHTML = "Okay 💔";
    modalBtn.onclick = () => modal.style.display = "none";
};

// YES BUTTON (HAPPY GIF)
document.getElementById("yes1").onclick = () => {
    modal.style.display = "block";
    modalGif.src = "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"; // HAPPY GIF
    modalText.innerHTML = "You opened my heart, cloyybabeee! 💖";
    modalBtn.innerHTML = "Continue 💕";
    modalBtn.onclick = () => {
        modal.style.display = "none";
        document.getElementById("envelope").classList.add("open");
        document.getElementById("bgMusic").play();
        showPage(2);
    };
};

// MOVING NO
const no2 = document.getElementById("no2");
no2.onmouseover = () => {
    no2.style.position = "absolute";
    no2.style.left = Math.random()*70 + "%";
    no2.style.top = Math.random()*70 + "%";
    document.getElementById("pleaseText").innerHTML = "Pleaseee, cloyyy? 😢";
};

// Mobile support for moving NO button
no2.addEventListener("touchstart", () => {
    no2.style.position = "absolute";
    no2.style.left = Math.random() * 60 + "%";
    no2.style.top = Math.random() * 60 + "%";
    document.getElementById("pleaseText").innerHTML = "Pleaseee, cloyyy? 🥺";
});

// YES PAGE 2 → FLOWER → LETTER
document.getElementById("yes2").onclick = () => {
    showPage(3);

    setTimeout(() => {
        document.getElementById("loveLetter").style.display = "block";
        typeLoveLetter();
    }, 7000); // wait flower bloom
};

// LETTER TEXT
const loveText = `
Happy Valentine’s Day, my cloyybabeee.

"There’s a quiet beauty in you—one that doesn’t 
ask for attention, yet naturally draws it.
You bring warmth to my days, calm to uncertain 
moments, and a smile I sincerely appreciate.

This is written not just for Valentine’s Day, 
but as a thoughtful expression of care and respect.

I truly value you."
`;

let letterIndex = 0;
function typeLoveLetter() {
    if (letterIndex < loveText.length) {
        document.getElementById("typedLetter").innerHTML += loveText.charAt(letterIndex);
        letterIndex++;
        setTimeout(typeLoveLetter, 35);
    }
}

// CLOSE LETTER
document.getElementById("closeLetter").onclick = () => {
    document.getElementById("loveLetter").style.display = "none";
};
