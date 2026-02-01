// ============================================================
// 🎮 주루마블 2026 - 통합 설정 파일 (Game Configuration)
// ============================================================

const GAME_CONFIG = {
    // 1. 캐릭터 라인업 (아이폰/갤럭시 공용 이모티콘)
    characters: [
        { id: 'lion',   name: '라이언', emoji: '🦁' },
        { id: 'cat',    name: '네오',   emoji: '🐱' },
        { id: 'dog',    name: '프로도', emoji: '🐶' },
        { id: 'fox',    name: '여우',   emoji: '🦊' },
        { id: 'rabbit', name: '무지',   emoji: '🐰' },
        { id: 'frog',   name: '튜브',   emoji: '🐸' }
    ],

    // 2. 게임 규칙 설정
    bomb: {
        startBox: 12,       // 폭탄이 생성되는 칸 번호
        durationMultiplier: 3 // 인원수 x 3턴 뒤에 폭발
    },
    
    masterKey: {
        duration: 1 // 마스터키 권한 유지 턴 수
    },

    // 3. 시스템 메시지 (화면 출력용)
    msg: {
        spy: "당신은 스파이입니다. 들키지 말고 미션을 수행하세요!",
        bomb: "💣 폭탄이 부착되었습니다! 앞사람을 추월해서 넘기세요!",
        master: "👑 마스터 키 획득! 이번 턴에 특수 권한을 사용하세요."
    }
};

// 모듈 내보내기 (이 줄은 지우지 마세요)
if (typeof window !== 'undefined') {
    window.GAME_CONFIG = GAME_CONFIG;
}