/* =====================================================
   QUIZMASTER – MAIN SCRIPT
   ===================================================== */

'use strict';

/* ── QUESTION BANK ──────────────────────────────────── */
const QUESTIONS = [
  // ── SCIENCE ──
  {
    id: 1, category: 'science', difficulty: 'easy',
    text: 'Nguyên tố nào có ký hiệu hóa học là "O"?',
    options: ['Vàng', 'Oxy', 'Osmium', 'Ozone'],
    answer: 1
  },
  {
    id: 2, category: 'science', difficulty: 'easy',
    text: 'Tốc độ ánh sáng trong chân không là bao nhiêu?',
    options: ['200,000 km/s', '250,000 km/s', '300,000 km/s', '350,000 km/s'],
    answer: 2
  },
  {
    id: 3, category: 'science', difficulty: 'medium',
    text: 'Hiện tượng nào mô tả xu hướng của chất khí khuếch tán từ nơi nồng độ cao đến thấp?',
    options: ['Thẩm thấu', 'Khuếch tán', 'Đối lưu', 'Dẫn nhiệt'],
    answer: 1
  },
  {
    id: 4, category: 'science', difficulty: 'medium',
    text: 'DNA trong tế bào người được tổ chức thành bao nhiêu cặp nhiễm sắc thể?',
    options: ['20 cặp', '22 cặp', '23 cặp', '24 cặp'],
    answer: 2
  },
  {
    id: 5, category: 'science', difficulty: 'hard',
    text: 'Hạt nào là đơn vị cơ bản của lực mạnh (strong force) trong hạt nhân?',
    options: ['Electron', 'Neutron', 'Gluon', 'Photon'],
    answer: 2
  },
  {
    id: 6, category: 'science', difficulty: 'hard',
    text: 'Phương trình Schrödinger mô tả điều gì?',
    options: ['Dao động của dây đàn', 'Sự tiến hóa của hàm sóng lượng tử', 'Chuyển động nhiệt của khí lý tưởng', 'Từ trường xung quanh dây dẫn'],
    answer: 1
  },

  // ── HISTORY ──
  {
    id: 7, category: 'history', difficulty: 'easy',
    text: 'Chiến tranh Thế giới thứ nhất kết thúc vào năm nào?',
    options: ['1916', '1917', '1918', '1919'],
    answer: 2
  },
  {
    id: 8, category: 'history', difficulty: 'easy',
    text: 'Ai là Chủ tịch nước đầu tiên của Việt Nam?',
    options: ['Võ Nguyên Giáp', 'Hồ Chí Minh', 'Phạm Văn Đồng', 'Lê Duẩn'],
    answer: 1
  },
  {
    id: 9, category: 'history', difficulty: 'medium',
    text: 'Đế quốc Mông Cổ đạt đến cực thịnh dưới triều đại của ai?',
    options: ['Thiết Mộc Chân', 'Hốt Tất Liệt', 'Oa Khoát Đài', 'Mông Ca'],
    answer: 1
  },
  {
    id: 10, category: 'history', difficulty: 'medium',
    text: 'Cách mạng Pháp bùng nổ vào năm nào?',
    options: ['1776', '1789', '1804', '1815'],
    answer: 1
  },
  {
    id: 11, category: 'history', difficulty: 'hard',
    text: 'Hiệp ước nào kết thúc Chiến tranh Ba mươi năm (1618-1648) ở châu Âu?',
    options: ['Hiệp ước Utrecht', 'Hiệp ước Westphalia', 'Hiệp ước Vienna', 'Hiệp ước Paris'],
    answer: 1
  },
  {
    id: 12, category: 'history', difficulty: 'hard',
    text: 'Triều đại nhà nào trị vì Trung Quốc từ năm 618 đến 907 CN?',
    options: ['Nhà Hán', 'Nhà Tống', 'Nhà Đường', 'Nhà Minh'],
    answer: 2
  },

  // ── GEOGRAPHY ──
  {
    id: 13, category: 'geography', difficulty: 'easy',
    text: 'Thủ đô của Nhật Bản là gì?',
    options: ['Osaka', 'Kyoto', 'Tokyo', 'Hiroshima'],
    answer: 2
  },
  {
    id: 14, category: 'geography', difficulty: 'easy',
    text: 'Sông nào dài nhất thế giới?',
    options: ['Sông Amazon', 'Sông Nile', 'Sông Dương Tử', 'Sông Mississippi'],
    answer: 1
  },
  {
    id: 15, category: 'geography', difficulty: 'medium',
    text: 'Quốc gia nào có diện tích lớn nhất thế giới?',
    options: ['Canada', 'Trung Quốc', 'Mỹ', 'Nga'],
    answer: 3
  },
  {
    id: 16, category: 'geography', difficulty: 'medium',
    text: 'Núi nào là cao nhất châu Phi?',
    options: ['Núi Kenya', 'Kilimanjaro', 'Rwenzori', 'Atlas'],
    answer: 1
  },
  {
    id: 17, category: 'geography', difficulty: 'hard',
    text: 'Biển hồ nào có diện tích mặt nước lớn nhất thế giới?',
    options: ['Biển Caspi', 'Hồ Superior', 'Hồ Victoria', 'Biển Aral'],
    answer: 0
  },
  {
    id: 18, category: 'geography', difficulty: 'hard',
    text: 'Quốc gia nào không có lối ra biển nhưng được bao quanh bởi một quốc gia cũng không có lối ra biển?',
    options: ['Uzbekistan', 'Liechtenstein', 'Lesotho', 'San Marino'],
    answer: 0
  },

  // ── TECH ──
  {
    id: 19, category: 'tech', difficulty: 'easy',
    text: 'Ngôn ngữ lập trình nào được dùng chủ yếu cho lập trình web phía client?',
    options: ['Python', 'Java', 'JavaScript', 'C++'],
    answer: 2
  },
  {
    id: 20, category: 'tech', difficulty: 'easy',
    text: '"HTTP" viết tắt của cụm từ nào?',
    options: ['HyperText Transfer Protocol', 'High-Tech Text Processing', 'HyperText Type Protocol', 'Hybrid Transaction Processing'],
    answer: 0
  },
  {
    id: 21, category: 'tech', difficulty: 'medium',
    text: 'Cấu trúc dữ liệu nào hoạt động theo nguyên tắc LIFO (Last In First Out)?',
    options: ['Queue', 'Stack', 'Linked List', 'Tree'],
    answer: 1
  },
  {
    id: 22, category: 'tech', difficulty: 'medium',
    text: 'Thuật toán sắp xếp nào có độ phức tạp trung bình O(n log n)?',
    options: ['Bubble Sort', 'Insertion Sort', 'Merge Sort', 'Selection Sort'],
    answer: 2
  },
  {
    id: 23, category: 'tech', difficulty: 'hard',
    text: 'Thuật ngữ "Turing Complete" có nghĩa là gì?',
    options: ['Một hệ thống có thể mô phỏng bất kỳ máy Turing nào', 'Một ngôn ngữ lập trình có IDE', 'Một thuật toán luôn kết thúc', 'Một bộ vi xử lý đa nhân'],
    answer: 0
  },
  {
    id: 24, category: 'tech', difficulty: 'hard',
    text: 'CAP Theorem trong hệ thống phân tán cho rằng hệ thống không thể đảm bảo đồng thời 3 thuộc tính nào?',
    options: ['Consistency, Availability, Performance', 'Consistency, Availability, Partition Tolerance', 'Concurrency, Atomicity, Persistence', 'Coherence, Availability, Parallelism'],
    answer: 1
  },

  // ── MATH ──
  {
    id: 25, category: 'math', difficulty: 'easy',
    text: 'Số Pi (π) tính gần đúng đến 2 chữ số thập phân là?',
    options: ['3.12', '3.14', '3.16', '3.18'],
    answer: 1
  },
  {
    id: 26, category: 'math', difficulty: 'easy',
    text: 'Căn bậc hai của 144 là bao nhiêu?',
    options: ['11', '12', '13', '14'],
    answer: 1
  },
  {
    id: 27, category: 'math', difficulty: 'medium',
    text: 'Công thức nào tính diện tích hình tròn bán kính r?',
    options: ['2πr', '4πr²', 'πr²', '2πr²'],
    answer: 2
  },
  {
    id: 28, category: 'math', difficulty: 'medium',
    text: 'Trong tam giác vuông, đâu là định lý Pythagoras?',
    options: ['a + b = c', 'a² + b² = c²', 'a² - b² = c²', '2a + 2b = 4c'],
    answer: 1
  },
  {
    id: 29, category: 'math', difficulty: 'hard',
    text: 'Giá trị của e (cơ số logarithm tự nhiên) gần đúng là?',
    options: ['2.512', '2.618', '2.718', '2.828'],
    answer: 2
  },
  {
    id: 30, category: 'math', difficulty: 'hard',
    text: 'Tích phân ∫₀¹ x² dx bằng bao nhiêu?',
    options: ['1/4', '1/3', '1/2', '2/3'],
    answer: 1
  }
];

