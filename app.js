/* =========================================================================
   DATABASE ĐỀ THI VÀ NGỮ PHÁP (MÔ PHỎNG FORMAT HSA 2026 - 50 CÂU)
========================================================================= */

// Danh sách các chuyên đề Ngữ pháp
const grammarTopicsList = [
    "Mệnh đề quan hệ (Relative Clauses)",
    "Động từ theo sau bởi V-ing / To V",
    "Động từ khuyết thiếu (Modal Verbs)",
    "Thì của động từ (Verb Tenses)",
    "Câu điều kiện (Conditional Sentences)",
    "Câu bị động (Passive Voice)",
    "Câu tường thuật (Reported Speech)",
    "Đảo ngữ (Inversion)",
    "Từ loại (Word Form)",
    "Sự hòa hợp Chủ ngữ - Động từ"
];

// Cấu trúc Database
const appDatabase = {
    grammar: {},
    mocktest: {}
};

// Hàm sinh dữ liệu mẫu để rút gọn code
function G(ins, passage, items) {
    return items.map((it, i) => {
        const q = { instruction: ins, text: it[0], options: it[1], answer: it[2] };
        if (i === 0 && passage) q.passage = passage;
        return q;
    });
}

// Khởi tạo khung dữ liệu rỗng cho 10 Chủ đề Ngữ pháp (mỗi chủ đề 10 bài tập)
grammarTopicsList.forEach((topicName, index) => {
    const topicId = index + 1;
    appDatabase.grammar[topicId] = { title: topicName, exercises: {} };
    for (let ex = 1; ex <= 10; ex++) {
        appDatabase.grammar[topicId].exercises[ex] = []; // Khởi tạo mảng rỗng
    }
});

// Khởi tạo khung dữ liệu rỗng cho 10 Đề thi thử
for (let testId = 1; testId <= 10; testId++) {
    appDatabase.mocktest[testId] = []; // Khởi tạo mảng rỗng
}

/* --- DỮ LIỆU MẪU: CHUYÊN ĐỀ 1 - BÀI TẬP 1 (10 câu) --- */
appDatabase.grammar[1].exercises[1] = [
    { instruction: "Choose A, B, C or D to complete each sentence.", text: "The woman ______ helped me with my luggage at the station was very kind.", options: ["who", "which", "whom", "whose"], answer: 0 },
    { instruction: "Choose A, B, C or D to complete each sentence.", text: "The car ______ he bought last month is very expensive.", options: ["whom", "who", "which", "whose"], answer: 2 },
    { instruction: "Choose A, B, C or D to complete each sentence.", text: "I know the boy ______ father is a famous doctor.", options: ["who", "whom", "which", "whose"], answer: 3 },
    { instruction: "Choose A, B, C or D to complete each sentence.", text: "This is the house in ______ I was born.", options: ["where", "which", "that", "there"], answer: 1 },
    { instruction: "Choose A, B, C or D to complete each sentence.", text: "The reason ______ he was absent yesterday is still unknown.", options: ["why", "when", "where", "which"], answer: 0 },
    { instruction: "Choose A, B, C or D to complete each sentence.", text: "Do you remember the day ______ we first met?", options: ["which", "when", "where", "why"], answer: 1 },
    { instruction: "Choose A, B, C or D to complete each sentence.", text: "She is the only student ______ answered the question correctly.", options: ["who", "which", "whom", "whose"], answer: 0 },
    { instruction: "Choose A, B, C or D to complete each sentence.", text: "The man to ______ I was talking is my uncle.", options: ["who", "whom", "that", "which"], answer: 1 },
    { instruction: "Choose A, B, C or D to complete each sentence.", text: "The book ______ you lent me is very interesting.", options: ["who", "whose", "which", "whom"], answer: 2 },
    { instruction: "Choose A, B, C or D to complete each sentence.", text: "He works for a company ______ makes computers.", options: ["who", "which", "whom", "whose"], answer: 1 }
];

/* --- DỮ LIỆU MẪU: ĐỀ THI THỬ ĐGNL SỐ 1 (Đã bao gồm 20 câu lấy từ Đề 1 của Thầy. Thầy có thể copy thêm bằng cấu trúc này để đủ 50 câu/đề) --- */

