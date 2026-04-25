// ============= ESTADO E PERSISTÊNCIA =============
const STORAGE_KEY = 'univesp2026_progress';
const REDACAO_KEY = 'univesp2026_redacao';

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { answers: {}, simulados: [] };
  } catch { return { answers: {}, simulados: [] }; }
}
function saveProgress(p) { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }

let progress = loadProgress();

const TOPIC_LABELS = {
  matematica: '📐 Matemática', portugues: '📖 Português', ingles: '🇬🇧 Inglês',
  historia: '🏛️ História', geografia: '🌎 Geografia', quimica: '⚗️ Química',
  biologia: '🧬 Biologia', fisica: '⚛️ Física'
};

// ============= NAVEGAÇÃO =============
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => switchView(btn.dataset.view));
});
document.querySelectorAll('[data-go]').forEach(btn => {
  btn.addEventListener('click', () => switchView(btn.dataset.go));
});
document.querySelectorAll('.topic[data-topic]').forEach(t => {
  t.addEventListener('click', () => {
    document.getElementById('topicFilter').value = t.dataset.topic;
    switchView('study');
    renderQuestions();
  });
});

function switchView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(name).classList.add('active');
  const navBtn = document.querySelector(`.nav-btn[data-view="${name}"]`);
  if (navBtn) navBtn.classList.add('active');
  if (name === 'study') renderQuestions();
  if (name === 'stats') renderStats();
  if (name === 'cantinho') renderCantinho();
  window.scrollTo(0, 0);
}

// ============= CANTINHO DE ESTUDOS =============
function renderCantinho() {
  const grid = document.getElementById('cantinhoGrid');
  const detail = document.getElementById('cantinhoDetail');
  detail.style.display = 'none';
  grid.style.display = 'grid';
  grid.innerHTML = '';
  if (typeof STUDY_CONTENT === 'undefined') return;

  Object.keys(STUDY_CONTENT).forEach(key => {
    const m = STUDY_CONTENT[key];
    const card = document.createElement('div');
    card.className = 'cantinho-card';
    card.style.borderTopColor = m.color;
    card.innerHTML = `
      <div class="cc-icon" style="background:${m.color}20;color:${m.color}">${m.icon}</div>
      <h3>${m.name}</h3>
      <p>${m.teoria.length} tópicos · ${m.youtube.length} vídeos · ${m.macetes.length} macetes</p>
      <button class="cc-btn">Abrir</button>
    `;
    card.addEventListener('click', () => renderCantinhoDetail(key));
    grid.appendChild(card);
  });
}

function renderCantinhoDetail(key) {
  const m = STUDY_CONTENT[key];
  const grid = document.getElementById('cantinhoGrid');
  const detail = document.getElementById('cantinhoDetail');
  grid.style.display = 'none';
  detail.style.display = 'block';

  const raioX = m.topFreq.map(t => `
    <div class="raiox-row">
      <div class="raiox-label">${t.topic}</div>
      <div class="raiox-bar"><div class="raiox-fill" style="width:${t.freq}%;background:${m.color}"></div></div>
      <div class="raiox-freq">${t.freq}% · ${t.vezes}</div>
    </div>
  `).join('');

  const teoria = m.teoria.map(t => `
    <div class="teoria-card">
      <h4>${escapeHtml(t.titulo)}</h4>
      <pre class="formula">${escapeHtml(t.formulas)}</pre>
      <p><strong>Exemplo:</strong> ${escapeHtml(t.exemplo)}</p>
      <p class="macete-line">💡 ${escapeHtml(t.macete)}</p>
    </div>
  `).join('');

  const macetes = m.macetes.map(mc => `<li>${escapeHtml(mc)}</li>`).join('');

  const yt = m.youtube.map(v => `
    <a class="yt-link" target="_blank" href="https://www.youtube.com/results?search_query=${encodeURIComponent(v.q)}">
      ▶️ ${escapeHtml(v.titulo)}
    </a>
  `).join('');

  detail.innerHTML = `
    <button class="cc-back" id="ccBack">← Voltar</button>
    <div class="cc-detail-header" style="background:${m.color}15;border-left:6px solid ${m.color}">
      <h2>${m.icon} ${m.name}</h2>
    </div>

    <h3 class="cc-section-title">📊 Raio-X — o que mais cai</h3>
    <div class="raiox">${raioX}</div>

    <h3 class="cc-section-title">📖 Teoria essencial</h3>
    <div class="teoria-grid">${teoria}</div>

    <h3 class="cc-section-title">🎯 Macetes da Vunesp</h3>
    <ul class="macetes-list">${macetes}</ul>

    <h3 class="cc-section-title">▶️ Vídeos no YouTube</h3>
    <div class="yt-grid">${yt}</div>
  `;
  document.getElementById('ccBack').addEventListener('click', renderCantinho);
  window.scrollTo(0, 0);
}