/* ── ICONS / LABELS ─────────────────────────────────── */
const CAT_LABELS = {
  all: '🌟 Tất cả', science: '🔬 Khoa học',
  history: '📜 Lịch sử', geography: '🌍 Địa lý',
  tech: '💻 Công nghệ', math: '🔢 Toán học'
};
const LETTERS = ['A', 'B', 'C', 'D'];
const LS_KEY  = 'qm_leaderboard';

/* ── STATE ──────────────────────────────────────────── */
let state = {
  playerName:  'Ẩn danh',
  category:    'all',
  difficulty:  'easy',
  numQ:        10,
  timeLimit:   15,
  questions:   [],
  current:     0,
  score:       0,
  timeLeft:    15,
  timer:       null,
  answered:    [],   // { correct, chosen, time }
  startTime:   0,
  totalTime:   0,
};

/* ── DOM REFS ────────────────────────────────────────── */
const $ = id => document.getElementById(id);

const screens = {
  home:        $('screen-home'),
  quiz:        $('screen-quiz'),
  result:      $('screen-result'),
  review:      $('screen-review'),
  leaderboard: $('screen-leaderboard'),
};

/* ── UTILS ───────────────────────────────────────────── */
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
  screens[name].scrollTop = 0;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showToast(msg, duration = 2200) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

