const PASSWORD = "KAIKAIKITAN";
const links = [
  { name: "Newsigmatism", url: "https://newsigmatism.onrender.com" },
  { name: "Sigmatism", url: "https://sigmatism-ovq4.onrender.com" },
  { name: "Rvrvrv", url: "https://rvrvrv.onrender.com" },
  { name: "Neputo", url: "https://nepu.to" },
  { name: "FTNF", url: "https://ftnf.onrender.com" },
  { name: "Waddle", url: "https://waddle-waddle-1k.onrender.com" },
];

function checkPassword() {
  const input = document.getElementById("password-input").value;
  if (input === PASSWORD) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-ui").style.display = "flex";
    loadTabs();
  } else {
    alert("Incorrect password.");
  }
}

function loadTabs() {
  const tabBar = document.getElementById("tab-buttons");
  const iframeContainer = document.getElementById("iframe-container");

  links.forEach((link, i) => {
    const btn = document.createElement("button");
    btn.textContent = link.name;
    btn.onclick = () => {
      iframeContainer.innerHTML = `<iframe src="${link.url}"></iframe>`;
      document.title = link.name;
      document.getElementById("favicon").href = `${link.url}/favicon.ico`;
    };
    tabBar.appendChild(btn);

    // Load first tab by default
    if (i === 0) btn.click();
  });
}

function switchTheme(theme) {
  const root = document.documentElement;
  if (theme === "light") {
    root.style.background = "#fff";
    root.style.color = "#000";
  } else if (theme === "retro") {
    root.style.background = "#2b2b00";
    root.style.color = "#eaff00";
  } else if (theme === "glass") {
    root.style.background = "rgba(255,255,255,0.2)";
    root.style.color = "#000";
  } else {
    root.style.background = "#111";
    root.style.color = "#fff";
  }
}

function toggleSettings() {
  const menu = document.getElementById("settings-menu");
  menu.style.display = menu.style.display === "none" ? "block" : "none";
}

function generateBookmarklet() {
  const code = `javascript:(function(){alert("Sigma Gaming Bookmarklet Loaded");})();`;
  prompt("Copy this bookmarklet:", code);
}

function toggleFakeUI() {
  document.body.innerHTML = `<iframe src="https://docs.google.com/document/d/1BZc0FakeUI"></iframe>`;
}

function toggleThemeCustomizer() {
  alert("Theme customizer coming soon...");
}

function saveToFavorites() {
  const tab = document.title;
  localStorage.setItem("fav-" + tab, tab);
  alert("Saved " + tab + " to favorites!");
}

function askAboutBlank() {
  if (confirm("Open Sigma Gaming in about:blank for stealth?")) {
    const win = window.open("about:blank", "_blank");
    fetch(window.location.href)
      .then(res => res.text())
      .then(html => {
        win.document.write(html);
        win.document.close();
      });
  }
}
