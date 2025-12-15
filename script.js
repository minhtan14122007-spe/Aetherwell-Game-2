// --- RACE DATA (Includes image paths) ---
const races = [
    { name: "Viking Kingdom", id: "Viking", description: "The Viking Race, balanced in all stats.", image: "images/viking_kingdom.png.jpg" },
    { name: "Dragon Temple Knights", id: "Dragon", description: "The Dragon Knights, strong healing capabilities.", image: "images/dragon_knights.png.jpg" },
    { name: "Samurai Clan", id: "Samurai", description: "The Samurai Clan, excels in precise, critical attacks.", image: "images/samurai_clan.png.jpg" },
    { name: "Spartan Feast Legion", id: "Spartan", description: "The Spartan Legion, derives strength from attack buffs.", image: "images/spartan_legion.png.jpg" },
    { name: "Amazon Forest Tribe", id: "Amazon", description: "The Amazon Tribe, natural healing and immunity.", image: "images/amazon_tribe.png.jpg" },
    { name: "Pharaoh Dynasty", id: "Pharaoh", description: "The Pharaoh Dynasty, damage blocking and wide-area attacks.", image: "images/pharaoh_dynasty.png.jpg" },
    { name: "Elf Light Kingdom", id: "Elf", description: "The Elf Kingdom, knowledge-based power and time manipulation.", image: "images/elf_kingdom.png.jpg" },
];

// --- QUIZ BATTLE DATA ---
// TRONG script.js - XÓA VÀ THAY THẾ TOÀN BỘ MẢNG questions