// ============= MODO ESTUDO =============
const topicFilter = document.getElementById('topicFilter');
const hideAnswered = document.getElementById('hideAnswered');
topicFilter.addEventListener('change', renderQuestions);
hideAnswered.addEventListener('change', renderQuestions);

document.getElementById('resetProgress').addEventListener('click', () => {
  if (confirm('Resetar todo o progresso? (não afeta sua redação)')) {
    progress = { answers: {}, simulados: [] };
    saveProgress(progress);
    renderQuestions();
  }
});

function renderQuestions() {
  const filter = topicFilter.value;
  const hide = hideAnswered.checked;
  const list = document.getElementById('questionList');
  list.innerHTML = '';

  let filtered = QUESTIONS;
  if (filter !== 'all') filtered = filtered.filter(q => q.topic === filter);
  if (hide) filtered = filtered.filter(q => {
    const a = progress.answers[q.n];
    return !(a && a.correct);
  });

  filtered.forEach(q => list.appendChild(buildQuestionCard(q)));
  updateStudyProgress();
}

function buildQuestionCard(q) {
  const div = document.createElement('div');
  div.className = 'question';
  div.id = `q-${q.n}`;

  const saved = progress.answers[q.n];

  div.innerHTML = `
    <div class="question-header">
      <span class="question-num">Questão ${String(q.n).padStart(2,'0')}</span>
      <span class="question-topic">${TOPIC_LABELS[q.topic]}</span>
    </div>
    <div class="question-statement">${escapeHtml(q.statement)}</div>
    ${q.image ? `<div class="question-image">${escapeHtml(q.image)}</div>` : ''}
    ${q.formula ? `<div class="question-formula">${escapeHtml(q.formula)}</div>` : ''}
    <div class="options"></div>
    <div class="explanation">
      <h4>💡 Explicação</h4>
      <p>${escapeHtml(q.explanation)}</p>
    </div>
  `;

  const opts = div.querySelector('.options');
  q.options.forEach((opt, i) => {
    const btn = document.createElement('div');
    btn.className = 'option';
    btn.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65+i)}</span>
      <span class="option-text">${escapeHtml(opt)}</span>
    `;
    btn.addEventListener('click', () => selectAnswer(q, i, div));
    opts.appendChild(btn);
  });

  // Restaurar estado salvo
  if (saved) {
    const optionEls = opts.querySelectorAll('.option');
    optionEls.forEach((el, i) => {
      if (i === q.answer) el.classList.add('correct');
      if (i === saved.selected && saved.selected !== q.answer) el.classList.add('wrong');
    });
    div.querySelector('.explanation').classList.add('show');
  }

  return div;
}

function selectAnswer(q, idx, container) {
  const optionEls = container.querySelectorAll('.option');
  optionEls.forEach(el => el.classList.remove('selected', 'correct', 'wrong'));

  const correct = idx === q.answer;
  optionEls[q.answer].classList.add('correct');
  if (!correct) optionEls[idx].classList.add('wrong');

  container.querySelector('.explanation').classList.add('show');

  progress.answers[q.n] = { selected: idx, correct, when: Date.now() };
  saveProgress(progress);
  updateStudyProgress();
}

function updateStudyProgress() {
  const total = QUESTIONS.length;
  const answered = Object.keys(progress.answers).length;
  const correct = Object.values(progress.answers).filter(a => a.correct).length;
  const pct = total ? (answered / total * 100) : 0;
  const acerto = answered ? Math.round(correct / answered * 100) : 0;
  document.getElementById('studyProgress').style.width = pct + '%';
  document.getElementById('studyProgressText').textContent = `${answered} de ${total} respondidas`;
  document.getElementById('studyAcerto').textContent = `${correct} acertos · ${acerto}%`;
}

// ============= MODO SIMULADO =============
let simState = null;

document.getElementById('startSim').addEventListener('click', startSimulado);

function startSimulado() {
  simState = {
    answers: {},
    current: 0,
    startTime: Date.now(),
    duration: 5 * 60 * 60 * 1000, // 5h
    timer: null
  };
  document.getElementById('simuladoIntro').style.display = 'none';
  document.getElementById('simuladoActive').style.display = 'block';
  document.getElementById('simuladoResult').style.display = 'none';

  buildSimGrid();
  renderSimQuestion();
  simState.timer = setInterval(updateSimTimer, 1000);
  updateSimTimer();
}

function buildSimGrid() {
  const grid = document.getElementById('simGrid');
  grid.innerHTML = '';
  QUESTIONS.forEach((q, i) => {
    const cell = document.createElement('div');
    cell.className = 'sim-grid-cell';
    cell.textContent = q.n;
    cell.addEventListener('click', () => { simState.current = i; renderSimQuestion(); });
    grid.appendChild(cell);
  });
}

function updateSimGrid() {
  const cells = document.querySelectorAll('.sim-grid-cell');
  cells.forEach((c, i) => {
    c.classList.toggle('answered', simState.answers[QUESTIONS[i].n] !== undefined);
    c.classList.toggle('current', i === simState.current);
  });
}

function renderSimQuestion() {
  const q = QUESTIONS[simState.current];
  const div = document.getElementById('simQuestion');
  const saved = simState.answers[q.n];

  div.innerHTML = `
    <div class="question">
      <div class="question-header">
        <span class="question-num">Questão ${String(q.n).padStart(2,'0')}</span>
        <span class="question-topic">${TOPIC_LABELS[q.topic]}</span>
      </div>
      <div class="question-statement">${escapeHtml(q.statement)}</div>
      ${q.image ? `<div class="question-image">${escapeHtml(q.image)}</div>` : ''}
      <div class="options" id="simOptions"></div>
    </div>
  `;

  const opts = div.querySelector('#simOptions');
  q.options.forEach((opt, i) => {
    const btn = document.createElement('div');
    btn.className = 'option' + (saved === i ? ' selected' : '');
    btn.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65+i)}</span>
      <span class="option-text">${escapeHtml(opt)}</span>
    `;
    btn.addEventListener('click', () => {
      simState.answers[q.n] = i;
      renderSimQuestion();
      updateSimGrid();
    });
    opts.appendChild(btn);
  });

  document.getElementById('simCounter').textContent = `${simState.current + 1}/${QUESTIONS.length}`;
  document.getElementById('simPrev').disabled = simState.current === 0;
  document.getElementById('simNext').disabled = simState.current === QUESTIONS.length - 1;
  updateSimGrid();
}