/* ── PARTICLES ───────────────────────────────────────── */
(function initParticles() {
  const wrap = $('particles');
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left    = Math.random() * 100 + '%';
    p.style.bottom  = '0px';
    p.style.width   = p.style.height = (2 + Math.random() * 3) + 'px';
    p.style.animationDuration  = (8 + Math.random() * 14) + 's';
    p.style.animationDelay     = (-Math.random() * 14) + 's';
    p.style.opacity = (0.2 + Math.random() * 0.4).toFixed(2);
    wrap.appendChild(p);
  }
})();

/* ── CONFETTI ─────────────────────────────────────────── */
let confettiAnim = null;
function launchConfetti() {
  const canvas = $('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: 5 + Math.random() * 6,
    d: 2 + Math.random() * 4,
    color: ['#a78bfa','#38bdf8','#34d399','#fbbf24','#f87171'][Math.floor(Math.random()*5)],
    tilt: Math.random() * 10 - 5,
    tiltAngle: 0,
    tiltSpeed: Math.random() * 0.1 + 0.05,
  }));

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
      ctx.stroke();

      p.tiltAngle += p.tiltSpeed;
      p.y += (Math.cos(frame * 0.002) + p.d) * 0.8;
      p.tilt = Math.sin(p.tiltAngle) * 12;
      if (p.y > canvas.height) { p.y = -20; p.x = Math.random() * canvas.width; }
    });
    frame++;
    if (frame < 280) confettiAnim = requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  if (confettiAnim) cancelAnimationFrame(confettiAnim);
  draw();
}

/* ── HOME SCREEN ─────────────────────────────────────── */
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.category = btn.dataset.category;
  });
});

document.querySelectorAll('.diff-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.difficulty = btn.dataset.diff;
  });
});

$('btn-start').addEventListener('click', startQuiz);
$('btn-leaderboard').addEventListener('click', () => { renderLeaderboard(); showScreen('leaderboard'); });
$('btn-back-home').addEventListener('click', () => showScreen('home'));

/* ── START QUIZ ──────────────────────────────────────── */
function startQuiz() {
  const name = $('player-name').value.trim();
  state.playerName = name || 'Ẩn danh';
  state.numQ       = parseInt($('num-questions').value);
  state.timeLimit  = parseInt($('time-limit').value);

  // Filter questions
  let pool = QUESTIONS.filter(q => {
    const catOk  = state.category === 'all' || q.category === state.category;
    const diffOk = q.difficulty === state.difficulty;
    return catOk && diffOk;
  });

  if (pool.length < 3) {
    showToast('⚠️ Không đủ câu hỏi cho lựa chọn này. Thử chủ đề hoặc độ khó khác!');
    return;
  }

  state.questions = shuffle(pool).slice(0, Math.min(state.numQ, pool.length));
  state.current   = 0;
  state.score     = 0;
  state.answered  = [];
  state.startTime = Date.now();

  showScreen('quiz');
  renderQuestion();
}