const questions = [
    // =========================================================
    // 1. VIKING KINGDOM PASSIVE: PC VOCAB - SHAPE/STYLE (6 Qs)
    // =========================================================
    { team: "VIKING KINGDOM", question: " What do people usually get when they want their nails cleaned and shaped?", correctAnswer: "A manicure / pedicure", category: "PC_VOCAB_SHAPE", effect_correct: "Viking - Style Mastery HIT!" },
    { team: "VIKING KINGDOM", question: " Which service do you need if you want someone to wash, cut, and style your hair?", correctAnswer: "A haircut", category: "PC_VOCAB_SHAPE", effect_correct: "Viking - Style Mastery HIT!" },
    { team: "VIKING KINGDOM", question: " What personal care product helps keep your hair in place?", correctAnswer: "Hairspray / Hair gel", category: "PC_VOCAB_SHAPE", effect_correct: "Viking - Style Mastery HIT!" },
    { team: "VIKING KINGDOM", question: " What service do you get if you want your face cleaned and treated at a salon?", correctAnswer: "A facial", category: "PC_VOCAB_SHAPE", effect_correct: "Viking - Style Mastery HIT!" },
    { team: "VIKING KINGDOM", question: " What do you call the service where someone gives you a relaxing body treatment?", correctAnswer: "A massage", category: "PC_VOCAB_SHAPE", effect_correct: "Viking - Style Mastery HIT!" },
    { team: "VIKING KINGDOM", question: " Correct sentence: “No one wants a haircut today.” or “No one want a haircut today.”?", correctAnswer: "No one wants a haircut today.", category: "PC_VOCAB_SHAPE", effect_correct: "Viking - Style Mastery HIT!" }, // Dùng câu Grammar để đủ 6

    // =========================================================
    // 2. DRAGON KNIGHTS PASSIVE: PC VOCAB - CLEANING/CARE (6 Qs)
    // =========================================================
    { team: "DRAGON TEMPLE KNIGHTS", question: " What personal care product do you use to wash your hair?", correctAnswer: "Shampoo", category: "PC_VOCAB_CLEAN", effect_correct: "Dragon - Clean Care HIT!" },
    { team: "DRAGON TEMPLE KNIGHTS", question: " What product helps prevent body odor?", correctAnswer: "Deodorant", category: "PC_VOCAB_CLEAN", effect_correct: "Dragon - Clean Care HIT!" },
    { team: "DRAGON TEMPLE KNIGHTS", question: " What do people use to keep their breath fresh?", correctAnswer: "Mouthwash", category: "PC_VOCAB_CLEAN", effect_correct: "Dragon - Clean Care HIT!" },
    { team: "DRAGON TEMPLE KNIGHTS", question: " What product do you use to keep your skin from becoming dry?", correctAnswer: "Lotion / Moisturizer", category: "PC_VOCAB_CLEAN", effect_correct: "Dragon - Clean Care HIT!" },
    { team: "DRAGON TEMPLE KNIGHTS", question: " What item do you use to remove food stuck between your teeth?", correctAnswer: "Dental floss", category: "PC_VOCAB_CLEAN", effect_correct: "Dragon - Clean Care HIT!" },
    { team: "DRAGON TEMPLE KNIGHTS", question: " Fill in the blank: “I need _______ hair gel. Do you have any?”", correctAnswer: "some", category: "PC_VOCAB_CLEAN", effect_correct: "Dragon - Clean Care HIT!" }, // Dùng câu Grammar để đủ 6

    // =========================================================
    // 3. SAMURAI CLAN PASSIVE: PC GRAMMAR - MUCH/MANY (6 Qs)
    // =========================================================
    { team: "SAMURAI CLAN", question: " Fill in the blank: “I don’t have _______ shampoo.”", correctAnswer: "much", category: "PC_GRAMMAR_MUCH", effect_correct: "Samurai - Much/Many Focus HIT!" },
    { team: "SAMURAI CLAN", question: " Fill in the blank: “There aren’t _______ towels left.”", correctAnswer: "many", category: "PC_GRAMMAR_MUCH", effect_correct: "Samurai - Much/Many Focus HIT!" },
    { team: "SAMURAI CLAN", question: " Fill in the blank: “Do you need _______ help?”", correctAnswer: "any", category: "PC_GRAMMAR_MUCH", effect_correct: "Samurai - Much/Many Focus HIT!" },
    { team: "SAMURAI CLAN", question: " Which sentence is correct: a. “There is a lot of lotion.” or b. “There are a lot of lotion.”?", correctAnswer: "a", category: "PC_GRAMMAR_MUCH", effect_correct: "Samurai - Much/Many Focus HIT!" },
    { team: "SAMURAI CLAN", question: " Fill in the blank: “He didn’t use to drink coffee, _______ he?”", correctAnswer: "did", category: "PC_GRAMMAR_MUCH", effect_correct: "Samurai - Much/Many Focus HIT!" },
    { team: "SAMURAI CLAN", question: " Fill in the blank: “Why _______ you eat healthy food?”", correctAnswer: "don’t", category: "PC_GRAMMAR_MUCH", effect_correct: "Samurai - Much/Many Focus HIT!" },

    // =========================================================
    // 4. SPARTAN LEGION PASSIVE: PC GRAMMAR - SOMEONE (6 Qs)
    // =========================================================
    { team: "SPARTAN FEAST LEGION", question: " Fill in the blank: “I saw _______ at the salon.”", correctAnswer: "someone", category: "PC_GRAMMAR_SOMEONE", effect_correct: "Spartan - Someone/No one HIT!" },
    { team: "SPARTAN FEAST LEGION", question: " Fill in the blank: “There’s _______ wrong with my haircut.”", correctAnswer: "something", category: "PC_GRAMMAR_SOMEONE", effect_correct: "Spartan - Someone/No one HIT!" },
    { team: "SPARTAN FEAST LEGION", question: " Fill in the blank: “I didn’t see _______ in the store.”", correctAnswer: "anyone", category: "PC_GRAMMAR_SOMEONE", effect_correct: "Spartan - Someone/No one HIT!" },
    { team: "SPARTAN FEAST LEGION", question: " Fill in the blank: “Is _______ going to the spa today?”", correctAnswer: "anyone", category: "PC_GRAMMAR_SOMEONE", effect_correct: "Spartan - Someone/No one HIT!" },
    { team: "SPARTAN FEAST LEGION", question: " Correct negative yes/no question: “Don’t you like chocolate?” or “You don’t like chocolate?”", correctAnswer: "Don’t you like chocolate?", category: "PC_GRAMMAR_SOMEONE", effect_correct: "Spartan - Someone/No one HIT!" },
    { team: "SPARTAN FEAST LEGION", question: " Correct sentence: “Didn’t she use to be vegetarian?” or “Didn’t she used to be vegetarian?”", correctAnswer: "Didn’t she use to be vegetarian?", category: "PC_GRAMMAR_SOMEONE", effect_correct: "Spartan - Someone/No one HIT!" },

    // =========================================================
    // 5. AMAZON TRIBE PASSIVE: EW VOCAB - TYPE/KIND (6 Qs)
    // =========================================================
    { team: "AMAZON FOREST TRIBE", question: " What word describes food that is high in sugar and fat and not healthy?", correctAnswer: "Junk food / Unhealthy food", category: "EW_VOCAB_TYPE", effect_correct: "Amazon - Food Type HIT!" },
    { team: "AMAZON FOREST TRIBE", question: " What do you call food that is cooked using a lot of oil?", correctAnswer: "Fried food", category: "EW_VOCAB_TYPE", effect_correct: "Amazon - Food Type HIT!" },
    { team: "AMAZON FOREST TRIBE", question: " Which word describes food containing no animal products?", correctAnswer: "Vegan", category: "EW_VOCAB_TYPE", effect_correct: "Amazon - Food Type HIT!" },
    { team: "AMAZON FOREST TRIBE", question: " What do you call easy but unhealthy food like pizza or hamburgers?", correctAnswer: "Fast food", category: "EW_VOCAB_TYPE", effect_correct: "Amazon - Food Type HIT!" },
    { team: "AMAZON FOREST TRIBE", question: " What is the term for a person who doesn’t eat meat?", correctAnswer: "Vegetarian", category: "EW_VOCAB_TYPE", effect_correct: "Amazon - Food Type HIT!" },
    { team: "AMAZON FOREST TRIBE", question: " Correct sentence: “I _______ eat vegetables, but now I do.”", correctAnswer: "didn’t use to", category: "EW_VOCAB_TYPE", effect_correct: "Amazon - Food Type HIT!" }, // Dùng câu Grammar để đủ 6

    // =========================================================
    // 6. PHARAOH DYNASTY PASSIVE: EW VOCAB - QUALITY/DESC (5 Qs)
    // =========================================================
    { team: "PHARAOH DYNASTY", question: " What is the term for food that is fresh and not processed?", correctAnswer: "Organic / Natural / Fresh", category: "EW_VOCAB_QUALITY", effect_correct: "Pharaoh - Food Quality HIT!" },
    { team: "PHARAOH DYNASTY", question: " What word describes food with a lot of vitamins and minerals?", correctAnswer: "Nutritious", category: "EW_VOCAB_QUALITY", effect_correct: "Pharaoh - Food Quality HIT!" },
    { team: "PHARAOH DYNASTY", question: " What word describes the way food tastes (sweet, salty, spicy)?", correctAnswer: "Flavor / Taste", category: "EW_VOCAB_QUALITY", effect_correct: "Pharaoh - Food Quality HIT!" },
    { team: "PHARAOH DYNASTY", question: " What do you call food grown without chemicals?", correctAnswer: "Organic food", category: "EW_VOCAB_QUALITY", effect_correct: "Pharaoh - Food Quality HIT!" },
    { team: "PHARAOH DYNASTY", question: " What adjective describes food that is low in fat and good for your body?", correctAnswer: "Healthy / Low-fat", category: "EW_VOCAB_QUALITY", effect_correct: "Pharaoh - Food Quality HIT!" },

    // =========================================================
    // 7. ELF KINGDOM PASSIVE: EW GRAMMAR - USED TO (5 Qs)
    // =========================================================
    { team: "ELF LIGHT KINGDOM", question: " Fill in the blank: “She _______ exercise every day, but now she does.”", correctAnswer: "used to", category: "EW_GRAMMAR_USED_TO", effect_correct: "Elf - Used To Mastery HIT!" },
    { team: "ELF LIGHT KINGDOM", question: " Correct question: “Did you use to like spicy food?” or “Do you use to like spicy food?”", correctAnswer: "Did you use to like spicy food?", category: "EW_GRAMMAR_USED_TO", effect_correct: "Elf - Used To Mastery HIT!" },
    { team: "ELF LIGHT KINGDOM", question: " Which sentence is correct: a. “Don’t you eat breakfast?” or b. “Do you not eat breakfast?”", correctAnswer: "a", category: "EW_GRAMMAR_USED_TO", effect_correct: "Elf - Used To Mastery HIT!" },
    { team: "ELF LIGHT KINGDOM", question: " Fill in the blank: “_______ you use to eat fast food?”", correctAnswer: "Did", category: "EW_GRAMMAR_USED_TO", effect_correct: "Elf - Used To Mastery HIT!" },
    { team: "ELF LIGHT KINGDOM", question: " Fill in the blank: “I used to eat junk food, but now I _______.”", correctAnswer: "don’t", category: "EW_GRAMMAR_USED_TO", effect_correct: "Elf - Used To Mastery HIT!" },
];


