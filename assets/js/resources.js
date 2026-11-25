/* ─────────────────────────────────────────────────────────────
   THE WEIGHT — RESOURCE & JOURNEY CONFIGURATION
   The only file the owner needs to edit to change where the
   site sends people. Every page reads from it.

     RESOURCES  every phone line, text line and website we link to
     TOOLS      The Weight's own pages (Unload, Talk It Through)
     TOPICS     Step 1: "What's weighing on you?"
     NEEDS      Step 2: "What would help right now?"
     RESULTS    the next step for each topic + need

   verified: "owner"     → already listed on theweightmen.com (with date)
   verified: "prototype" → suggested addition, awaiting the owner's review

   Button labels: callLabel / webLabel. webFirst: true puts the
   website button before the phone button.
   Nothing here is sent anywhere; the site stores no selections.
   ───────────────────────────────────────────────────────────── */

window.TW = window.TW || {};

TW.SITE = {
  name: "The Weight",
  tagline: "You don’t have to carry it by yourself.",
  originalUrl: "https://theweightmen.com/",
};

TW.RESOURCES = {
  "988": {
    name: "988 Suicide & Crisis Lifeline", group: "talk",
    who: "Anyone · free · 24/7",
    short: "Talk or text with a trained counselor. You don’t have to be suicidal to reach out.",
    offers: "Free, 24/7. Talk, text, or chat with a trained crisis counselor about emotional distress, suicidal thoughts, or worry about someone else.",
    phone: "988", call: "tel:988", callLabel: "Call 988",
    text: "sms:988", textLabel: "Text 988",
    chat: "https://chat.988lifeline.org/",
    url: "https://988lifeline.org/get-help/", webLabel: "988lifeline.org",
    verified: "owner", lastVerified: "2026-11-23",
  },
  vcl: {
    name: "Veterans Crisis Line", group: "talk",
    who: "Veterans, service members, families · 24/7",
    short: "Responders who understand military life. VA enrollment not required.",
    offers: "Free, confidential, 24/7 for veterans, service members, and their families. Call 988 and press 1, or text 838255. VA enrollment is not required, and discharge status doesn’t matter.",
    phone: "988, then press 1", call: "tel:988", callLabel: "Call 988, press 1",
    text: "sms:838255", textLabel: "Text 838255",
    chat: "https://www.veteranscrisisline.net/get-help-now/chat/",
    url: "https://www.va.gov/health-care/health-needs-conditions/mental-health/suicide-prevention/", webLabel: "VA.gov",
    verified: "owner", lastVerified: "2026-11-23",
  },
  dv: {
    name: "National Domestic Violence Hotline", group: "safety",
    who: "Anyone · men welcome · 24/7",
    short: "Support if a partner or family member is hurting you.",
    offers: "Support for people experiencing abuse from a partner or family member. Men are welcome. Call 1-800-799-7233 or text 88788.",
    phone: "1-800-799-7233", call: "tel:18007997233", callLabel: "Call 1-800-799-7233",
    text: "sms:88788", textLabel: "Text 88788",
    url: "https://www.thehotline.org/", webLabel: "thehotline.org",
    verified: "owner", lastVerified: "2026-11-24",
  },
  rainn: {
    name: "National Sexual Assault Hotline (RAINN)", group: "safety",
    who: "Survivors, including men and boys · 24/7",
    short: "Confidential support after sexual assault or abuse.",
    offers: "Confidential support for survivors of sexual assault and abuse, including men and boys.",
    phone: "1-800-656-4673", call: "tel:18006564673", callLabel: "Call 1-800-656-4673",
    url: "https://rainn.org/", webLabel: "rainn.org",
    verified: "owner", lastVerified: "2026-11-24",
  },
  trafficking: {
    name: "National Human Trafficking Hotline", group: "safety",
    who: "Anyone, any immigration status · 24/7",
    short: "Help if you’re being forced to work, or worried someone is.",
    offers: "24/7, confidential. For anyone in a sex or labor trafficking situation, or worried about someone who is. Help in more than 200 languages.",
    phone: "1-888-373-7888", call: "tel:18883737888", callLabel: "Call 1-888-373-7888",
    text: "sms:233733", textLabel: "Text 233733",
    url: "https://humantraffickinghotline.org/", webLabel: "Website",
    verified: "owner", lastVerified: "2026-11-24",
  },
  "211": {
    name: "211", group: "practical",
    who: "Anyone · local help across the U.S.",
    short: "One call for local help with rent, bills, food, and more.",
    offers: "Connects you with local help for housing and utility costs, food programs, healthcare costs, caregiver resources, and more. What’s offered depends on where you live.",
    phone: "211", call: "tel:211", callLabel: "Call 211",
    url: "https://www.211.org/", webLabel: "Find local help online",
    verified: "owner", lastVerified: "2026-11-23",
  },
  nchv: {
    name: "National Call Center for Homeless Veterans", group: "practical",
    who: "Veterans at risk of losing housing · 24/7",
    short: "Connects you with VA staff near you. Family can call too.",
    offers: "Free, confidential, 24/7 for veterans who are homeless or at risk of losing housing. Connects you with VA staff near you. Family, friends, and providers can call too.",
    phone: "1-877-424-3838", call: "tel:18774243838", callLabel: "Call 1-877-424-3838",
    url: "https://department.va.gov/homeless/nationalcallcenter/", webLabel: "Website",
    verified: "owner", lastVerified: "2026-11-23",
  },
  food: {
    name: "Feeding America", group: "practical",
    who: "Anyone who needs help affording food",
    short: "Find a food bank and pantries near you by ZIP code.",
    offers: "Search by ZIP code to find a food bank, then partner pantries and meal programs with hours and locations. Some pantries have their own rules, like living in a certain area.",
    url: "https://www.feedingamerica.org/find-your-local-foodbank", webLabel: "Find a food bank",
    verified: "owner", lastVerified: "2026-11-23",
  },
  ajc: {
    name: "American Job Centers", group: "practical",
    who: "Job seekers · free",
    short: "Free job search help, resume help, and training near you.",
    offers: "Run with the U.S. Department of Labor. Computers, resume help, workshops, training, and benefits information. Services vary by location.",
    phone: "1-877-872-5627", call: "tel:18778725627", callLabel: "Call 1-877-872-5627",
    url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx", webLabel: "Find a job center", webFirst: true,
    verified: "owner", lastVerified: "2026-11-23",
  },
  vagov: {
    name: "VA.gov", group: "info",
    who: "Veterans and their families",
    short: "The official starting point for VA health care and benefits.",
    offers: "Health care, disability, education, housing, and careers.",
    url: "https://www.va.gov/", webLabel: "Explore VA benefits",
    verified: "owner", lastVerified: "2026-11-23",
  },
  ftcJobs: {
    name: "FTC: Spot a job scam", group: "info",
    who: "Anyone looking for work",
    short: "Warning signs to check before you say yes to an offer.",
    offers: "Don’t pay to get a job. Never deposit a check and send part back. Report scams at ReportFraud.ftc.gov.",
    url: "https://consumer.ftc.gov/articles/job-scams", webLabel: "Check the warning signs",
    verified: "owner", lastVerified: "2026-11-23",
  },

  /* ── Suggested additions: NOT on theweightmen.com yet ──────────
     Fill gaps for grief, counseling, fathers, caregivers and legal
     questions. Confirm or remove before launch.                     */
  samhsa: {
    name: "SAMHSA National Helpline", group: "counseling",
    who: "Anyone · free · 24/7",
    short: "Free referrals to counselors and support groups near you.",
    offers: "Confidential information and referrals to local treatment, support groups, and community services for mental health and substance use. English and Spanish.",
    phone: "1-800-662-4357", call: "tel:18006624357", callLabel: "Call 1-800-662-4357",
    url: "https://www.samhsa.gov/find-help/helplines/national-helpline", webLabel: "Website",
    verified: "prototype",
  },
  findtreatment: {
    name: "FindTreatment.gov", group: "counseling",
    who: "Anyone · filter by low or no cost",
    short: "Search for a counselor or treatment program near you.",
    offers: "The official U.S. government search for mental health and substance use treatment. Filter by location and payment options.",
    url: "https://findtreatment.gov/", webLabel: "Find a counselor",
    verified: "prototype",
  },
  mos: {
    name: "Military OneSource", group: "counseling",
    who: "Service members and military families",
    short: "Free, confidential counseling and help with moves, money and transition.",
    offers: "Free, confidential non-medical counseling, plus help with relocation, finances, and transition.",
    phone: "800-342-9647", call: "tel:8003429647", callLabel: "Call 800-342-9647",
    url: "https://www.militaryonesource.mil/", webLabel: "Website",
    verified: "prototype",
  },
  fatherhood: {
    name: "National Responsible Fatherhood Clearinghouse", group: "practical",
    who: "Dads",
    short: "Co-parenting, child support, and local fatherhood programs.",
    offers: "Free information for dads on co-parenting, child support, and staying connected with your kids, plus a search for local fatherhood programs.",
    url: "https://www.fatherhood.gov/", webLabel: "Explore help for dads",
    verified: "prototype",
  },
  eldercare: {
    name: "Eldercare Locator", group: "practical",
    who: "People caring for an older adult",
    short: "Local meals, rides, in-home help, and caregiver support.",
    offers: "Connects caregivers with local services for older adults: meals, transportation, in-home help, and caregiver support. Call or text.",
    phone: "1-800-677-1116", call: "tel:18006771116", callLabel: "Call 1-800-677-1116",
    url: "https://eldercare.acl.gov/", webLabel: "Find caregiver help",
    verified: "prototype",
  },
  lawhelp: {
    name: "LawHelp.org", group: "practical",
    who: "Anyone · pick your state",
    short: "Free legal information and legal aid for divorce, custody, and support.",
    offers: "Free legal information and links to legal aid in your state, including divorce, custody, and child support.",
    url: "https://www.lawhelp.org/", webLabel: "Find free legal help",
    verified: "prototype",
  },
};

