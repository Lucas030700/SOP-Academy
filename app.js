const INDEX_URL = "./data/lectures-index.json";
const APP_VERSION = "4";
const STORE = { progress: "sop-academy-progress-v1", bookmarks: "sop-academy-bookmarks-v1" };
const state = { modules: [], topics: [], view: "modules", query: "", activeTopic: null, activeModule: null };
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
    return matches;
  });
  $("module-count").textContent = `${visible.length} / ${state.modules.length} modules`;
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
const FORMULAS = [
  {category:"Demand planning",name:"Average Demand",formula:"Average Demand = Total Demand ÷ Number of Periods",why:"Averages demand across the selected periods so planners have a simple baseline. Use periods of comparable length and investigate unusual one-time demand before relying on the average.",example:"If demand over 3 months is 900, 1,050 and 1,050 units, average monthly demand = 3,000 ÷ 3 = 1,000 units/month."},
  {category:"Demand planning",name:"Forecast Error",formula:"Forecast Error = Actual Demand − Forecast Demand",why:"Shows the direction and size of the forecast miss. A positive result means actual demand was higher than forecast; a negative result means the forecast was higher.",example:"Actual = 1,100 units; forecast = 1,000 units. Error = +100 units, meaning demand exceeded the forecast by 100."},
  {category:"Demand planning",name:"Forecast Accuracy (simple absolute error form)",formula:"Accuracy = 1 − (|Actual − Forecast| ÷ Actual)",why:"Converts absolute forecast error into an intuitive percentage for a single period. This form needs care when actual demand is zero and is not the only accepted accuracy measure.",example:"Actual = 1,000; forecast = 900. Accuracy = 1 − (100 ÷ 1,000) = 90%."},
  {category:"Demand planning",name:"WAPE",formula:"WAPE = Σ|Actual − Forecast| ÷ ΣActual × 100%",why:"Measures total absolute forecast error relative to total actual demand across several items or periods. Aggregation makes it useful when comparing a portfolio with different demand volumes.",example:"Total absolute error = 240 units; total actual demand = 4,000 units. WAPE = 240 ÷ 4,000 = 6%."},
  {category:"Demand planning",name:"Forecast Bias",formula:"Bias % = Σ(Forecast − Actual) ÷ ΣActual × 100%",why:"Detects a repeated tendency to overforecast or underforecast. Positive bias under this convention means forecasts are higher than actual demand; negative bias means forecasts are lower.",example:"Forecast total = 5,300; actual total = 5,000. Bias = 300 ÷ 5,000 = +6%."},
  {category:"Inventory",name:"Average Daily Usage (ADU)",formula:"ADU = Total Usage ÷ Number of Days",why:"Converts total consumption into a daily rate, allowing inventory quantities to be compared with time-based demand. Decide whether the denominator is calendar days or working days and use it consistently.",example:"A material consumed 2,400 kg over 30 calendar days has ADU = 80 kg/day."},
  {category:"Inventory",name:"Days of Supply (DOS)",formula:"DOS = Available Inventory ÷ Average Daily Usage",why:"Estimates how long current usable inventory can support demand or consumption at the assumed rate. It is a coverage indicator, not a promise that stock will last if demand or supply changes.",example:"Available inventory = 1,200 units; ADU = 100 units/day. DOS = 12 days."},
  {category:"Inventory",name:"Inventory Position",formula:"Inventory Position = On-hand + On-order − Allocated − Backorders",why:"Looks beyond the physical stock on the shelf by including confirmed incoming supply and known commitments. It helps prevent unnecessary replenishment or false confidence in stock availability.",example:"On-hand 500 + on-order 300 − allocated 150 − backorders 50 = 600 units."},
  {category:"Inventory",name:"Safety Stock (basic buffer-days method)",formula:"Safety Stock = ADU × Buffer Days",why:"Creates a simple inventory cushion for uncertainty in demand or replenishment. Buffer days are a planning assumption, not a universal standard; more advanced methods use variability and service-level targets.",example:"ADU = 80 units/day and buffer = 4 days. Safety stock = 320 units."},
  {category:"Inventory",name:"Reorder Point (ROP)",formula:"ROP = Demand During Lead Time + Safety Stock",why:"Signals when replenishment should be initiated so expected demand during supplier or production lead time is covered, with an additional protection buffer.",example:"ADU = 80 units/day; lead time = 10 days; safety stock = 320. ROP = 800 + 320 = 1,120 units."},
  {category:"Inventory",name:"Inventory Turnover",formula:"Inventory Turnover = Cost of Goods Sold ÷ Average Inventory Value",why:"Indicates how many times inventory value is consumed or sold over a period. Use matching time periods and valuation bases; a high number is not automatically good if service suffers.",example:"Annual COGS = ₱12 million; average inventory = ₱2 million. Turnover = 6 times/year."},
  {category:"Inventory",name:"Average Inventory",formula:"Average Inventory = (Beginning Inventory + Ending Inventory) ÷ 2",why:"Smooths the effect of comparing only one opening or closing snapshot. For highly seasonal or volatile inventory, use more frequent averages instead of only two points.",example:"Beginning inventory = ₱1.8M; ending = ₱2.2M. Average = ₱2.0M."},
  {category:"Supply and capacity",name:"Capacity Utilization",formula:"Capacity Utilization = Actual Output ÷ Available Capacity × 100%",why:"Shows how much of the defined capacity is being used. The result is meaningful only when output and capacity use the same units, time period, product mix assumptions and resource definition.",example:"Actual output = 8,000 units; available capacity = 10,000 units. Utilization = 80%."},
  {category:"Supply and capacity",name:"Production Requirement",formula:"Required Production = Demand + Target Ending Inventory − Beginning Inventory",why:"Balances the units needed to satisfy demand with the inventory position the business wants to carry at period end. Adjust the demand definition for backlog, scrap, yield or other planning rules where applicable.",example:"Demand = 12,000; target ending inventory = 2,000; beginning inventory = 3,000. Required production = 11,000 units."},
  {category:"Supply and capacity",name:"Supply-Demand Gap",formula:"Supply-Demand Gap = Available Supply − Demand",why:"Quickly identifies whether planned supply covers demand. A negative result indicates a shortage; a positive result indicates potential surplus, subject to timing and inventory usability.",example:"Available supply = 9,500 units; demand = 10,200. Gap = −700 units, a 700-unit shortage."},
  {category:"Supply and capacity",name:"Lead Time Demand",formula:"Lead Time Demand = ADU × Lead Time",why:"Estimates the quantity expected to be consumed while waiting for replenishment. ADU and lead time must use compatible day definitions.",example:"ADU = 80 kg/day; lead time = 12 days. Lead-time demand = 960 kg."},
  {category:"Financial",name:"Revenue",formula:"Revenue = Units Sold × Selling Price per Unit",why:"Connects the volume plan and price assumption to expected sales value. Use the relevant net selling price and avoid treating production volume as sales unless the plan explicitly assumes shipment.",example:"5,000 units × ₱250/unit = ₱1,250,000 revenue."},
  {category:"Financial",name:"Gross Profit",formula:"Gross Profit = Revenue − Cost of Goods Sold",why:"Shows the amount remaining after the cost of products sold, before operating expenses and other items. It links volume, price, product mix and manufacturing cost to financial performance.",example:"Revenue = ₱1.25M; COGS = ₱900,000. Gross profit = ₱350,000."},
  {category:"Financial",name:"Gross Margin",formula:"Gross Margin % = Gross Profit ÷ Revenue × 100%",why:"Expresses gross profit as a share of revenue, making it easier to compare profitability across periods or product groups with different sales values.",example:"Gross profit = ₱350,000; revenue = ₱1.25M. Gross margin = 28%."},
  {category:"Financial",name:"Inventory Carrying Cost",formula:"Carrying Cost = Average Inventory Value × Annual Carrying Cost Rate",why:"Estimates the annual cost of holding inventory, including applicable capital, storage, insurance, handling and obsolescence components. The rate should come from company Finance assumptions.",example:"Average inventory = ₱2M; annual carrying rate = 18%. Estimated annual carrying cost = ₱360,000."},
  {category:"Financial",name:"Budget Variance",formula:"Variance = Actual (or Forecast) − Budget",why:"Quantifies the gap against the approved reference. Always label whether a positive variance is favorable or unfavorable because the interpretation differs for revenue, cost and profit.",example:"Forecast cost = ₱1.08M; budget = ₱1.00M. Variance = +₱80,000, unfavorable for cost."}
];
const GLOSSARY = [
  ["S&OP","Sales & Operations Planning","A cross-functional business process that aligns demand, supply and financial plans into one agreed plan, usually reviewed on a regular cycle."],
  ["Demand Plan","A time-phased view of expected customer demand, incorporating the statistical forecast and relevant commercial intelligence."],
  ["Supply Plan","A time-phased view of how the organization intends to meet demand using production, procurement, inventory, capacity and other resources."],
  ["Consensus Forecast","A forecast agreed across relevant functions after reviewing statistical outputs, market information, customer input and business assumptions."],
  ["Demand Review","The S&OP meeting where demand assumptions, forecast changes, risks and opportunities are reviewed and an agreed demand plan is established."],
  ["Supply Review","The meeting where the organization tests whether capacity, materials, suppliers, labor and inventory can support the demand plan."],
  ["Pre-S&OP","A cross-functional reconciliation meeting that resolves issues where possible and prepares scenarios and recommendations for executive decisions."],
  ["Executive S&OP","The leadership review where major trade-offs and escalated issues are decided and the integrated business plan is approved."],
  ["S&OE","Sales and Operations Execution. The shorter-term process for managing near-term execution issues and deviations from the S&OP plan."],
  ["Demand","The quantity of a product or service customers want or are expected to request during a defined period."],
  ["Forecast","An estimate of future demand based on historical patterns, assumptions, market intelligence and relevant influencing factors."],
  ["Forecast Accuracy","A measure of how close forecast values are to actual demand, using a clearly defined calculation method."],
  ["Forecast Bias","A persistent tendency for forecasts to be higher or lower than actual demand."],
  ["Lead Time","The elapsed time between initiating a replenishment or production activity and having the required item or output available."],
  ["Safety Stock","Inventory held as a buffer against uncertainty in demand, supply or replenishment timing."],
  ["Days of Supply (DOS)","An estimate of how many days available inventory can cover expected usage at a defined daily consumption rate."],
  ["Reorder Point (ROP)","The inventory position at which replenishment should be triggered, commonly covering lead-time demand plus safety stock."],
  ["Backorder","A customer order that has not yet been fulfilled and remains outstanding for future delivery."],
  ["Capacity","The amount of output a resource, process, line or facility can produce within a defined time under stated assumptions."],
  ["Bottleneck","The constrained resource or process step that limits the throughput of the wider production system."],
  ["Utilization","The proportion of defined available capacity that is being used during a period."],
  ["Inventory Position","A planning measure combining on-hand stock with incoming supply and subtracting allocations or other commitments, according to the company definition."],
  ["Working Capital","Funds tied up in day-to-day operations. Inventory is one component and can materially affect cash availability."],
  ["COGS","Cost of Goods Sold. The accounting cost assigned to products sold during a period."],
  ["Gross Margin","Gross profit expressed as a percentage of revenue."],
  ["Scenario Planning","The comparison of alternative future conditions and responses, such as base, upside and downside demand or supply cases."],
  ["Trade-off","A decision that balances competing objectives, such as service, cost, capacity, inventory, risk and profitability."],
  ["Demand-Supply Gap","The difference between available or planned supply and demand for a defined product and period."],
  ["ABC Classification","An inventory segmentation method that groups items by their relative annual consumption value, often to differentiate control effort."],
  ["XYZ Classification","An inventory segmentation method that groups items by demand variability or predictability."],
  ["Obsolete Inventory","Stock that is no longer expected to be used or sold, often because of product changes, discontinuation or loss of demand."]
];
function renderReferenceLibraries() {
  const q = slug(state.query);
  const formulaItems = FORMULAS.filter(x => !q || slug([x.category,x.name,x.formula,x.why,x.example].join(" ")).includes(q));
  $("formula-list").innerHTML = formulaItems.length ? formulaItems.map((x,i)=>`<details class="formula-item"><summary><span>${escapeHTML(x.name)}</span><i aria-hidden="true">+</i></summary><div class="formula-detail"><span class="formula-category">${escapeHTML(x.category)}</span><div class="formula-equation">${escapeHTML(x.formula)}</div><p><strong>Why this formula works</strong><br>${escapeHTML(x.why)}</p><p><strong>Example</strong><br>${escapeHTML(x.example)}</p></div></details>`).join("") : '<div class="empty">No matching formulas found.</div>';
  const terms = GLOSSARY.filter(x => !q || slug(x.join(" ")).includes(q));
  $("glossary-list").innerHTML = terms.length ? terms.map(x=>`<article class="glossary-card"><h3>${escapeHTML(x[0])}</h3><p class="glossary-full">${escapeHTML(x[1])}</p><p>${escapeHTML(x[2])}</p></article>`).join("") : '<div class="empty">No matching S&OP terms found.</div>';
  if(state.view==="formulas") $("module-count").textContent = `${formulaItems.length} formulas`;
  if(state.view==="glossary") $("module-count").textContent = `${terms.length} terms`;
}
function setView(view) {
  state.view = view;
  const labels = {modules:"Learning modules",formulas:"Formula library",glossary:"S&OP glossary"};
  $("section-title").textContent = labels[view];
  $("module-list").hidden = view!=="modules";
  $("formula-list").hidden = view!=="formulas";
  $("glossary-list").hidden = view!=="glossary";
  document.querySelectorAll(".library-tab").forEach(btn=>{
    const active=btn.dataset.view===view;
    btn.classList.toggle("active",active);
    btn.setAttribute("aria-selected",String(active));
  });
  $("search").placeholder = view==="modules" ? "Search modules or topics" : view==="formulas" ? "Search formulas or categories" : "Search S&OP terms";
  renderModules();
  renderReferenceLibraries();
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
  document.querySelector(".shell").hidden = true;
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
    const lectureMarkdown = markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
    $("reader-content").innerHTML = renderLectureMarkdown(lectureMarkdown);
    $("reader-content").scrollTop = 0;
    requestAnimationFrame(updateReaderProgress);
  } catch (error) {
    $("reader-content").innerHTML = `<div class="reader-error"><strong>Unable to load this lecture.</strong><p>${escapeHTML(error.message)}</p><button class="button secondary" id="reader-retry" type="button">Try again</button></div>`;
    $("reader-retry").addEventListener("click", () => openTopic(id));
    requestAnimationFrame(updateReaderProgress);
  }
  const isBookmarked = bookmarks().includes(id);
  $("reader-bookmark").textContent = isBookmarked ? "★ Bookmarked" : "☆ Bookmark";
  $("reader-complete").textContent = progress().includes(id) ? "Completed ✓" : "Mark complete";
  $("reader-bookmark").onclick = () => toggleBookmark(id);
  $("reader-complete").onclick = () => toggleComplete(id);
}
function updateReaderProgress() {
  const content = $("reader-content");
  const maxScroll = Math.max(0, content.scrollHeight - content.clientHeight);
  const ratio = maxScroll > 0 ? Math.min(1, Math.max(0, content.scrollTop / maxScroll)) : 1;
  const remaining = Math.max(0, Math.ceil((1 - ratio) * 100));
  $("reader-progress-fill").style.height = `${ratio * 100}%`;
  $("reader-progress").setAttribute("aria-label", `${Math.round(ratio * 100)} percent read`);
}
function closeReader() {
  $("reader-view").hidden = true;
  document.body.classList.remove("reading-mode");
  document.querySelector(".topbar").hidden = false;
  document.querySelector(".shell").hidden = false;
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
    .replace(/(^|[^$])\$([^\n$]+)\$/g, (_, before, tex) => before + saveMath(tex, false));
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
  writeStore(STORE.progress,next); $("complete-button").textContent = next.includes(id) ? "Completed ✓" : "Mark complete"; updateProgress(); setView(state.view);
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
$("search").addEventListener("input", e => { state.query = e.target.value; renderModules(); renderReferenceLibraries(); });
document.querySelectorAll(".library-tab").forEach(btn => btn.addEventListener("click", () => setView(btn.dataset.view)));
$("close-dialog").addEventListener("click", () => $("lecture-dialog").close());
$("reader-back").addEventListener("click", closeReader);
$("reader-content").addEventListener("scroll", updateReaderProgress, { passive: true });
window.addEventListener("resize", () => { if (!$("reader-view").hidden) updateReaderProgress(); });
$("lecture-dialog").addEventListener("click", e => { if(e.target === $("lecture-dialog")) $("lecture-dialog").close(); });
document.addEventListener("keydown",e=>{if(e.key==="/" && !["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){e.preventDefault();$("search").focus();}});
window.addEventListener("online",()=>{setConnection(); if(!$("reader-view").hidden) $("reader-connection").textContent="ONLINE";}); window.addEventListener("offline",()=>{setConnection(); if(!$("reader-view").hidden) $("reader-connection").textContent="OFFLINE";});
setConnection(); $("version").textContent = `Library v${APP_VERSION}`; loadLibrary();
if ("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js", { updateViaCache: "none" }).catch(()=>{}));