const i_completion = "Sentence completion: Choose A, B, C or D to complete each sentence.";
const i_synonym = "Synonyms: Choose A, B, C or D that has the CLOSEST meaning to the underlined word/phrase.";
const i_antonym = "Antonyms: Choose A, B, C or D that has the OPPOSITE meaning to the underlined word/phrase.";
const i_dialogue = "Dialogue completion: Choose A, B, C or D to complete each dialogue.";
const i_arrange = "Dialogue arrangement: Choose A, B, C or D to make a complete dialogue for each question.";
const i_rewrite = "Sentence rewriting: Choose A, B, C or D that has the CLOSEST meaning to the given sentence.";
const i_combine = "Sentence combination: Choose A, B, C or D that has the CLOSEST meaning to the given pair of sentences.";
const i_cloze = "Cloze text: Read the passage below and choose A, B, C or D to fill in each blank.";
const i_error = "Error Identification: Identify the underlined part that needs correction in each sentence.";
const i_read = "Reading Comprehension: Read the passage and answer the questions.";
const i_logic = "Logical thinking and problem solving: Choose A, B C or D to answer each question.";

appDatabase.mocktest[1] = [].concat(
    // Ngữ pháp & Từ vựng
    G(i_completion, null, [
        ["We respect Mr. Thanh ______ is a talented doctor.", ["who", "whose", "which", "whom"], 0],
        ["The students enjoyed ______ the museum during their field trip.", ["visiting", "to visit", "visit", "visited"], 0],
        ["People ______ exercise regularly to maintain their health.", ["should", "must", "will", "could"], 0],
        ["What is the most ______ place to live in this region?", ["peaceful", "peace", "peacefully", "peaceless"], 0],
        ["Lan ______ attending university after graduating from high school.", ["is planning on", "will plan", "plans", "planning"], 0],
        ["The teacher's advice was ______ to all the students in the classroom.", ["inspire", "inspiration", "inspiring", "inspired"], 2],
        ["If Sarah ______ more confident, she would apply for the leadership role.", ["is", "were", "was", "has been"], 1],
        ["The company plans to cut workers' commuting time by ______ 15%.", ["reducing", "to reduce", "reduce", "reduction"], 0]
    ]),
    // Từ đồng nghĩa - Trái nghĩa
    G(i_synonym, null, [
        ["The teacher <u>encouraged</u> her students to participate in the debate.", ["prompted", "discouraged", "ignored", "hammered"], 0],
        ["After a long discussion, the two sides finally reached a <u>consensus</u> on the matter.", ["disagreement", "agreement", "argument", "debate"], 1]
    ]),
    G(i_antonym, null, [
        ["The company decided to <u>phase out</u> the old production system and replace it with a new one.", ["abolish", "introduce", "remove", "expand"], 1],
        ["He has been trying to <u>cut down on</u> his sugar intake to stay healthy.", ["reduce", "eliminate", "increase", "avoid"], 2]
    ]),
    // Giao tiếp
    G(i_dialogue, null, [
        ["Tony and Bob are talking in their classroom.\n- Tony: \"We are buying Lily a graduation present.\"\n- Bob: \"______\"", ["She's out of my league.", "Can you all be more down-to-earth?", "I'm ranking in money now.", "Could I chip in?"], 3],
        ["Tom: \"Would you like to try using my camera to see how it works?\"\nMary: \"Yeah, sure, ______\"", ["I'll give it a try.", "I'll give it a rest.", "I'll give it a break.", "I'll give it a skip."], 0]
    ]),
    G(i_arrange, null, [
        ["a. I'd love to, but I already have plans for tonight.\nb. Oh, do you want to join us for dinner later?\nc. That's okay. Maybe another time!\nd. Thanks for inviting me, though.", ["b-a-d-c", "a-b-c-d", "b-c-a-d", "c-a-d-b"], 0]
    ]),
    // Viết lại câu
    G(i_rewrite, null, [
        ["Online learning may be more convenient than traditional classroom learning.", ["Traditional classroom learning is likely less convenient than online learning.", "Online learning is probably less convenient than traditional classroom learning.", "Traditional classroom learning is definitely more convenient than online learning.", "Online learning is certainly less convenient than traditional classroom learning."], 0],
        ["As soon as the rain stopped, the children ran outside to play.", ["Hardly had the rain stopped when the children run outside to play.", "No sooner had the rain stopped than the children ran outside to play.", "The children wasted no time going outside once the rain stopped.", "Following the end of the rain, the children stayed indoors."], 1]
    ]),
    // Điền từ (Cloze text)
    G(i_cloze, "Thanks to the field of linguistics we know much about the development of the 5,000 plus languages in existence today. We can describe their grammar and pronunciation and see (1)______ over time. For example, we understand the origins of the Indo-European group of languages, which (2)______ Norwegian, Hindi and English...", [
        ["(1)______", ["how their spoken and written forms have changed", "What their spoken and written forms have changed", "Their spoken and written forms", "how their spoken and written forms has changed"], 0],
        ["(2)______", ["include", "to include", "includes", "including"], 0]
    ]),
    // Tư duy Logic & Problem Solving (Mới của format HSA)
    G(i_logic, null, [
        ["You are at a barbecue, and some people are playing a trivia game. You are curious and would like to join in. What can you say to participate?", ["Could I join your game, or should I just watch for now?", "That trivia game looks really tough to answer!", "What are the rules of this game? I'd like to know before joining.", "I'll just watch; you all seem to know everything!"], 0]
    ])
);