// --- DOM ELEMENTS & GAME STATE ---
const raceSelectionScreen = document.getElementById("race-selection");
const quizScreen = document.getElementById("quiz-screen");
const gameOverScreen = document.getElementById("game-over-screen");
const raceGrid = document.getElementById("race-grid");
const raceInfoDisplay = document.getElementById("race-info");
const battleArena = document.getElementById("battle-arena");
const turnDisplay = document.getElementById("turn-display");
const roundDisplay = document.getElementById("round-display");
const questionElement = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const effectResultBox = document.getElementById("effect-result");
const winnerDisplay = document.getElementById("winner-display");
const restartButton = document.getElementById("restart-btn");

// Global State
let selectedRace = null;
let currentQuestionIndex = 0;
let currentQuestionSet = [...questions]; 
let players = []; 
let currentPlayerIndex = 0;
let round = 1;
// TRONG script.js - (Ví dụ: đặt gần MAX_HP hoặc const races = [...])

const MAX_HP = 50; // Giữ nguyên HP tối đa của bạn (nếu có)
// const races = [...];  // Mảng races của bạn (giữ nguyên)
// const questions = [...]; // Mảng questions của bạn (giữ nguyên)
// let players = []; // Mảng người chơi hiện tại (giữ nguyên)


// =================================================================
// --- BẮT ĐẦU: CÁC BIẾN MỚI QUẢN LÝ QUÁ TRÌNH CHỌN TỘC (7 NGƯỜI CHƠI) ---
const totalPlayers = 7;    // Tổng số người chơi
let chosenRaces = [];      // Mảng lưu ID của các tộc đã được chọn (VD: ['Viking', 'Samurai', ...])
let currentPlayerNumber = 1; // Số thứ tự người chơi đang chọn (từ 1 đến 7)
// --- KẾT THÚC: CÁC BIẾN MỚI ---
// =================================================================


