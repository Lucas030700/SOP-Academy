const INDEX_URL = "./data/lectures-index.json";
const APP_VERSION = "4";
const STORE = { progress: "sop-academy-progress-v1", bookmarks: "sop-academy-bookmarks-v1" };
const state = { modules: [], topics: [], filter: "all", query: "", activeTopic: null, activeModule: null };
const $ = (id) => document.getElementById(id);
const readStore = (key) => { try { return JSON.parse(localStorage.getItem(key) || "[]"); } catch { return []; } };
const writeStore = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const progress = () => readStore(STORE.progress);
const bookmarks = () => readStore(STORE.bookmarks);
const slug = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

function setConnection() {
  const el = $("connection");
  const online = navigator.onLine;
  el.classList.toggle("online", online);
  el.innerHTML = online ? "<i></i> Online" : "<i></i> Offline";
}
function updateProgress() {
  const done = progress().length;
  const total = state.topics.length;
  $("progress-count").textContent = `${done} / ${total} topics`;
  $("progress-bar").style.width = total ? `${Math.min(100, done / total * 100)}%` : "0%";
  $("progress-caption").textContent = total ? (done ? "Keep going. Every completed topic builds your planning toolkit." : "Your learning progress will appear here.") : "Progress tracking is ready. Your lectures will populate this once added.";
}
function moduleStatus(module) {
  const ts = state.topics.filter(t => Number(t.module) === Number(module.moduleNumber));
  const done = ts.filter(t => progress().includes(t.id)).length;
  return { total: ts.length, done, percent: ts.length ? done / ts.length * 100 : 0 };
}
function renderModules() {
  const list = $("module-list");
  const q = slug(state.query);
  const visible = state.modules.filter(m => {
    const topics = state.topics.filter(t => Number(t.module) === Number(m.moduleNumber));
    const text = slug([m.title, ...topics.map(t => t.title)].join(" "));
    const matches = !q || text.includes(q);
    const stats = moduleStatus(m);
    const filterMatches = state.filter === "all" ||
      (state.filter === "in-progress" && stats.done > 0 && stats.done < stats.total) ||
      (state.filter === "bookmarked" && topics.some(t => bookmarks().includes(t.id)));
    return matches && filterMatches;
  });
  $("module-count").textContent = `${state.modules.length} modules`;
  if (!visible.length) {
    list.innerHTML = '<div class="empty"><strong>No matching modules</strong><p>Try another search or switch the library filter.</p></div>';
    return;
  }
  list.innerHTML = visible.map(m => {
    const st = moduleStatus(m);
    const title = m.title || `Module ${String(m.moduleNumber).padStart(2,"0")}`;
    const desc = m.description || (st.total ? `${st.total} learning topics` : "Module overview and topics awaiting import");
    return `<button class="module-card" data-module="${m.moduleNumber}">
      <div class="module-top"><span class="module-number">MODULE ${String(m.moduleNumber).padStart(2,"0")}</span><span class="module-state">${st.total && st.done === st.total ? "COMPLETED" : st.done ? "IN PROGRESS" : ""}</span></div>
      <h3>${escapeHTML(title)}</h3><p>${escapeHTML(desc)}</p>
      <div class="module-foot"><span>${st.total ? `${st.done}/${st.total} topics complete` : "Content not imported yet"}</span><span class="mini-track"><span style="width:${st.percent}%"></span></span></div>
    </button>`;
  }).join("");
  list.querySelectorAll("[data-module]").forEach(btn => btn.addEventListener("click", () => openModule(Number(btn.dataset.module))));
}
function escapeHTML(value) { return String(value).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c])); }
function openModule(number) {
  const mod = state.modules.find(m => Number(m.moduleNumber) === number);
  const topics = state.topics.filter(t => Number(t.module) === number);
  if (!topics.length) {
    $("lecture-kicker").textContent = `MODULE ${String(number).padStart(2,"0")}`;
    $("lecture-title").textContent = mod?.title || `Module ${number}`;
    $("lecture-body").innerHTML = "<p><strong>No lectures have been imported into this module yet.</strong></p><p>Once its topic conversations are published to the GitHub repository, they will appear here after the library is refreshed.</p>";
    $("bookmark-button").hidden = true;
    $("complete-button").hidden = true;
  } else {
    $("lecture-kicker").textContent = `MODULE ${String(number).padStart(2,"0")}`;
    $("lecture-title").textContent = mod?.title || `Module ${number}`;
    $("lecture-body").innerHTML = topics.map(t => `<article class="topic-row"><h3>${escapeHTML(t.topicNumber || "")} · ${escapeHTML(t.title)}</h3><p>${escapeHTML(t.summary || "Complete topic lecture")}</p><button class="button secondary" data-topic="${escapeHTML(t.id)}">Open lecture</button></article>`).join("");
    $("lecture-body").querySelectorAll("[data-topic]").forEach(b => b.addEventListener("click", () => openTopic(b.dataset.topic)));
    $("bookmark-button").hidden = true;
    $("complete-button").hidden = true;
  }
  $("lecture-dialog").showModal();
}
async function openTopic(id) {
  const topic = state.topics.find(t => t.id === id);
  if (!topic) return;
  state.activeTopic = topic;
  $("lecture-dialog").close();
  $("shell")?.setAttribute("hidden", "");
  document.querySelector(".topbar").hidden = true;
  $("reader-view").hidden = false;
  document.body.classList.add("reading-mode");
  $("reader-kicker").textContent = `MODULE ${topic.module} · TOPIC ${topic.topicNumber}`;
  $("reader-title").textContent = topic.title;
  $("reader-content").innerHTML = '<p class="reader-loading">Loading lecture…</p>';
  $("reader-content").scrollTop = 0;
  $("reader-connection").textContent = navigator.onLine ? "ONLINE" : "OFFLINE";
  $("reader-bookmark").hidden = false;
  $("reader-complete").hidden = false;
  try {
    const lectureUrl = new URL(topic.path, location.href).href;
    const response = await fetch(lectureUrl, { cache: "no-store" });
    if (!response.ok) throw new Error(`Lecture request failed (${response.status})`);
    const markdown = await response.text();
    const lectureMarkdown = markdown.replace(/^---\\r?\\n[\\s\\S]*?\\r?\\n---\\r?\\n/, "");
    $("reader-content").innerHTML = renderLectureMarkdown(lectureMarkdown);
    $("reader-content").scrollTop = 0;
  } catch (error) {
    $("reader-content").innerHTML = `<div class="reader-error"><strong>Unable to load this lecture.</strong><p>${escapeHTML(error.message)}</p><button class="button secondary" id="reader-retry" type="button">Try again</button></div>`;
    $("reader-retry").addEventListener("click", () => openTopic(id));
  }
  const isBookmarked = bookmarks().includes(id);
  $("reader-bookmark").textContent = isBookmarked ? "★ Bookmarked" : "☆ Bookmark";
  $("reader-complete").textContent = progress().includes(id) ? "Completed ✓" : "Mark complete";
  $("reader-bookmark").onclick = () => toggleBookmark(id);
  $("reader-complete").onclick = () => toggleComplete(id);
}
function closeReader() {
  $("reader-view").hidden = true;
  document.body.classList.remove("reading-mode");
  document.querySelector(".topbar").hidden = false;
  renderModules();
  if (state.activeModule !== null) openModule(state.activeModule);
}
function renderLectureMarkdown(markdown) {
  if (!window.marked || !window.katex) {
    throw new Error("The lecture formatting libraries could not be loaded. Please reconnect and refresh.");
  }
  const mathBlocks = [];
  let source = markdown;
  const saveMath = (tex, display) => {
    const token = "SOPMATH" + mathBlocks.length + "TOKEN";
    mathBlocks.push({ token, tex, display });
    return display ? "\n\n" + token + "\n\n" : token;
  };
  source = source
    .replace(/\\\[([\s\S]*?)\\\]/g, (_, tex) => saveMath(tex, true))
    .replace(/\\\(([\s\S]*?)\\\)/g, (_, tex) => saveMath(tex, false))
    .replace(/\$\$([\s\S]*?)\$\$/g, (_, tex) => saveMath(tex, true))
    .replace(/(^|[^$])\$([^$\n]+)\$/g, (_, before, tex) => before + saveMath(tex, false));
  marked.setOptions({ gfm: true, breaks: false });
  let rendered = marked.parse(source, { async: false });
  for (const item of mathBlocks) {
    let equation;
    try {
      equation = katex.renderToString(item.tex.trim(), {
        displayMode: item.display,
        throwOnError: false,
        strict: "ignore",
        trust: false
      });
    } catch (error) {
      equation = "<code>" + escapeHTML(item.tex) + "</code>";
    }
    if (item.display) {
      rendered = rendered.replace("<p>" + item.token + "</p>", equation);
      rendered = rendered.replace(item.token, equation);
    } else {
      rendered = rendered.replace(item.token, equation);
    }
  }
  return rendered;
}
function toggleBookmark(id) {
  const items = bookmarks(); const next = items.includes(id) ? items.filter(x => x !== id) : [...items,id];
  writeStore(STORE.bookmarks,next); $("bookmark-button").textContent = next.includes(id) ? "★ Bookmarked" : "☆ Bookmark"; renderModules();
}
function toggleComplete(id) {
  const items = progress(); const next = items.includes(id) ? items.filter(x => x !== id) : [...items,id];
  writeStore(STORE.progress,next); $("complete-button").textContent = next.includes(id) ? "Completed ✓" : "Mark complete"; updateProgress(); renderModules();
}
async function loadLibrary() {
  try {
    const response = await fetch(INDEX_URL, { cache: "no-store" });
    if (!response.ok) throw new Error("Index not available");
    const data = await response.json();
    state.modules = data.modules || [];
    state.topics = data.topics || [];
  } catch {
    state.modules = Array.from({length:10},(_,i)=>({moduleNumber:i+1,title:null}));
    state.topics = [];
  }
  updateProgress(); renderModules();
}
$("search").addEventListener("input", e => { state.query = e.target.value; renderModules(); });
document.querySelectorAll(".filter").forEach(btn => btn.addEventListener("click", () => {
  state.filter = btn.dataset.filter;
  document.querySelectorAll(".filter").forEach(b => { const active=b===btn; b.classList.toggle("active",active); b.setAttribute("aria-selected",String(active)); });
  renderModules();
}));
$("close-dialog").addEventListener("click", () => $("lecture-dialog").close());\n$("reader-back").addEventListener("click", closeReader);
$("lecture-dialog").addEventListener("click", e => { if(e.target === $("lecture-dialog")) $("lecture-dialog").close(); });
document.addEventListener("keydown",e=>{if(e.key==="/" && !["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){e.preventDefault();$("search").focus();}});
window.addEventListener("online",()=>{setConnection(); if(!$("reader-view").hidden) $("reader-connection").textContent="ONLINE";}); window.addEventListener("offline",()=>{setConnection(); if(!$("reader-view").hidden) $("reader-connection").textContent="OFFLINE";});
setConnection(); $("version").textContent = `Library v${APP_VERSION}`; loadLibrary();
if ("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js", { updateViaCache: "none" }).catch(()=>{}));