/* =========================================================================
   LOGIC HOẠT ĐỘNG
========================================================================= */

let currentSection = 'grammar'; // 'grammar' | 'mocktest'
let currentTopic = 1;
let currentItem = 1; // ID của Bài tập hoặc Đề thi
let timerInterval = null;
let timeLeft = 0;
let isSubmitted = false;

document.addEventListener('DOMContentLoaded', () => { 
    selectSection('grammar'); 
});

// Chuyển đổi giữa Ngữ pháp và Luyện đề
function selectSection(section) {
    currentSection = section;
    const tabGrammar = document.getElementById('tab-grammar');
    const tabMocktest = document.getElementById('tab-mocktest');

    if (section === 'grammar') {
        tabGrammar.className = "px-5 py-2 bg-gray-50 text-blue-800 font-bold rounded-md shadow-sm text-sm transition-colors";
        tabMocktest.className = "px-5 py-2 bg-white/20 hover:bg-white/90 hover:text-blue-800 font-semibold rounded-md text-sm transition-colors";
        document.getElementById('sidebar-title').innerHTML = `<svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg> CHUYÊN ĐỀ NGỮ PHÁP`;
    } else {
        tabMocktest.className = "px-5 py-2 bg-gray-50 text-blue-800 font-bold rounded-md shadow-sm text-sm transition-colors";
        tabGrammar.className = "px-5 py-2 bg-white/20 hover:bg-white/90 hover:text-blue-800 font-semibold rounded-md text-sm transition-colors";
        document.getElementById('sidebar-title').innerHTML = `<svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg> NGÂN HÀNG ĐỀ THI`;
    }

    renderSidebar();
    
    document.getElementById('test-screen').classList.add('hidden-element');
    document.getElementById('result-screen').classList.add('hidden-element');
    document.getElementById('welcome-screen').classList.remove('hidden-element');
}

// Hàm liên quan đến Local Storage lưu điểm
function saveProgress(section, topic, item, correct, total, percent) {
    let data = JSON.parse(localStorage.getItem('hsa_english_progress')) || {};
    const key = `${section}-${topic}-${item}`;
    data[key] = { correct, total, percent, date: new Date().toISOString() };
    localStorage.setItem('hsa_english_progress', JSON.stringify(data));
    renderSidebar();
}

function getProgress(section, topic, item) {
    let data = JSON.parse(localStorage.getItem('hsa_english_progress')) || {};
    return data[`${section}-${topic}-${item}`] || null;
}

