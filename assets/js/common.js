/* Shared helpers: icons, escaping, action buttons.
   No storage, no analytics, no network requests. */
(function () {
  "use strict";
  window.TW = window.TW || {};

  TW.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  /* Line icons, 24×24, stroke = currentColor. Always paired with text. */
  var P = {
    cloud: '<path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6.1 9.2 4.5 4.5 0 0 0 7 18z"/>',
    split: '<path d="M8 4v6a4 4 0 0 0 4 4 4 4 0 0 1 4 4v2"/><path d="M16 4v6a4 4 0 0 1-4 4 4 4 0 0 0-4 4v2"/>',
    family: '<circle cx="8" cy="6" r="2.5"/><circle cx="16.5" cy="9" r="2"/><path d="M4 20v-5a4 4 0 0 1 8 0v5"/><path d="M13.5 20v-3.5a3 3 0 0 1 6 0V20"/>',
    leaf: '<path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14"/><path d="M5 19l7-7"/>',
    person: '<circle cx="12" cy="7" r="3.5"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
    home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    star: '<path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z"/>',
    question: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 1-1 1.7v.5"/><path d="M12 17.2v.1"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3"/>',
    people: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20v-1a6 6 0 0 1 12 0v1"/><path d="M15 14.5a5 5 0 0 1 6 4.5v1"/>',
    pen: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',
    list: '<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
  };
  TW.icon = function (name, cls) {
    return '<svg class="icon ' + (cls || "") + '" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + (P[name] || P.arrow) + "</svg>";
  };

  var NEW_TAB = '<span class="sr-only"> (opens in a new tab)</span>';

  /* Action buttons for a resource. First button is the strong one.
     opts.dark: on a navy surface.  opts.max: limit number of buttons. */
  TW.resourceButtons = function (r, opts) {
    opts = opts || {};
    var e = TW.esc, list = [];
    var call = r.call && { href: r.call, label: r.callLabel || "Call " + r.phone, icon: "phone" };
    var web = r.url && { href: r.url, label: r.webLabel || "Website", icon: "globe", ext: true };
    if (r.webFirst) { if (web) list.push(web); if (call) list.push(call); }
    else { if (call) list.push(call); if (web && !r.text) list.push(web); }
    if (r.text) list.push({ href: r.text, label: r.textLabel || "Text", icon: "chat" });
    if (r.chat && !opts.compact) list.push({ href: r.chat, label: "Chat online", icon: "chat", ext: true });
    if (opts.max) list = list.slice(0, opts.max);
    return list.map(function (b, i) {
      var cls = i === 0 ? "btn--amber" : (opts.dark ? "btn--ghost-light" : "btn--outline");
      if (i === 0 && !opts.dark && opts.secondary) cls = "btn--navy";
      return '<a class="btn ' + cls + '" href="' + e(b.href) + '"' + (b.ext ? ' target="_blank" rel="noopener"' : "") + ">" +
        TW.icon(b.icon) + e(b.label) + (b.ext ? NEW_TAB : "") + "</a>";
    }).join("");
  };

  TW.toolButton = function (t, opts) {
    opts = opts || {};
    var cls = opts.dark || !opts.secondary ? "btn--amber" : "btn--navy";
    return '<a class="btn ' + cls + '" href="' + TW.esc(t.href) + '">' + TW.icon(t.icon) + TW.esc(t.label) + "</a>";
  };

  TW.badge = function (r) {
    if (!r || !r.verified) return "";
    var label = TW.VERIFY_LABEL[r.verified](r.lastVerified);
    return '<p class="badge badge--' + r.verified + '">' + TW.icon(r.verified === "owner" ? "check" : "question") + TW.esc(label) + "</p>";
  };
})();
