function revealSections() { const sections = document.querySelectorAll(".section"); sections.forEach((section) => { const rect = section.getBoundingClientRect(); if (rect.top < window.innerHeight * 0.8) { section.classList.add("active"); } });
}
function updateProgress() { const progressFill = document.querySelector(".progress-fill"); const ticks = document.querySelectorAll(".tick"); const sections = document.querySelectorAll(".section"); const scrollTop = window.scrollY; const docHeight = document.body.scrollHeight - window.innerHeight; const scrolled = (scrollTop / docHeight) * 100; if (progressFill) progressFill.style.height = scrolled + "%"; sections.forEach((sec, i) => { const rect = sec.getBoundingClientRect(); if (rect.top <= window.innerHeight * 0.5 && rect.bottom > 0) { ticks[i]?.classList.add("active"); } else { ticks[i]?.classList.remove("active"); } });
}
function setupNavigation() { document.querySelectorAll(".tick .label").forEach((label) => { label.addEventListener("click", () => { const target = document.getElementById(label.dataset.target); if (target) { const headerOffset = document.querySelector("header").offsetHeight || 80; const offsetPosition = target.offsetTop - headerOffset + 5; window.scrollTo({ top: offsetPosition, behavior: "smooth" }); } }); });
}
window.addEventListener("scroll", () => { revealSections(); updateProgress();
});
window.addEventListener("load", () => { document.body.style.opacity = "0"; document.body.style.transition = "opacity 1s ease"; setTimeout(() => { document.body.style.opacity = "1"; }, 100); revealSections(); updateProgress(); setupNavigation();
});