// Render Sidebar
function renderSidebar() {
    const container = document.getElementById('sidebar-container');
    container.innerHTML = '';

    if (currentSection === 'grammar') {
        Object.keys(appDatabase.grammar).forEach(topicId => {
            const topic = appDatabase.grammar[topicId];
            const div = document.createElement('div');
            div.className = 'border-b border-gray-200';
            
            div.innerHTML = `
                <div class="px-4 py-3 font-bold text-gray-700 cursor-pointer flex justify-between items-center hover:bg-blue-50" onclick="toggleSidebarMenu('grammar-menu-${topicId}')">
                    <span>${topic.title}</span> <span class="text-[10px] text-gray-400">▼</span>
                </div>
                <div id="grammar-menu-${topicId}" class="${topicId == currentTopic ? 'flex flex-col bg-white border-t border-gray-100' : 'hidden-element flex flex-col bg-white border-t border-gray-100'}"></div>
            `;
            container.appendChild(div);

            const menu = document.getElementById(`grammar-menu-${topicId}`);
            for (let ex = 1; ex <= 10; ex++) {
                const progress = getProgress('grammar', topicId, ex);
                let badge = progress ? `<span class="px-2 py-0.5 text-[11px] font-bold rounded-full border ${progress.percent >= 80 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}">${progress.percent}%</span>` : '';
                
                const active = (topicId == currentTopic && ex == currentItem && !document.getElementById('test-screen').classList.contains('hidden-element')) ? 'bg-blue-50 border-l-4 border-blue-500 text-blue-800 font-bold' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700';

                menu.innerHTML += `<button onclick="startTest('grammar', ${topicId}, ${ex})" class="flex justify-between items-center px-6 py-3 text-sm border-b border-gray-50 transition-colors ${active}"><span>Bài tập ${ex}</span> ${badge}</button>`;
            }
        });
    } else {
        // Đề thi thử
        const div = document.createElement('div');
        div.className = 'flex flex-col bg-white';
        for (let t = 1; t <= 10; t++) {
            const progress = getProgress('mocktest', 1, t);
            let badge = progress ? `<span class="px-2 py-0.5 text-[11px] font-bold rounded-full border ${progress.percent >= 80 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}">${progress.percent}%</span>` : '';
            
            const active = (t == currentItem && !document.getElementById('test-screen').classList.contains('hidden-element')) ? 'bg-blue-50 border-l-4 border-blue-500 text-blue-800 font-bold' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700 border-b border-gray-100';

            div.innerHTML += `<button onclick="startTest('mocktest', 1, ${t})" class="flex justify-between items-center px-6 py-4 text-sm transition-colors ${active}"><span>Đề thi thử số ${t}</span> ${badge}</button>`;
        }
        container.appendChild(div);
    }
}

function toggleSidebarMenu(id) {
    document.getElementById(id).classList.toggle('hidden-element');
}

// Bắt đầu làm bài
function startTest(section, topicId, itemId) {
    currentSection = section; currentTopic = topicId; currentItem = itemId; isSubmitted = false;

    document.getElementById('welcome-screen').classList.add('hidden-element');
    document.getElementById('result-screen').classList.add('hidden-element');
    document.getElementById('test-screen').classList.remove('hidden-element');
    document.getElementById('submit-btn').classList.remove('hidden-element');
    
    if (section === 'grammar') {
        document.getElementById('current-test-title').innerText = `${appDatabase.grammar[topicId].title} - Bài tập ${itemId}`;
        document.getElementById('current-test-subtitle').innerText = "10 Câu hỏi luyện tập Ngữ pháp";
        resetTimer(15); // Ngữ pháp 15 phút
    } else {
        document.getElementById('current-test-title').innerText = `Đề thi thử ĐGNL Tiếng Anh HSA - Đề số ${itemId}`;
        document.getElementById('current-test-subtitle').innerText = "Định dạng 50 câu ĐHQG Hà Nội 2026";
        resetTimer(60); // Đề thi 60 phút
    }

    renderTestContent();
    renderSidebar();
    startTimer();
}

