const dict = {
  zh: {
    "nav.intelligence": "智能",
    "nav.products": "产品",
    "nav.ecosystem": "生态",
    "nav.contact": "联系",
    "nav.cta": "合作咨询",
    "hero.brand": "豪威智能",
    "hero.title": "让家电，真正懂你",
    "hero.lead":
      "以感知、计算与互联重塑家用电器，把精密智能融入每一次日常。",
    "hero.ctaPrimary": "探索产品",
    "hero.ctaSecondary": "了解智能",
    "intel.title": "强大智能，藏于细节",
    "intel.lead":
      "从环境感知到自适应控制，豪威以系统级智能驱动更安静、更高效、更可靠的家居体验。",
    "intel.item1.title": "多维感知",
    "intel.item1.desc":
      "温湿度、空气质量、使用习惯同步采集，设备先于你察觉变化。",
    "intel.item2.title": "边缘计算",
    "intel.item2.desc":
      "本地决策毫秒级响应，减少云端依赖，隐私与速度兼得。",
    "intel.item3.title": "全屋互联",
    "intel.item3.desc":
      "设备协同形成场景链路，一键切换起床、离家、归家与休憩模式。",
    "products.title": "为现代生活而生",
    "products.lead":
      "覆盖空气、水净、厨电与环境管理，以统一智能语言连接每一台设备。",
    "products.p1.title": "智能空气系统",
    "products.p1.desc":
      "实时监测并自动调节净化与新风，让室内空气始终处于舒适区间。",
    "products.p2.title": "智慧厨电矩阵",
    "products.p2.desc":
      "精准控温与食材识别协同，把复杂烹饪简化为可复现的智能流程。",
    "products.p3.title": "全屋环境管家",
    "products.p3.desc":
      "照明、温控与安防统一调度，形成可学习、可进化的家居操作系统。",
    "eco.title": "一套语言，驱动整座家",
    "eco.lead":
      "Haowei OS 将设备、场景与数据贯通，开放接口支持持续扩展，让智能随生活一同升级。",
    "eco.caption": "感知 · 决策 · 执行 · 学习",
    "contact.title": "与豪威同行",
    "contact.lead": "欢迎洽谈产品合作、渠道伙伴与技术方案对接。",
    "contact.company": "企业名称",
    "contact.companyValue": "北京豪威智能家用电器有限公司",
    "contact.code": "统一社会信用代码",
    "contact.address": "企业地址",
    "contact.addressValue":
      "北京市平谷区中关村科技园区平谷园峪口新能源产业基地峪阳路38号-24252（集群注册）",
    "footer.copy": "© 2026 北京豪威智能家用电器有限公司",
  },
  en: {
    "nav.intelligence": "Intelligence",
    "nav.products": "Products",
    "nav.ecosystem": "Ecosystem",
    "nav.contact": "Contact",
    "nav.cta": "Partner with us",
    "hero.brand": "HAOWEI",
    "hero.title": "Appliances that truly understand you",
    "hero.lead":
      "Sensing, computing, and connectivity reshaped for the home—precision intelligence woven into everyday life.",
    "hero.ctaPrimary": "Explore products",
    "hero.ctaSecondary": "See intelligence",
    "intel.title": "Powerful intelligence, refined in detail",
    "intel.lead":
      "From environmental sensing to adaptive control, Haowei drives quieter, more efficient, and more reliable living through system-level intelligence.",
    "intel.item1.title": "Multimodal sensing",
    "intel.item1.desc":
      "Temperature, humidity, air quality, and usage patterns are captured together—devices notice change before you do.",
    "intel.item2.title": "Edge computing",
    "intel.item2.desc":
      "Local decisions in milliseconds. Less cloud dependency, with privacy and speed in balance.",
    "intel.item3.title": "Whole-home connectivity",
    "intel.item3.desc":
      "Devices form scene chains—wake, leave, return, and rest modes with a single gesture.",
    "products.title": "Built for modern living",
    "products.lead":
      "Air, water, kitchen, and environment—connected by one intelligent language across every device.",
    "products.p1.title": "Smart air systems",
    "products.p1.desc":
      "Continuous monitoring with automatic purification and fresh-air control keeps indoor air in the comfort zone.",
    "products.p2.title": "Intelligent kitchen suite",
    "products.p2.desc":
      "Precision heat control and ingredient recognition turn complex cooking into repeatable, intelligent workflows.",
    "products.p3.title": "Whole-home environment OS",
    "products.p3.desc":
      "Lighting, climate, and security orchestrated as one learnable, evolving home operating system.",
    "eco.title": "One language. An entire home.",
    "eco.lead":
      "Haowei OS unifies devices, scenes, and data—with open interfaces that grow as your life does.",
    "eco.caption": "Sense · Decide · Act · Learn",
    "contact.title": "Build with Haowei",
    "contact.lead":
      "We welcome conversations on product partnerships, channels, and technical collaboration.",
    "contact.company": "Company",
    "contact.companyValue":
      "Beijing Haowei Intelligent Home Appliances Co., Ltd.",
    "contact.code": "Unified Social Credit Code",
    "contact.address": "Address",
    "contact.addressValue":
      "No. 38-24252 Yuyang Road, Yukou New Energy Industrial Base, Pinggu Park, Zhongguancun Science Park, Pinggu District, Beijing (Cluster Registration)",
    "footer.copy":
      "© 2026 Beijing Haowei Intelligent Home Appliances Co., Ltd.",
  },
};

const html = document.documentElement;
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");
const langButtons = document.querySelectorAll(".lang-btn");

let lang = localStorage.getItem("haowei-lang") || "zh";

function applyLanguage(next) {
  lang = next;
  localStorage.setItem("haowei-lang", lang);
  html.lang = lang === "zh" ? "zh-CN" : "en";
  html.dataset.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[lang][key];
    if (value) el.textContent = value;
  });

  langButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  document.title =
    lang === "zh" ? "豪威智能 · HAOWEI" : "HAOWEI Intelligent Appliances";
}

function setMenuOpen(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  mobileNav.hidden = !open;
  document.body.classList.toggle("menu-open", open);
}

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  setMenuOpen(open);
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.dataset.lang);
    setMenuOpen(false);
  });
});

function updateHeaderState() {
  const scrolled = window.scrollY > 24;
  const inHero = window.scrollY < window.innerHeight * 0.72;
  header.classList.toggle("is-scrolled", scrolled);
  header.classList.toggle("is-hero", inHero);
}

window.addEventListener("scroll", updateHeaderState, { passive: true });
window.addEventListener("resize", updateHeaderState);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

applyLanguage(lang);
updateHeaderState();