// function getElementById(id) { ... } // Các hàm tiện ích (giữ nguyên)
// function createPlayers(chosenRaceIds) { ... } // Hàm tạo người chơi (sẽ sửa ở bước 2)
// ...

let isAnswerSelected = false;
let isRaceSelected = false;

// --- INITIALIZATION & SETUP ---

function createPlayers(userRaceId) {
    // Initializes the 7 players with 20 HP each
    // TRONG script.js - THAY THẾ KHỐI TẠO PLAYERS (DÒNG 118-126)

    players = races.map(race => ({
        ...race, // <--- ĐIỂM QUAN TRỌNG: Sao chép TẤT CẢ thuộc tính (id, name, description, image, character, skill)
        hp: MAX_HP,
        maxHp: MAX_HP,
        score: 0,
        isEliminated: false,
        isUser: race.id === userRaceId 
    }));
    // Shuffles players array to randomize turn order
    shuffleArray(players);
    currentPlayerIndex = 0;
}

function initializeGame() {
    currentQuestionIndex = 0;
    currentPlayerIndex = 0;
    round = 1;
    isRaceSelected = false;
    
    // Reset screens
    raceSelectionScreen.classList.remove('hidden');
    raceSelectionScreen.classList.add('active');
    quizScreen.classList.remove('active');
    quizScreen.classList.add('hidden');
    gameOverScreen.classList.remove('active');
    gameOverScreen.classList.add('hidden');
    
    // Restart logic
    initializeRaceSelection();
    restartButton.removeEventListener('click', initializeGame);
}

