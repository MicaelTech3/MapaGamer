const attractionsData = {
    G1: {
        map: `
            <div class="sections">
                <div class="hologate-section">
                    <h2>Jogos Hologate</h2>
                    <div class="circles">
                        <div class="circle blue">2</div>
                        <div class="circle blue">4</div>
                        <div class="circle blue">1</div>
                        <div class="circle blue">3</div>
                    </div>
                    <button class="toggle-list-btn blue" onclick="toggleGameList('hologate-list')">JOGOS HOLOGATE</button>
                    <div class="game-list left" id="hologate-list">
                     <h3>Lista Jogos</h3>
                        <div class="game-item" onclick="playGame('Pronto para missão?')">
                            <span class="play-icon">▶</span> ZUMBYTE
                        </div>
                        <div class="game-item" onclick="playGame('Pinguin')">
                            <span class="play-icon">▶</span> COLD CLASH
                        </div>
                        <div class="game-item" onclick="playGame('Simurai Arena')">
                            <span class="play-icon">▶</span> SIMU. ARENA
                        </div>
                        <div class="game-item" onclick="playGame('Guerra de Robos')">
                            <span class="play-icon">▶</span> SIMURAI
                        </div>
                    </div>
                </div>
                <div class="pistol-hype-section">
                    <h2>Pistol Hype</h2>
                    <div class="circles">
                        <div class="circle red">2</div>
                        <div class="circle red">4</div>
                        <div class="circle red">1</div>
                        <div class="circle red">3</div>
                    </div>
                    <button class="toggle-list-btn red" onclick="toggleGameList('pistol-list')">PISTOL WHIP</button>
                    <div class="game-list right" id="pistol-list">
                        <h3>Pistol Whip</h3>
                        <div class="game-item" onclick="playGame('Pistol Whip')">
                            <span class="play-icon">▶</span> PISTOL WHIP
                        </div>
                    </div>
                </div>
            </div>
            <div class="elevator">ELEVADOR</div>
            <div class="entrada">ENTRADA <span class="arrow">←</span></div>
            <div class="saida">SAÍDA <span class="arrow">→</span></div>
        `
    },
    Andar2: {
        title: "Atrações do Andar 2",
        attractions: ["Atração 1", "Atração 2"],
        video: "videos/andar2.mp4"
    },
    Andar3: {
        title: "Atrações do Andar 3",
        attractions: ["Atração 3", "Atração 4"],
        video: "videos/andar3.mp4"
    },
    Andar4: {
        title: "Atrações do Andar 4",
        attractions: ["Atração 5", "Atração 6"],
        video: "TV4 creed (FILA).mp4"
    }
};

// Map games to their respective video files in the G1 folder
const gameVideos = {
    "Pronto para missão?": "G1/HOLOGATE - ZOMBYTE.mp4",
    "Pinguin": "G1/HOLOGATE - COLD CLASH.mp4",
    "Simurai Arena": "G1/HOLOGATE - SIMURAI ARENA.mp4",
    "Guerra de Robos": "G1/HOLOGATE - SIMURAI.mp4",
    "Pistol Whip": "G1/Pistol Whip.mp4"
};

function showAttractions(floor) {
    const attractionsDiv = document.getElementById('attractions');
    const data = attractionsData[floor];

    if (data) {
        if (floor === 'G1') {
            attractionsDiv.innerHTML = `
                ${data.map || ''}
            `;
        } else {
            attractionsDiv.innerHTML = `
                <h2>${data.title}</h2>
                <ul>
                    ${data.attractions.map(attraction => `<li>${attraction}</li>`).join('')}
                </ul>
                <video autoplay loop muted>
                    <source src="${data.video}" type="video/mp4">
                    Seu navegador não suporta o elemento de vídeo.
                </video>
            `;
        }
        attractionsDiv.style.display = 'block';
    } else {
        attractionsDiv.style.display = 'none';
    }
}

function playGame(gameName) {
    const videoSrc = gameVideos[gameName];
    if (videoSrc) {
        const modal = document.getElementById('video-modal');
        const video = document.getElementById('game-video');
        const videoSource = document.getElementById('game-video-source');
        const videoTitle = document.getElementById('video-title');

        videoSource.src = videoSrc;
        video.load();
        videoTitle.textContent = gameName;
        modal.style.display = 'block';
    } else {
        console.log(`No video found for game: ${gameName}`);
    }
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('game-video');
    video.pause();
    modal.style.display = 'none';
}

function toggleGameList(listId) {
    const list = document.getElementById(listId);
    if (list.style.display === 'block') {
        list.style.display = 'none';
    } else {
        list.style.display = 'block';
    }
}