/* ── RENDER QUESTION ─────────────────────────────────── */
function renderQuestion() {
  const idx = state.current;
  const q   = state.questions[idx];
  const n   = state.questions.length;

  $('q-number').textContent         = `Câu ${idx + 1}/${n}`;
  $('q-category-badge').textContent = CAT_LABELS[q.category];
  $('question-text').textContent    = q.text;
  $('live-score').textContent       = state.score;

  // Options
  const grid = $('options-grid');
  grid.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.id = `opt-${i}`;
    btn.innerHTML = `<span class="option-letter">${LETTERS[i]}</span><span>${opt}</span>`;
    btn.addEventListener('click', () => selectAnswer(i));
    grid.appendChild(btn);
  });

  // Progress dots
  const dots = $('progress-dots');
  dots.innerHTML = '';
  state.questions.forEach((_, di) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (di < idx)        dot.classList.add(state.answered[di]?.correct ? 'correct-dot' : 'wrong-dot');
    else if (di === idx) dot.classList.add('current');
    dots.appendChild(dot);
  });

  // Next button
  $('btn-next').style.visibility = 'hidden';

  // Timer
  startTimer(q);
}

/* ── TIMER ───────────────────────────────────────────── */
function startTimer(q) {
  clearInterval(state.timer);
  state.timeLeft = state.timeLimit;
  updateTimerUI(state.timeLeft);

  state.timer = setInterval(() => {
    state.timeLeft--;
    updateTimerUI(state.timeLeft);
    if (state.timeLeft <= 0) {
      clearInterval(state.timer);
      handleTimeout(q);
    }
  }, 1000);
}

function updateTimerUI(t) {
  const bar  = $('timer-bar');
  const text = $('timer-text');
  const pct  = (t / state.timeLimit) * 100;
  bar.style.width = pct + '%';
  text.textContent = t;

  const warn = t <= 5;
  bar.classList.toggle('warn', warn);
  text.classList.toggle('warn', warn);
}

function handleTimeout(q) {
  // Mark as skipped
  state.answered.push({ correct: false, chosen: -1, timeUsed: state.timeLimit, q });
  // Show correct answer
  const opts = document.querySelectorAll('.option-btn');
  opts.forEach(b => b.disabled = true);
  opts[q.answer].classList.add('correct');

  showToast('⏱️ Hết giờ! Đáp án đúng đã được hiển thị.');
  $('btn-next').style.visibility = 'visible';
}

/* ── SELECT ANSWER ───────────────────────────────────── */
function selectAnswer(chosen) {
  clearInterval(state.timer);
  const q        = state.questions[state.current];
  const correct  = chosen === q.answer;
  const timeUsed = state.timeLimit - state.timeLeft;

  state.answered.push({ correct, chosen, timeUsed, q });

  // Disable all options
  const opts = document.querySelectorAll('.option-btn');
  opts.forEach(b => b.disabled = true);

  // Highlight
  opts[q.answer].classList.add('correct');
  if (!correct) opts[chosen].classList.add('wrong');

  // Score: base points + time bonus
  if (correct) {
    const bonus = Math.max(0, state.timeLimit - timeUsed);
    const pts   = 100 + bonus * 5;
    state.score += pts;
    $('live-score').textContent = state.score;
    $('live-score').classList.remove('score-bump');
    void $('live-score').offsetWidth;
    $('live-score').classList.add('score-bump');
    showToast(`✅ Chính xác! +${pts} điểm`);
  } else {
    showToast('❌ Sai rồi! Cố gắng hơn nhé.');
  }

  $('btn-next').style.visibility = 'visible';
}

/* ── NEXT BUTTON ─────────────────────────────────────── */
$('btn-next').addEventListener('click', () => {
  state.current++;
  if (state.current >= state.questions.length) {
    endQuiz();
  } else {
    renderQuestion();
  }
});

/* ── QUIT ────────────────────────────────────────────── */
$('btn-quit').addEventListener('click', () => {
  clearInterval(state.timer);
  showScreen('home');
});

/* ── END QUIZ ────────────────────────────────────────── */
function endQuiz() {
  clearInterval(state.timer);
  state.totalTime = Math.round((Date.now() - state.startTime) / 1000);

  const correct = state.answered.filter(a => a.correct).length;
  const wrong   = state.answered.length - correct;
  const total   = state.questions.length;
  const pct     = Math.round((correct / total) * 100);

  // Save to leaderboard
  saveScore({ name: state.playerName, score: state.score, correct, total, time: state.totalTime });

  // Populate result screen
  const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '🎉' : pct >= 40 ? '😊' : '😢';
  const title = pct >= 80 ? 'Xuất sắc!' : pct >= 60 ? 'Tốt lắm!' : pct >= 40 ? 'Cố gắng hơn!' : 'Chưa đạt!';

  $('result-emoji').textContent = emoji;
  $('result-title').textContent = title;
  $('result-sub').textContent   = `Bạn đã trả lời đúng ${correct}/${total} câu`;
  $('stat-score').textContent   = state.score;
  $('stat-correct').textContent = correct;
  $('stat-wrong').textContent   = wrong;
  $('stat-time').textContent    = state.totalTime + 's';
  $('ring-pct').textContent     = pct + '%';

  // Animate score ring
  const circ = $('score-circle');
  const dash = 314;
  circ.style.strokeDashoffset = dash;
  showScreen('result');
  setTimeout(() => {
    circ.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)';
    circ.style.strokeDashoffset = dash - (dash * pct / 100);
  }, 300);

  if (pct >= 60) launchConfetti();
}