// --- RACE SELECTION LOGIC (Includes Image Handling) ---

function initializeRaceSelection() {
    raceGrid.innerHTML = '';
    races.forEach(race => {
        const button = document.createElement("button");
        button.classList.add("race-btn");
        button.dataset.raceId = race.id;
        
        // Image element
        const img = document.createElement("img");
        img.src = race.image; // Uses the path from the race data
        img.alt = race.name;
        img.classList.add("race-btn-image");
        
        // Name element
        const nameSpan = document.createElement("span");
        nameSpan.classList.add("race-btn-name");
        nameSpan.textContent = race.name;

        button.appendChild(img);
        button.appendChild(nameSpan);

        button.addEventListener("click", () => handleRaceClick(race, button));
        raceGrid.appendChild(button);
    });
}

function handleRaceClick(race, clickedButton) {
    if (isRaceSelected && selectedRace === race) {
        // Start the game with 7 players
        createPlayers(selectedRace.id); 
        startTheGame();
        return;
    }
    
    Array.from(raceGrid.children).forEach(btn => btn.classList.remove('selected'));
    clickedButton.classList.add('selected');
    selectedRace = race;
    isRaceSelected = true;
    
    raceInfoDisplay.innerHTML = `You have selected ${selectedRace.name}. 
                                 <br> **[Click again to start the battle!]**`;
}

function startTheGame() {
    if (!selectedRace || players.length === 0) {
        alert("Please select a race to begin!");
        return;
    }

    // Switch to quiz battle screen
    raceSelectionScreen.classList.remove('active');
    raceSelectionScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    quizScreen.classList.add('active');
    
    startBattle(); 
}


// --- BATTLE ARENA & HP BAR LOGIC ---

function drawHpBars() {
    battleArena.innerHTML = '';
    players.forEach((player, index) => {
        const container = document.createElement('div');
        container.classList.add('player-hp-container');
        container.dataset.playerId = player.id;

        if (index === currentPlayerIndex) {
            container.classList.add('current-turn');
        } else {
             container.classList.remove('current-turn');
        }
        if (player.hp <= 0) {
            player.isEliminated = true;
        }
        if (player.isEliminated) {
            container.classList.add('eliminated');
        }

        const hpPercentage = (player.hp / player.maxHp) * 100;
    


        container.innerHTML = `
            <div class="player-name-hp">
                ${player.name.split(' ')[0]} <br> (${Math.max(0, player.hp)} HP) | **${player.score} Pts**
            </div>
            <div class="hp-bar-outer">
                <div class="hp-bar-inner" style="width: ${hpPercentage}%;"></div>
            </div>
        `;
        battleArena.appendChild(container);
    });
}

// --- QUIZ AND TURN LOGIC ---

function startBattle() {
    shuffleArray(currentQuestionSet); 
    nextButton.innerHTML = "CONTINUE";
    nextButton.disabled = true;
    
    drawHpBars();
    nextTurn(true); // Start the first turn immediately
}

