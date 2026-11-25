/* Renders the resource directory from TW.RESOURCES (assets/js/resources.js). */
(function () {
  "use strict";
  var TW = window.TW, e = TW.esc;
  var root = document.getElementById("resource-groups");
  if (!root) return;

  var GROUPS = [
    { id: "talk", icon: "phone", title: "Talk to someone now", lead: "Free, confidential and open 24/7." },
    { id: "practical", icon: "list", title: "Practical help", lead: "Housing, food, bills, work, family and legal questions. Call ahead; hours change." },
    { id: "counseling", icon: "clipboard", title: "Counseling", lead: "For ongoing support. A counselor is one option, never a requirement." },
    { id: "info", icon: "globe", title: "Good to know", lead: "Official information worth a look before a big decision." },
    { id: "safety", icon: "lock", title: "Safety", lead: "If someone is hurting you, or forcing you to work." },
  ];

  function card(r) {
    var extra = [];
    if (r.chat) extra.push('<a href="' + e(r.chat) + '" target="_blank" rel="noopener">Chat online<span class="sr-only"> (opens in a new tab)</span></a>');
    if (r.url) extra.push('<a href="' + e(r.url) + '" target="_blank" rel="noopener">Official website<span class="sr-only"> (opens in a new tab)</span></a>');
    return '<li class="res"><h3 class="res__name">' + e(r.name) + '</h3><p class="res__who">' + e(r.who) + "</p>" +
      '<p class="res__short">' + e(r.short) + "</p>" +
      '<div class="btn-row">' + TW.resourceButtons(r, { secondary: true, compact: true, max: 2 }) + "</div>" +
      TW.badge(r) +
      "<details><summary>More details<span class=\"sr-only\"> about " + e(r.name) + "</span></summary><p>" + e(r.offers) + "</p>" +
      (extra.length ? "<p>" + extra.join(" · ") + "</p>" : "") + "</details></li>";
  }

  var all = Object.keys(TW.RESOURCES).map(function (k) { return TW.RESOURCES[k]; });
  var html = "";
  GROUPS.forEach(function (g) {
    var list = all.filter(function (r) { return r.group === g.id; });
    if (!list.length) return;
    html += '<section class="res-group" id="' + g.id + '" aria-labelledby="' + g.id + '-t"><div class="res-group__head"><span class="choice__icon">' + TW.icon(g.icon) +
      '</span><h2 id="' + g.id + '-t">' + e(g.title) + '</h2></div><p class="res-group__lead">' + e(g.lead) +
      '</p><ul class="res-list" role="list">' + list.map(card).join("") + "</ul></section>";
  });

  html += '<section class="res-group" id="tools" aria-labelledby="tools-t"><div class="res-group__head"><span class="choice__icon">' + TW.icon("pen") +
    '</span><h2 id="tools-t">Do it yourself, right now</h2></div><p class="res-group__lead">The Weight’s own tools. Private: nothing is sent or saved.</p><ul class="res-list" role="list">';
  Object.keys(TW.TOOLS).forEach(function (k) {
    var t = TW.TOOLS[k];
    html += '<li class="res"><h3 class="res__name">' + e(t.name) + '</h3><p class="res__who">' + e(t.who) + '</p><p class="res__short">' + e(t.short) +
      '</p><div class="btn-row">' + TW.toolButton(t, { secondary: true }) + "</div></li>";
  });
  html += "</ul></section>";
  html += '<p class="meta">' + TW.icon("check") + " Verified by The Weight: already listed on theweightmen.com. " + TW.icon("question") + " Suggested addition: proposed for this prototype and awaiting the founder’s review. Listing a service doesn’t mean a partnership.</p>";
  root.innerHTML = html;
})();