// Render nội dung câu hỏi
function renderTestContent() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    
    let questions = [];
    if (currentSection === 'grammar') {
        questions = appDatabase.grammar[currentTopic].exercises[currentItem] || [];
    } else {
        questions = appDatabase.mocktest[currentItem] || [];
    }

    if (questions.length === 0) {
        container.innerHTML = `<div class="bg-gray-50 rounded-xl py-12 text-center border-2 border-dashed border-gray-300"><p class="text-gray-500 font-bold text-lg">Dữ liệu bài tập/đề thi này đang được cập nhật...</p><p class="text-sm text-blue-500 mt-2">(Thầy Tiến chọn "Ngữ pháp -> Mệnh đề quan hệ -> Bài tập 1" hoặc "Luyện đề -> Đề số 1" để xem bản demo)</p></div>`;
        document.getElementById('submit-btn').classList.add('hidden-element'); 
        clearInterval(timerInterval);
        return;
    }

    const groups = [];
    let currentGroup = null;
    questions.forEach((q, originalIndex) => {
        q.originalIndex = originalIndex; 
        if (!currentGroup || q.instruction !== currentGroup.instruction || (q.passage && !currentGroup.passage)) {
            currentGroup = { instruction: q.instruction, passage: q.passage || null, questions: [] };
            groups.push(currentGroup);
        }
        currentGroup.questions.push(q);
    });

    let html = '';
    let questionNumberStart = currentSection === 'mocktest' ? 601 : 1; // Số thứ tự theo chuẩn HSA

    groups.forEach((group) => {
        const isReading = !!group.passage;
        const isArrangement = group.instruction.toLowerCase().includes("arrangement");

        let questionsHtml = '';
        group.questions.forEach((q) => {
            const index = q.originalIndex;
            const qNum = questionNumberStart + index;
            const labels = ['A', 'B', 'C', 'D'];
            let optionsHtml = '';
            
            q.options.forEach((opt, oIdx) => {
                optionsHtml += `
                    <label class="option-label flex items-start space-x-2 p-3 rounded-lg border border-gray-200 bg-white w-full h-full cursor-pointer relative" id="box_q_${index}_opt_${oIdx}">
                        <input type="radio" name="q_${index}" value="${oIdx}" class="mt-0.5 w-5 h-5 text-blue-600 flex-shrink-0 cursor-pointer">
                        <span class="flex-grow text-gray-800 text-base transition-colors leading-snug break-words" id="span_q_${index}_opt_${oIdx}">
                            <strong class="text-blue-800 font-bold mr-1">${labels[oIdx]}.</strong> ${opt}
                        </span>
                    </label>
                `;
            });

            let qTextHtml = q.text ? q.text.replace(/\n/g, '<br>') : '';
            let qClass = isArrangement || qTextHtml.includes(":") ? "text-lg font-bold text-blue-900 bg-blue-50 p-4 rounded-lg border border-blue-100 mt-3 mb-4 block leading-relaxed" : "text-gray-800 font-medium text-lg ml-1 mt-1 leading-relaxed";

            questionsHtml += `
                <div class="question-box bg-white p-5 md:p-6 rounded-xl border border-gray-100 shadow-sm mb-5" id="qbox_${index}">
                    ${qTextHtml ? 
                        `<div class="mb-4">
                            <span class="font-bold text-blue-700 text-lg">Question ${qNum}:</span>
                            <div class="${qClass}">${qTextHtml}</div>
                        </div>` 
                        : `<div class="mb-3"><span class="font-bold text-blue-700 text-lg">Question ${qNum}:</span></div>`
                    }
                    <div class="grid ${isReading ? 'grid-cols-1 xl:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'} gap-3 mt-2">
                        ${optionsHtml}
                    </div>
                </div>
            `;
        });

        if (isReading) {
            const formattedPassage = group.passage.replace(/\n/g, '<br><br>');
            html += `
                <div class="flex flex-col lg:flex-row gap-6 mb-10 pb-8 border-b border-dashed border-gray-300">
                    <div class="lg:w-[50%] lg:sticky lg:top-[75px] z-10 w-full self-start">
                        <div class="font-bold text-white bg-blue-600 text-sm px-4 py-2 rounded-t-lg shadow-sm">
                            ${group.instruction}
                        </div>
                        <div class="reading-passage bg-blue-50/30 border border-blue-100 p-5 rounded-b-lg text-gray-900 text-justify leading-relaxed text-lg overflow-y-auto custom-scrollbar max-h-[50vh] lg:max-h-[calc(100vh-100px)]">
                            ${formattedPassage}
                        </div>
                    </div>
                    <div class="lg:w-[50%] w-full mt-2 lg:mt-0">
                        ${questionsHtml}
                    </div>
                </div>
            `;
        } else {
            html += `
                <div class="mb-10 pb-8 border-b border-dashed border-gray-300">
                    <div class="font-bold text-gray-700 text-base border-l-4 border-blue-500 pl-3 mb-5">
                        ${group.instruction}
                    </div>
                    <div class="w-full">${questionsHtml}</div>
                </div>
            `;
        }
    });

    container.innerHTML = html;
}