function nextTurn(isFirstTurn = false) {
    // 1. Check win condition
    const activePlayers = players.filter(p => !p.isEliminated);
    if (activePlayers.length <= 1) {
        endQuiz(activePlayers.length === 1 ? activePlayers[0] : null);
        return;
    }

    // 2. Advance to the next player
    if (!isFirstTurn) {
        do {
            currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        } while (players[currentPlayerIndex].isEliminated);
    }
    
    const currentPlayer = players[currentPlayerIndex];

    // 3. Update Round (If all non-eliminated players have had a turn, we advance the round counter)
    const turnOrderIndex = players.indexOf(currentPlayer);
    if (turnOrderIndex === 0 && !isFirstTurn) { // Simple round check for now
        round++;
    }

    turnDisplay.textContent = `TURN: ${currentPlayer.name}`;
    roundDisplay.textContent = `Round: ${round}`;

    // 4. Show the question
    showQuestion();
    drawHpBars(); // Update HP bars to highlight the current player
}

function showQuestion() {
    resetState();
    
    let current = currentQuestionSet[currentQuestionIndex % currentQuestionSet.length];
    
    questionElement.innerHTML = `<span class="team-name">${current.team}</span> - 
                                 <span class="char-name">${current.character}</span>: <br>
                                 **${current.skill}** <br><br>
                                 ${current.question}`;

    const currentAnswers = generateAnswers(current.correctAnswer);
    
    currentAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = "true";
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(e) {
    if (isAnswerSelected) return;

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    isAnswerSelected = true;
    
    const currentPlayer = players[currentPlayerIndex];
    const currentQuestion = currentQuestionSet[currentQuestionIndex % currentQuestionSet.length];
    
    let damageDealt = 0;

    // --- DAMAGE AND EFFECT LOGIC ---
    if (isCorrect) {
        damageDealt = 5; // Base damage for correct answer
        currentPlayer.score += 5
    } else {
        damageDealt = 0;
        // Self-damage on incorrect answer
        currentPlayer.hp = Math.max(0, currentPlayer.hp - 3); 
    }

    // --- DISPLAY EFFECT ---
    let effectText = isCorrect ? currentQuestion.effect_correct : currentQuestion.effect_incorrect;
    let resultClass = isCorrect ? 'correct-effect' : 'incorrect-effect';

    if (!isCorrect) {
         effectText = `MISS! ${currentPlayer.name} loses 3 HP. ` + effectText;
    } else {
         effectText = `HIT! ${currentPlayer.name} deals ${damageDealt} damage to a random opponent. ` + effectText;
         // Apply damage to a random opponent
         applyDamageToRandomOpponent(damageDealt, currentPlayer.id);
    }
    
    effectResultBox.innerHTML = `
        <p class="${resultClass}">
        ${currentQuestion.character} used ${currentQuestion.skill} - ${isCorrect ? 'CORRECT!' : 'INCORRECT!'}
        </p>
        <p>Effect: ${effectText}</p>
    `;
    effectResultBox.classList.remove('hidden');


    // 3. Check for current player elimination
    if (currentPlayer.hp <= 0) {
        currentPlayer.isEliminated = true;
    }

    // Disable buttons and show correct answer
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else if (button === selectedBtn && !isCorrect) {
             selectedBtn.classList.add("incorrect");
        }
    });

    drawHpBars();

    // Check for end condition again
    if (players.filter(p => !p.isEliminated).length <= 1) {
        endQuiz(players.find(p => !p.isEliminated));
    } else {
        nextButton.style.display = "block";
        nextButton.disabled = false;
    }
}

function applyDamageToRandomOpponent(damage, attackerId) {
    const targets = players.filter(p => !p.isEliminated && p.id !== attackerId);
    if (targets.length === 0) return;

    const randomIndex = Math.floor(Math.random() * targets.length);
    const target = targets[randomIndex];
    
    target.hp = Math.max(0, target.hp - damage);
    if (target.hp <= 0) {
        target.isEliminated = true;
    }
}

function handleNextButton() {
    currentQuestionIndex++;
    isAnswerSelected = false;
    
    nextTurn();
}

nextButton.addEventListener("click", handleNextButton);
restartButton.addEventListener('click', initializeGame); 

// TRONG script.js - THAY THẾ TOÀN BỘ HÀM endQuiz