/* The Weight's own tools (from theweightmen.com/unload.html and /talk.html) */
TW.TOOLS = {
  unload: {
    name: "Unload", who: "Private · nothing saved",
    short: "A quiet place to write it out. Nothing you type is sent or saved.",
    href: "unload.html", label: "Start writing", icon: "pen",
  },
  talk: {
    name: "Talk It Through", who: "You send it yourself",
    short: "We help you write a short message asking someone you trust to listen.",
    href: "talk.html", label: "Prepare a message", icon: "chat",
  },
};

/* ── STEP 1 ───────────────────────────────────────────────────── */
TW.TOPICS = [
  { id: "stress",   label: "Stress or feeling low",     icon: "cloud",     needs: ["talk", "counselor", "reach", "today"] },
  { id: "divorce",  label: "Divorce or relationships",  icon: "split",     needs: ["talk", "practical", "reach", "today"] },
  { id: "father",   label: "Fatherhood or caregiving",  icon: "family",    needs: ["practical", "talk", "reach", "today"] },
  { id: "grief",    label: "Grief or loss",             icon: "leaf",      needs: ["talk", "counselor", "reach", "today"] },
  { id: "alone",    label: "Feeling alone",             icon: "person",    needs: ["reach", "talk", "today"] },
  { id: "work",     label: "Money or work",             icon: "briefcase", needs: ["job", "bills", "talk"] },
  { id: "housing",  label: "Housing or food",           icon: "home",      direct: "housing" },
  { id: "military", label: "Military or veteran life",  icon: "star",      needs: ["vurgent", "vpractical", "reach", "today"] },
  { id: "unsure",   label: "I’m not sure",              icon: "question",  needs: ["talk", "today", "reach", "practical"], wide: true },
];