document.getElementById('simPrev').addEventListener('click', () => {
  if (simState.current > 0) { simState.current--; renderSimQuestion(); }
});
document.getElementById('simNext').addEventListener('click', () => {
  if (simState.current < QUESTIONS.length - 1) { simState.current++; renderSimQuestion(); }
});
document.getElementById('simFinish').addEventListener('click', () => {
  if (confirm('Finalizar simulado agora? Você não poderá voltar a responder.')) finishSim();
});

function updateSimTimer() {
  const elapsed = Date.now() - simState.startTime;
  const remaining = Math.max(0, simState.duration - elapsed);
  if (remaining === 0) { finishSim(); return; }
  const h = Math.floor(remaining / 3600000);
  const m = Math.floor((remaining % 3600000) / 60000);
  const s = Math.floor((remaining % 60000) / 1000);
  const t = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  const el = document.getElementById('simTimer');
  el.textContent = t;
  el.classList.toggle('warning', remaining < 1800000 && remaining >= 600000);
  el.classList.toggle('danger', remaining < 600000);
}

function finishSim() {
  clearInterval(simState.timer);
  const elapsed = Date.now() - simState.startTime;

  // Calcular resultados
  let correct = 0;
  const byTopic = {};
  Object.keys(TOPIC_LABELS).forEach(k => byTopic[k] = { c: 0, t: 0 });

  QUESTIONS.forEach(q => {
    byTopic[q.topic].t++;
    const ans = simState.answers[q.n];
    const isCorrect = ans === q.answer;
    if (isCorrect) { correct++; byTopic[q.topic].c++; }
  });

  // Salvar histórico
  progress.simulados.push({
    when: Date.now(),
    correct,
    total: QUESTIONS.length,
    duration: elapsed
  });
  saveProgress(progress);

  // Renderizar resultado
  const pct = Math.round(correct / QUESTIONS.length * 100);
  const h = Math.floor(elapsed / 3600000);
  const m = Math.floor((elapsed % 3600000) / 60000);

  let html = `
    <h2 style="text-align:center; margin-bottom:8px;">Simulado Finalizado!</h2>
    <div class="result-score">${correct}/${QUESTIONS.length}</div>
    <div class="result-summary">${pct}% de acerto · Tempo: ${h}h ${m}min</div>
    <h3 style="margin-bottom:12px;">Desempenho por matéria</h3>
    <div class="result-by-topic">
  `;
  Object.entries(byTopic).forEach(([k, v]) => {
    const p = Math.round(v.c / v.t * 100);
    html += `<div class="topic-result">
      <div>${TOPIC_LABELS[k]}</div>
      <div class="pct">${v.c}/${v.t}</div>
      <div style="color:var(--muted); font-size:13px;">${p}%</div>
    </div>`;
  });
  html += '</div>';

  html += '<h3 style="margin-bottom:12px;">Gabarito completo</h3><div id="simGabarito"></div>';
  html += `<div style="text-align:center; margin-top:24px;">
    <button class="cta primary" onclick="location.reload()">Fazer novo simulado</button>
  </div>`;

  document.getElementById('simuladoActive').style.display = 'none';
  document.getElementById('simuladoResult').style.display = 'block';
  document.getElementById('simuladoResult').innerHTML = html;

  const gab = document.getElementById('simGabarito');
  QUESTIONS.forEach(q => {
    const ans = simState.answers[q.n];
    const div = document.createElement('div');
    div.style.cssText = 'background:var(--bg); padding:12px; margin-bottom:8px; border-radius:6px; display:flex; justify-content:space-between; align-items:center;';
    const status = ans === undefined ? '⚪ Não respondida' :
                   ans === q.answer ? '✅ Correta' : '❌ Errada';
    const yourAns = ans !== undefined ? String.fromCharCode(65+ans) : '-';
    div.innerHTML = `
      <span><strong>Q${q.n}</strong> · ${TOPIC_LABELS[q.topic]}</span>
      <span>Sua: <strong>${yourAns}</strong> · Gabarito: <strong>${String.fromCharCode(65+q.answer)}</strong> · ${status}</span>
    `;
    gab.appendChild(div);
  });
}

