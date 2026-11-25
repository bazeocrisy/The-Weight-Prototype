/* The Weight — the two-question wizard.
   Privacy: choices live only in memory on this page. Never written to the
   URL, cookies or storage, never sent anywhere. Browser Back works through
   history.pushState with only a step counter in the state object. */
(function () {
  "use strict";
  var TW = window.TW, e = TW.esc;
  function byId(id) { return document.getElementById(id); }

  var topicList = byId("topic-cards");
  var needList = byId("need-cards");
  var resultBox = byId("result");
  var controls = byId("wizard-controls");
  var statusEl = byId("wizard-status");
  var crumb = byId("step-2-crumb");
  var shortcuts = byId("shortcuts");
  var steps = { 1: byId("step-1"), 2: byId("step-2"), 3: byId("step-3") };

  var state = { step: 1, topic: null, need: null };
  var stack = [];

  function topicById(id) { for (var i = 0; i < TW.TOPICS.length; i++) if (TW.TOPICS[i].id === id) return TW.TOPICS[i]; }

  topicList.innerHTML = TW.TOPICS.map(function (t) {
    return '<li' + (t.wide ? ' class="cards__wide"' : "") + '><button type="button" class="choice choice--topic' + (t.wide ? " choice--unsure" : "") + '" data-topic="' + e(t.id) + '">' +
      '<span class="choice__icon">' + TW.icon(t.icon) + '</span><span class="choice__label">' + e(t.label) + "</span></button></li>";
  }).join("");

  topicList.addEventListener("click", function (ev) {
    var b = ev.target.closest("[data-topic]");
    if (!b) return;
    var t = topicById(b.getAttribute("data-topic"));
    push();
    state.topic = t.id; state.need = null; state.step = t.direct ? 3 : 2;
    render(true);
  });

  needList.addEventListener("click", function (ev) {
    var b = ev.target.closest("[data-need]");
    if (!b) return;
    push();
    state.need = b.getAttribute("data-need"); state.step = 3;
    render(true);
  });

  function push() {
    stack.push({ step: state.step, topic: state.topic, need: state.need });
    try { history.pushState({ twStep: stack.length }, ""); } catch (err) { /* ignore */ }
  }
  function back() {
    var prev = stack.pop();
    if (!prev) return;
    state = prev;
    render(true);
  }

  byId("btn-back").addEventListener("click", function () {
    if (history.state && history.state.twStep) history.back(); else back();
  });
  var ignorePop = false;
  window.addEventListener("popstate", function () {
    if (ignorePop) { ignorePop = false; return; }
    if (stack.length) back();
  });
  byId("btn-restart").addEventListener("click", function () {
    var n = stack.length;
    stack = [];
    state = { step: 1, topic: null, need: null };
    render(true);
    if (n && history.state && history.state.twStep) { ignorePop = true; history.go(-n); }
  });

  function render(moveFocus) {
    var s = state.step;
    Object.keys(steps).forEach(function (k) {
      var on = Number(k) === s;
      steps[k].hidden = !on;
      if (on && moveFocus) { steps[k].classList.remove("is-entering"); void steps[k].offsetWidth; steps[k].classList.add("is-entering"); }
    });
    controls.hidden = s === 1;
    if (shortcuts) shortcuts.hidden = s !== 1;

    var t = state.topic ? topicById(state.topic) : null;
    var skipped = t && t.direct;

    document.querySelectorAll("[data-progress]").forEach(function (li) {
      var n = Number(li.getAttribute("data-progress"));
      li.classList.toggle("is-current", n === s);
      li.classList.toggle("is-done", n < s);
      li.classList.toggle("is-skipped", n === 2 && !!skipped && s === 3);
      if (n === s) li.setAttribute("aria-current", "step"); else li.removeAttribute("aria-current");
    });
    var pt = byId("progress-text");
    if (pt) pt.textContent = s === 3 ? "Your next step" : "Step " + s + " of 2";

    var announce = "";
    if (s === 1) announce = "Step 1 of 2: What’s weighing on you?";
    else if (s === 2) {
      crumb.innerHTML = TW.icon(t.icon) + "<span>" + e(t.label) + "</span>";
      needList.innerHTML = t.needs.map(function (id) {
        var n = TW.NEEDS[id];
        return '<li><button type="button" class="choice choice--need" data-need="' + e(id) + '">' +
          '<span class="choice__icon">' + TW.icon(n.icon) + '</span><span class="choice__text"><span class="choice__label">' + e(n.label) +
          '</span><span class="choice__hint">' + e(n.hint) + "</span></span>" + TW.icon("arrow", "choice__arrow") + "</button></li>";
      }).join("");
      announce = "Step 2 of 2: What would help right now?";
    } else {
      var key = skipped ? t.direct : state.topic + ":" + state.need;
      resultBox.innerHTML = renderResult(TW.RESULTS[key], t);
      announce = "Your next step is ready.";
    }
    statusEl.textContent = announce;

    if (moveFocus) {
      var h = steps[s].querySelector("h2");
      if (h) {
        h.focus({ preventScroll: true });
        var top = byId("wizard").getBoundingClientRect().top + window.pageYOffset;
        var bar = document.querySelector(".site-header");
        var off = bar && getComputedStyle(bar).position === "sticky" ? bar.offsetHeight : 0;
        window.scrollTo(0, Math.max(0, top - off - 8));
      }
    }
  }

  function actionData(a) {
    if (a.res) { var r = TW.RESOURCES[a.res]; return { kind: "res", r: r, name: r.name, who: r.who, short: r.short, note: a.note }; }
    var tool = TW.TOOLS[a.tool];
    return { kind: "tool", tool: tool, name: tool.name, who: tool.who, short: tool.short, note: a.note };
  }

  function renderResult(res, topic) {
    if (!res) return '<h2 class="step__title" tabindex="-1">Your next step</h2><p>Call or text <a href="tel:988">988</a>, or <a href="resources.html">see all resources</a>.</p>';
    var p = actionData(res.primary);
    var picked = e(topic.label) + (state.need ? " · " + e(TW.NEEDS[state.need].label) : "");
    var h = "";
    h += '<p class="step__crumb">' + TW.icon(topic.icon) + "<span>" + picked + "</span></p>";
    h += '<h2 class="step__title result__title" tabindex="-1">' + e(res.title) + "</h2>";
    h += '<p class="result__lead">' + e(res.lead) + "</p>";

    h += '<article class="primary" aria-labelledby="primary-name">';
    h += '<div class="primary__head"><p class="primary__tag">Do this first</p>';
    h += '<h3 class="primary__name" id="primary-name">' + e(p.name) + "</h3>";
    h += '<p class="primary__who">' + e(p.who) + "</p></div>";
    h += '<div class="btn-row btn-row--primary">' + (p.kind === "res" ? TW.resourceButtons(p.r, { dark: true }) : TW.toolButton(p.tool, { dark: true })) + "</div>";
    if (res.next && res.next.length) {
      h += '<div class="next"><p class="next__title">What happens next</p><ul class="next__list" role="list">' +
        res.next.slice(0, 2).map(function (n) { return "<li>" + TW.icon("check") + "<span>" + e(n) + "</span></li>"; }).join("") + "</ul></div>";
    }
    if (p.kind === "res") h += TW.badge(p.r);
    h += "</article>";

    var sec = (res.secondary || []).slice(0, 2).map(actionData);
    if (sec.length) {
      h += '<h3 class="also__title">Or try</h3><ul class="also" role="list">';
      sec.forEach(function (s) {
        h += '<li class="also__item"><div class="also__body"><h4 class="also__name">' + e(s.name) + "</h4>" +
          (s.note ? '<p class="also__note">' + e(s.note) + "</p>" : '<p class="also__short">' + e(s.short) + "</p>") + "</div>" +
          '<div class="btn-row">' + (s.kind === "res" ? TW.resourceButtons(s.r, { secondary: true, compact: true, max: 2 }) : TW.toolButton(s.tool, { secondary: true })) + "</div></li>";
      });
      h += "</ul>";
    }
    h += '<p class="result__fine">The Weight doesn’t run these services and isn’t a therapy provider or emergency service. In an emergency, call <a href="tel:911">911</a>.</p>';
    return h;
  }

  render(false);
})();