// TRONG script.js - THAY THẾ TOÀN BỘ HÀM endQuiz

function endQuiz(winner) {
    // Ẩn màn hình Quiz và hiện màn hình Game Over
    resetState();
    quizScreen.classList.remove('active');
    quizScreen.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');
    gameOverScreen.classList.add('active');

    // 1. Lấy TẤT CẢ người chơi và sao chép mảng
    // Tạo bản sao để không thay đổi thứ tự chơi (currentPlayerIndex) trong mảng gốc.
    let finalRanking = [...players]; 
    
    // 2. Sắp xếp TẤT CẢ 7 người chơi theo ĐIỂM SỐ (từ cao xuống thấp)
    finalRanking.sort((a, b) => {
        // Tiêu chí 1: Điểm số (cao hơn là xếp hạng cao hơn)
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        // Tiêu chí 2 (Phụ): HP (cao hơn là xếp hạng cao hơn, nếu điểm số bằng nhau)
        return b.hp - a.hp;
    }); 

    let rankingHTML = '<h2 style="color:#ffd700;">FINAL RANKING</h2>';
    // Thêm padding-left để đảm bảo danh sách số 1-7 hiển thị rõ
    rankingHTML += '<ol style="text-align: left; max-width: 350px; margin: 20px auto; font-size: 1.1em; padding-left: 20px;">'; 
    
    // 3. Tạo danh sách xếp hạng chi tiết cho TẤT CẢ 7 người chơi
    finalRanking.forEach((p, index) => {
        // Bôi đậm và màu xanh cho người hạng nhất (index === 0)
        const rankStyle = (index === 0) ? 'color: #00bcd4; font-weight: bold;' : '';
        
        // Thêm nhãn (ELIMINATED) nếu bị loại
        const status = p.isEliminated ? ' <span style="color: #ff4500; font-size: 0.9em;">(ELIMINATED)</span>' : '';

        // HIỂN THỊ TÊN, ĐIỂM SỐ VÀ HP
        rankingHTML += `<li style="${rankStyle}">${p.name}: **${p.score} Points** (${Math.max(0, p.hp)} HP)${status}</li>`;
    });
    rankingHTML += '</ol>';
    
    // 4. Cập nhật giao diện Game Over
    winnerDisplay.innerHTML = rankingHTML;
    document.getElementById("game-over-title").textContent = "TRIAL CONCLUDED";
    
    restartButton.innerHTML = "START NEW TRIAL";
}



// --- HELPER FUNCTIONS ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const allPossibleAnswers = [
    "Shampoo", "A haircut", "Deodorant", "Mouthwash", "A facial", "Lotion / Moisturizer", 
    "Dental floss", "Hairspray / Hair gel", "A massage", "Junk food / Unhealthy food", 
    "Fried food", "Organic food", "Nutritious", "Flavor / Taste", "Healthy / Low-fat", 
    "Vegan", "Fast food", "Vegetarian", "didn’t use to", "used to", "did", "don't", 
    "any", "much", "some", "Did you use to like spicy food?", "Don’t you eat breakfast?", "Health"
];

function generateAnswers(correctAnswer) {
    let answers = [{ text: correctAnswer, correct: true }];
    let incorrectCandidates = allPossibleAnswers.filter(ans => ans !== correctAnswer);
    
    shuffleArray(incorrectCandidates);
    for (let i = 0; i < 3 && i < incorrectCandidates.length; i++) {
        if (!answers.some(a => a.text === incorrectCandidates[i])) {
            answers.push({ text: incorrectCandidates[i], correct: false });
        }
    }
    
    while (answers.length < 4) {
        answers.push({ text: `Dummy Answer ${answers.length}`, correct: false });
    }

    shuffleArray(answers);
    return answers;
}

function resetState() {
    nextButton.style.display = "none";
    effectResultBox.classList.add('hidden');
    effectResultBox.innerHTML = '';
    
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Start the game initialization
document.addEventListener('DOMContentLoaded', initializeGame);