// ============= ESTATÍSTICAS =============
function renderStats() {
  const container = document.getElementById('statsContent');
  const answers = progress.answers;
  const total = QUESTIONS.length;
  const answered = Object.keys(answers).length;
  const correct = Object.values(answers).filter(a => a.correct).length;
  const acerto = answered ? Math.round(correct/answered*100) : 0;

  let html = `
    <div class="stats-grid">
      <div class="stat-box"><div class="stat-num">${answered}</div><div class="stat-label">Questões respondidas</div></div>
      <div class="stat-box"><div class="stat-num">${correct}</div><div class="stat-label">Acertos</div></div>
      <div class="stat-box"><div class="stat-num">${acerto}%</div><div class="stat-label">Taxa de acerto</div></div>
      <div class="stat-box"><div class="stat-num">${progress.simulados.length}</div><div class="stat-label">Simulados feitos</div></div>
    </div>
    <div class="stats-card">
      <h3 style="margin-bottom:16px;">Desempenho por matéria</h3>
  `;

  Object.entries(TOPIC_LABELS).forEach(([k, label]) => {
    const qs = QUESTIONS.filter(q => q.topic === k);
    const ans = qs.filter(q => answers[q.n]);
    const c = ans.filter(q => answers[q.n].correct).length;
    const pct = ans.length ? Math.round(c/ans.length*100) : 0;
    html += `
      <div class="topic-bar">
        <div class="topic-bar-name">${label}</div>
        <div class="topic-bar-track">
          <div class="topic-bar-fill" style="width:${pct}%">${c}/${ans.length}</div>
          <div class="topic-bar-pct" style="color:${pct>50?'white':'var(--text)'}">${pct}%</div>
        </div>
      </div>
    `;
  });
  html += '</div>';

  // Histórico de simulados
  if (progress.simulados.length) {
    html += '<div class="stats-card"><h3 style="margin-bottom:12px;">Histórico de Simulados</h3>';
    progress.simulados.slice().reverse().forEach((s, i) => {
      const d = new Date(s.when);
      const dateStr = d.toLocaleDateString('pt-BR') + ' ' + d.toLocaleTimeString('pt-BR', {hour:'2-digit', minute:'2-digit'});
      const h = Math.floor(s.duration/3600000);
      const m = Math.floor((s.duration%3600000)/60000);
      const pct = Math.round(s.correct/s.total*100);
      html += `
        <div style="background:var(--bg); padding:12px; margin-bottom:8px; border-radius:6px; display:flex; justify-content:space-between;">
          <span>${dateStr}</span>
          <span><strong>${s.correct}/${s.total}</strong> (${pct}%) · ${h}h${m}min</span>
        </div>
      `;
    });
    html += '</div>';
  }

  // Sugestão
  const lowestTopic = Object.entries(TOPIC_LABELS).map(([k, label]) => {
    const qs = QUESTIONS.filter(q => q.topic === k);
    const ans = qs.filter(q => answers[q.n]);
    const c = ans.filter(q => answers[q.n].correct).length;
    return { k, label, pct: ans.length ? c/ans.length : 1, ans: ans.length };
  }).filter(t => t.ans > 0).sort((a,b) => a.pct - b.pct)[0];

  if (lowestTopic && lowestTopic.pct < 0.7) {
    html += `<div class="stats-card" style="background:#fff8e1; border-left:4px solid var(--yellow);">
      <h3>💡 Recomendação</h3>
      <p>Sua matéria mais fraca é <strong>${lowestTopic.label}</strong> (${Math.round(lowestTopic.pct*100)}% de acerto). Foque nela essa semana!</p>
    </div>`;
  }

  container.innerHTML = html;
}