// Nộp bài
function submitTest() {
    if(isSubmitted) return;
    clearInterval(timerInterval);
    isSubmitted = true;
    document.getElementById('submit-btn').classList.add('hidden-element');

    let questions = currentSection === 'grammar' ? appDatabase.grammar[currentTopic].exercises[currentItem] : appDatabase.mocktest[currentItem];
    const total = questions.length;
    let correctCount = 0;

    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q_${index}"]:checked`);
        const correctAnsIdx = q.answer;
        
        document.querySelectorAll(`input[name="q_${index}"]`).forEach(input => input.disabled = true);
        
        const correctBox = document.getElementById(`box_q_${index}_opt_${correctAnsIdx}`);
        const correctSpan = document.getElementById(`span_q_${index}_opt_${correctAnsIdx}`);
        if(correctBox) { correctBox.classList.add('correct-ans-box'); correctSpan.classList.add('correct-ans-text'); }

        if (selected) {
            const selectedIdx = parseInt(selected.value);
            if (selectedIdx === correctAnsIdx) correctCount++;
            else {
                const wrongBox = document.getElementById(`box_q_${index}_opt_${selectedIdx}`);
                const wrongSpan = document.getElementById(`span_q_${index}_opt_${selectedIdx}`);
                if(wrongBox) { wrongBox.classList.add('wrong-ans-box'); wrongSpan.classList.add('wrong-ans-text'); }
            }
        }
    });

    const percent = Math.round((correctCount / total) * 100);
    document.getElementById('score-display').innerText = `${correctCount}/${total}`;
    document.getElementById('correct-display').innerText = correctCount;
    document.getElementById('wrong-display').innerText = total - correctCount;
    document.getElementById('percent-display').innerText = `${percent}%`;

    let msg = percent >= 80 ? "🎯 Xuất sắc! Năng lực tiếng Anh của bạn hoàn toàn đáp ứng được bài thi HSA!" : (percent >= 50 ? "👍 Khá tốt! Bạn cần ôn tập thêm một số chủ điểm để nâng cao điểm số." : "💪 Cố gắng lên! Hãy làm lại các bài tập Ngữ pháp để nắm vững nền tảng.");
    document.getElementById('motivation-message').innerText = msg;

    saveProgress(currentSection, currentTopic, currentItem, correctCount, total, percent);

    document.getElementById('result-screen').classList.remove('hidden-element');
    window.scrollTo({ top: document.getElementById('result-screen').offsetTop - 50, behavior: 'smooth' });
}

// Hẹn giờ
function startTimer() {
    timerInterval = setInterval(() => {
        if(timeLeft <= 0) { clearInterval(timerInterval); submitTest(); return; }
        timeLeft--;
        const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        document.getElementById('timer-display').innerText = `${m}:${s}`;
    }, 1000);
}
function resetTimer(minutes) { 
    clearInterval(timerInterval); 
    timeLeft = minutes * 60; 
    document.getElementById('timer-display').innerText = `${minutes}:00`; 
}

function continueAfterResult() {
    document.getElementById('test-screen').classList.add('hidden-element');
    document.getElementById('result-screen').classList.add('hidden-element');
    document.getElementById('welcome-screen').classList.remove('hidden-element');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}