/* ── REVIEW ─────────────────────────────────────────── */
$('btn-review').addEventListener('click', () => {
  const list = $('review-list');
  list.innerHTML = '';

  state.answered.forEach((a, i) => {
    const q       = a.q;
    const isSkip  = a.chosen === -1;
    const tagClass = a.correct ? 'c' : isSkip ? 's' : 'w';
    const tagText  = a.correct ? '✅ Đúng' : isSkip ? '⏱️ Hết giờ' : '❌ Sai';

    const item = document.createElement('div');
    item.className = 'review-item';
    item.innerHTML = `
      <span class="review-tag ${tagClass}">${tagText}</span>
      <p class="review-q">${i+1}. ${q.text}</p>
      <p class="review-label">Đáp án đúng</p>
      <p class="review-ans correct">→ ${q.options[q.answer]}</p>
      ${!a.correct && !isSkip ? `
        <p class="review-label" style="margin-top:0.4rem">Bạn đã chọn</p>
        <p class="review-ans wrong">→ ${q.options[a.chosen]}</p>
      ` : ''}
    `;
    list.appendChild(item);
  });

  showScreen('review');
});

$('btn-back-result').addEventListener('click', () => showScreen('result'));

/* ── RETRY / HOME ───────────────────────────────────── */
$('btn-retry').addEventListener('click', startQuiz);
$('btn-home-result').addEventListener('click', () => showScreen('home'));

/* ── LEADERBOARD ─────────────────────────────────────── */
function saveScore(entry) {
  let lb = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
  lb.push({ ...entry, date: new Date().toLocaleDateString('vi-VN') });
  lb.sort((a, b) => b.score - a.score || a.time - b.time);
  lb = lb.slice(0, 20);
  localStorage.setItem(LS_KEY, JSON.stringify(lb));
}

function renderLeaderboard() {
  const lb   = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
  const list = $('lb-list');
  list.innerHTML = '';

  if (!lb.length) {
    list.innerHTML = '<p style="color:var(--text-muted);padding:2rem 0">Chưa có kết quả nào. Hãy chơi ngay!</p>';
    return;
  }

  lb.forEach((entry, i) => {
    const rank = i + 1;
    const rankClass = rank === 1 ? 'rank-1' : rank === 2 ? 'rank-2' : rank === 3 ? 'rank-3' : 'rank-other';
    const item = document.createElement('div');
    item.className = 'lb-item';
    item.innerHTML = `
      <div class="lb-rank ${rankClass}">${rank <= 3 ? ['🥇','🥈','🥉'][rank-1] : rank}</div>
      <div class="lb-info">
        <div class="lb-name">${entry.name}</div>
        <div class="lb-meta">${entry.correct}/${entry.total} đúng · ${entry.time}s · ${entry.date}</div>
      </div>
      <div class="lb-score">${entry.score}</div>
    `;
    list.appendChild(item);
  });
}

/* ── KEYBOARD SHORTCUTS ──────────────────────────────── */
document.addEventListener('keydown', e => {
  const screen = document.querySelector('.screen.active');
  if (!screen) return;

  if (screen.id === 'screen-quiz') {
    const map = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
    const idx = map[e.key.toLowerCase()];
    if (idx !== undefined) {
      const btn = $(`opt-${idx}`);
      if (btn && !btn.disabled) btn.click();
    }
    if ((e.key === 'Enter' || e.key === ' ') && $('btn-next').style.visibility !== 'hidden') {
      $('btn-next').click();
    }
  }

  if (screen.id === 'screen-home' && e.key === 'Enter') {
    $('btn-start').click();
  }
});

/* ── RESIZE CONFETTI ─────────────────────────────────── */
window.addEventListener('resize', () => {
  const c = $('confetti-canvas');
  c.width = window.innerWidth;
  c.height = window.innerHeight;
});