// ============= REDAÇÃO =============
const redacaoText = document.getElementById('redacaoText');
const wordCount = document.getElementById('wordCount');
const lineCount = document.getElementById('lineCount');

redacaoText.value = localStorage.getItem(REDACAO_KEY) || '';
updateRedacaoCount();

redacaoText.addEventListener('input', updateRedacaoCount);

function updateRedacaoCount() {
  const t = redacaoText.value.trim();
  const words = t ? t.split(/\s+/).length : 0;
  const lines = Math.ceil(words / 10);
  wordCount.textContent = `${words} palavras`;
  lineCount.textContent = `~${lines} linhas`;
}

document.getElementById('saveRedacao').addEventListener('click', () => {
  localStorage.setItem(REDACAO_KEY, redacaoText.value);
  alert('Redação salva! ✅');
});
document.getElementById('clearRedacao').addEventListener('click', () => {
  if (confirm('Apagar a redação?')) {
    redacaoText.value = '';
    localStorage.removeItem(REDACAO_KEY);
    updateRedacaoCount();
  }
});

// Auto-save a cada 30s
setInterval(() => {
  if (redacaoText.value.trim()) localStorage.setItem(REDACAO_KEY, redacaoText.value);
}, 30000);

// ============= UTILS =============
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Inicializar
renderQuestions();
