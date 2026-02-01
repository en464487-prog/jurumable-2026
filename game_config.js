// ============================================================
// 🎮 주루마블 2026 - BYMIN CUSTOM CONFIG
// ============================================================

const firebaseConfig = {
    apiKey: "AIzaSyB6dcT58Ajai7c_a29kasVOLi48Fur7upY", // 님의 키 유지
    authDomain: "jurumable-9fdde.firebaseapp.com",
    databaseURL: "https://jurumable-9fdde-default-rtdb.firebaseio.com",
    projectId: "jurumable-9fdde",
    storageBucket: "jurumable-9fdde.firebasestorage.app",
    messagingSenderId: "711364861956",
    appId: "1:711364861956:web:b3733e2539206e89c21551"
};

if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const GAME_CONFIG = {
    // 1. 캐릭터 (기존 유지)
    characters: [
        { id: 'lion', name: '라이언', emoji: '🦁' },
        { id: 'cat',  name: '네오',   emoji: '🐱' },
        { id: 'dog',  name: '프로도', emoji: '🐶' },
        { id: 'fox',  name: '여우',   emoji: '🦊' },
        { id: 'rabbit', name: '무지', emoji: '🐰' },
        { id: 'frog', name: '튜브',   emoji: '🐸' }
    ],

    // 2. 8x8 트랙 데이터 (총 28칸 순환)
    // type: normal(일반), gold(황금열쇠), random(랜덤게임), battle(결투), bomb(폭탄생성)
    map: [
        { no: 0,  type: 'start',  name: 'START' },
        { no: 1,  type: 'drink',  name: '소주 1잔' },
        { no: 2,  type: 'drink',  name: '다같이 원샷' },
        { no: 3,  type: 'battle', name: 'VS 결투' },
        { no: 4,  type: 'drink',  name: '훈민정음' },
        { no: 5,  type: 'random', name: '랜덤게임' },
        { no: 6,  type: 'drink',  name: '폭탄주 1잔' },
        { no: 7,  type: 'gold',   name: '황금열쇠' }, // 코너 1
        { no: 8,  type: 'drink',  name: '눈치게임' },
        { no: 9,  type: 'spy',    name: '스파이 미션' },
        { no: 10, type: 'drink',  name: '파트너 지정' },
        { no: 11, type: 'random', name: '랜덤게임' },
        { no: 12, type: 'bomb',   name: '💣 폭탄생성' }, // 폭탄 시작점
        { no: 13, type: 'drink',  name: '2잔 마시기' }, 
        { no: 14, type: 'battle', name: '1:1 대결' }, // 코너 2
        { no: 15, type: 'drink',  name: '연거푸 2잔' },
        { no: 16, type: 'gold',   name: '황금열쇠' },
        { no: 17, type: 'drink',  name: '전원 반샷' },
        { no: 18, type: 'random', name: '랜덤게임' },
        { no: 19, type: 'drink',  name: '옆사람 1잔' },
        { no: 20, type: 'drink',  name: '의리게임' }, 
        { no: 21, type: 'gold',   name: '황금열쇠' }, // 코너 3
        { no: 22, type: 'drink',  name: '소맥 1잔' },
        { no: 23, type: 'battle', name: 'VS 결투' },
        { no: 24, type: 'drink',  name: '369 게임' },
        { no: 25, type: 'random', name: '랜덤게임' },
        { no: 26, type: 'drink',  name: '후래자 3잔' },
        { no: 27, type: 'drink',  name: '막차 탑승' }
    ],

    // 3. 사운드 파일 경로 (index.html 폴더와 같은 곳에 두세요)
    sounds: {
        turn: 'turn_alert.mp3',   // 내 턴 알림
        sniper: 'sniper.mp3',     // 저격 당함
        chain: 'chain.mp3',       // 공동체 연결
        bomb: 'timer.mp3',        // 폭탄 경고
        master: 'master_bgm.mp3'  // 마스터키 획득
    }
};

if (typeof window !== 'undefined') {
    window.GAME_CONFIG = GAME_CONFIG;
}