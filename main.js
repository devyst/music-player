let musicPlayer = document.querySelector(".music-player-container");
let togglePlayer = document.querySelector(".toggle-player");

let trackInfo = document.querySelector(".track-info");
let trackName = document.querySelector(".track-name");
let trackArtist = document.querySelector(".track-artist");
let trackNav = document.querySelector(".track-nav");

let playPauseBtn = document.querySelector(".playpause-track");
let nextBtn = document.querySelector(".next-track");
let prevBtn = document.querySelector(".prev-track");

let trackIndex = 0;
let isPlaying = false;
let isHidden = true;

let currentTrack = document.createElement("audio");
let soundBars = document.querySelector(".sound-bars");

togglePlayer.addEventListener("click", function () {
    isHidden = !isHidden;
    if (isHidden) {
        musicPlayer.classList.remove("hide");
        togglePlayer.innerHTML = '<ion-icon name="remove-outline"></ion-icon>';
        trackInfo.style.transitionDelay = "0.4s";
        trackNav.style.transitionDelay = "0.4s";
    } else {
        musicPlayer.classList.add("hide");
        togglePlayer.innerHTML = '<ion-icon name="add-outline"></ion-icon>';
        trackInfo.style.transitionDelay = "0s";
        trackNav.style.transitionDelay = "0s";
    }
});

let soundBarsLottie = bodymovin.loadAnimation({
    container: soundBars,
    renderer: "svg",
    loop: true,
    autoPlay: false,
    path: "https://assets5.lottiefiles.com/packages/lf20_jJJl6i.json",
});

let trackList = [{
    name: "Nemen",
    artist: "Dj Topeng",
    path: "songs/Dj Nemen.mp3",
    },
    {
    name: "Karna Su Sayang",
    artist: "Dj Opus",
    path: "songs/Dj Karna Su Sayang.mp3",
    },
    {
    name: "Full Senyum Sayang",
    artist: "Dj Didit",
    path: "songs/Dj Full Senyum Sayang.mp3",
    },
];

function loadTrack(trackIndex) {
    currentTrack.src = trackList[trackIndex].path;
    currentTrack.load();
    trackName.textContent = trackList[trackIndex].name;
    trackArtist.textContent = trackList[trackIndex].artist;
    currentTrack.addEventListener("ended", nextTrack);
}

loadTrack(trackIndex);


function playPauseTrack() {
    if (!isPlaying) playTrack();
    else pauseTrack();
}
function playTrack() {
    currentTrack.play();
    isPlaying = true;
    playPauseBtn.innerHTML = '<ion-icon name="pause-sharp"></ion-icon>';
    soundBarsLottie.play();
}
function pauseTrack() {
    currentTrack.pause();
    isPlaying = false;
    playPauseBtn.innerHTML = '<ion-icon name="play-sharp"></ion-icon>';
    soundBarsLottie.stop();
}
function nextTrack() {
    if (trackIndex < trackList.length - 1) trackIndex += 1;
    else trackIndex = 0;
    loadTrack(trackIndex);
    playTrack();
}
function prevTrack() {
    if (trackIndex > 0) trackIndex -= 1;
    else trackIndex = trackList.length - 1;
    loadTrack(trackIndex);
    playTrack();
}

playPauseBtn.addEventListener("click", playPauseTrack);
nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);



// Dapatkan elemen-elemen yang diperlukan
const imageUpload = document.getElementById('imageUpload');
const applyImageBtn = document.getElementById('applyImage');
const backgroundContainer = document.querySelector('.background-container');

// Tambahkan event listener untuk tombol "Apply Image"
applyImageBtn.addEventListener('click', () => {
    // Ambil file gambar yang diunggah oleh pengguna
    const uploadedImage = imageUpload.files[0];

    // Buat URL objek untuk gambar yang diunggah
    const imageUrl = URL.createObjectURL(uploadedImage);

    // Terapkan gambar sebagai latar belakang pada elemen
    backgroundContainer.style.backgroundImage = `url(${imageUrl})`;

    // Setel ulang input file agar bisa mengunggah gambar lainnya
    imageUpload.value = '';
});
// Aturan CSS untuk .background-container
backgroundContainer.style.backgroundSize = 'cover'; // Mengisi seluruh elemen dengan gambar
backgroundContainer.style.backgroundRepeat = 'no-repeat'; // Tidak mengulang gambar
backgroundContainer.style.backgroundPosition = 'center'; // Posisi gambar di tengah elemen