/* ── STEP 2 ───────────────────────────────────────────────────── */
TW.NEEDS = {
  talk:       { label: "Someone to talk to",        hint: "Right now, free and private",     icon: "phone" },
  counselor:  { label: "A counselor",               hint: "Ongoing support",                 icon: "clipboard" },
  reach:      { label: "Someone who gets it",       hint: "A friend, brother, someone you served with", icon: "people" },
  today:      { label: "Something I can do now",    hint: "Private, a few minutes",          icon: "pen" },
  practical:  { label: "Practical help",            hint: "Local services and information", icon: "list" },
  job:        { label: "Finding work",              hint: "Job help and training",           icon: "briefcase" },
  bills:      { label: "Bills or food",             hint: "Rent, utilities, groceries",      icon: "home" },
  vurgent:    { label: "Urgent support",            hint: "Veterans Crisis Line, 24/7",      icon: "phone" },
  vpractical: { label: "Housing, benefits or work", hint: "VA help and next steps",          icon: "list" },
};

/* ── RESULTS ──────────────────────────────────────────────────────
   lead:  ≤ 30 words.  next: up to 2 short lines.
   primary: { res } or { tool }   secondary: up to 2                */
const T = (tool, extra) => Object.assign({ tool }, extra);
const R = (res, extra) => Object.assign({ res }, extra);

