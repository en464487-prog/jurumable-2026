// ============================================================
// 🎮 주루마블 2026 - FINAL CONFIG
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyB6dcT58Ajai7c_a29kasVOLi48Fur7upY",
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
    characters: [
        { id: 'lion',   name: '라이언', emoji: '🦁' },
        { id: 'cat',    name: '네오',   emoji: '🐱' },
        { id: 'dog',    name: '프로도', emoji: '🐶' },
        { id: 'fox',    name: '여우',   emoji: '🦊' },
        { id: 'rabbit', name: '무지',   emoji: '🐰' },
        { id: 'frog',   name: '튜브',   emoji: '🐸' },
        { id: 'alien',  name: '외계인', emoji: '👽' },
        { id: 'robot',  name: '로봇',   emoji: '🤖' }
    ]
};