const TALK_NOW = (lead) => ({
  title: "Talk to someone tonight",
  lead: lead || "You don’t have to be in crisis to call or text 988. Counselors talk with men about hard nights every day.",
  primary: R("988"),
  secondary: [T("talk"), T("unload")],
  next: ["A trained counselor answers. It’s free, and you don’t have to give your name.", "Prefer typing? Text 988 instead."],
});
const UNLOAD_NOW = {
  title: "Get it out of your head",
  lead: "Two minutes of writing can take some pressure off. Nobody else will ever see it.",
  primary: T("unload"),
  secondary: [R("988"), T("talk")],
  next: ["A private page opens. Nothing you type is sent or saved.", "Write as much or as little as you want, then clear it."],
};
const REACH_OUT = (lead) => ({
  title: "Reach out to one person",
  lead,
  primary: T("talk"),
  secondary: [R("988"), T("unload")],
  next: ["Pick what you want from them. We write the first message.", "You send it from your own phone. The Weight never sends anything."],
});
const COUNSELOR = {
  title: "Find a counselor",
  lead: "A counselor is one option, never a requirement. This free line helps you find one near you, including low-cost options.",
  primary: R("samhsa"),
  secondary: [R("findtreatment"), R("988")],
  next: ["Someone answers 24/7 and asks where you live and how you’d pay.", "You get names of local options. You decide what to do with them."],
};

TW.RESULTS = {
  "stress:talk": TALK_NOW(),
  "stress:counselor": COUNSELOR,
  "stress:reach": REACH_OUT("Saying it out loud to someone you trust can make it lighter. We’ll help with the first message."),
  "stress:today": UNLOAD_NOW,

  "divorce:talk": TALK_NOW("Separation hits hardest at night, in the empty apartment. You don’t need to be in crisis to call or text 988."),
  "divorce:practical": {
    title: "Get the practical side moving",
    lead: "Start with free, trustworthy information on custody, child support and your rights in your state.",
    primary: R("lawhelp"),
    secondary: [R("fatherhood"), R("211")],
    next: ["Pick your state to see free legal information and local legal aid.", "Have kids? The Fatherhood Clearinghouse has co-parenting guides."],
  },
  "divorce:reach": REACH_OUT("Divorce can quietly cut you off from people. One message to a friend can start to change that."),
  "divorce:today": UNLOAD_NOW,

  "father:practical": {
    title: "Find local help for your family",
    lead: "211 connects you with local family and caregiver services in one call.",
    primary: R("211"),
    secondary: [R("fatherhood"), R("eldercare")],
    next: ["Tell them what’s going on: a new baby, a sick parent, needing a break.", "They point you to programs near you."],
  },
  "father:talk": TALK_NOW("Being the one everyone leans on is heavy. You don’t need to be in crisis to call or text 988."),
  "father:reach": REACH_OUT("Other dads and caregivers often feel the same way. Ask one of them for an hour."),
  "father:today": UNLOAD_NOW,

  "grief:talk": TALK_NOW("Grief doesn’t keep office hours. You can call or text 988 just to talk about who you lost."),
  "grief:counselor": COUNSELOR,
  "grief:reach": REACH_OUT("People want to help but often don’t know how. Tell one person exactly what you need."),
  "grief:today": UNLOAD_NOW,

  "alone:reach": REACH_OUT("Loneliness gets lighter one conversation at a time. Send one message today. It doesn’t have to be about how you feel."),
  "alone:talk": TALK_NOW("If there’s nobody to call right now, there is still someone. You don’t need to be in crisis to call or text 988."),
  "alone:today": UNLOAD_NOW,

  "work:job": {
    title: "Get free job help near you",
    lead: "American Job Centers offer free help with job searches, resumes, workshops and training.",
    primary: R("ajc"),
    secondary: [R("ftcJobs"), R("211")],
    next: ["Enter your ZIP code to find the nearest center, or call.", "Before you accept any offer, check the scam warning signs."],
  },
  "work:bills": {
    title: "Get help with bills and food",
    lead: "211 is the fastest single call for local help with rent, utilities and food.",
    primary: R("211"),
    secondary: [R("food"), R("ajc")],
    next: ["Have your ZIP code ready. Say what you need first.", "Ask what ID to bring, and for a backup option."],
  },
  "work:talk": TALK_NOW("Losing work can shake how you see yourself. You don’t need to be in crisis to call or text 988."),

  housing: {
    title: "Call 211 for local help",
    lead: "Needing a bed or a meal says nothing bad about you. 211 is the fastest first step.",
    primary: R("211"),
    secondary: [R("nchv", { note: "Veteran? Call this 24/7 line instead." }), R("food")],
    next: ["Have your ZIP code ready. Say what you need today first.", "Ask about hours, what ID to bring, and a backup option."],
  },

  "military:vurgent": {
    title: "Veterans Crisis Line",
    lead: "Free, confidential and open 24/7. You don’t need VA enrollment, and discharge status doesn’t matter.",
    primary: R("vcl"),
    secondary: [],
    next: ["A responder who understands military life answers.", "In a crisis you can also go straight to any VA medical center."],
  },
  "military:vpractical": {
    title: "Housing, benefits and next steps",
    lead: "If housing is at risk, call the VA homeless line first. For benefits, start at VA.gov.",
    primary: R("nchv"),
    secondary: [R("vagov"), R("mos")],
    next: ["The call center connects you with VA staff near you, 24/7.", "Family and friends can call on your behalf."],
  },
  "military:reach": REACH_OUT("Sometimes the best person to talk to is someone you served with. We’ll help with the first message."),
  "military:today": UNLOAD_NOW,

  "unsure:talk": TALK_NOW("You don’t need to know what’s wrong to call. “I don’t know, it’s just heavy” is a fine place to start."),
  "unsure:today": UNLOAD_NOW,
  "unsure:reach": REACH_OUT("You don’t have to explain it all. “Can we talk?” is enough. We’ll write it for you."),
  "unsure:practical": {
    title: "Call 211 for local help",
    lead: "Not sure where to go? 211 can point you to local help for almost anything: bills, food, housing, health, family.",
    primary: R("211"),
    secondary: [R("samhsa"), T("unload")],
    next: ["Tell them what’s going on in your own words.", "They suggest services near you."],
  },
};

TW.VERIFY_LABEL = {
  owner: (d) => `Verified by The Weight · ${d}`,
  prototype: () => "Suggested addition · awaiting The Weight’s review",
};
