import "./style.css";
import "./day3.css";

/* =========================
fade-in
========================= */

const fadeTargets = document.querySelectorAll<HTMLElement>(".fade-in");

const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("show");
}
});
},
{ threshold: 0.15 }
);

fadeTargets.forEach((target) => observer.observe(target));

/* =========================
写真モーダル
========================= */

const modal = document.querySelector<HTMLElement>("#photoModal");
const modalImage = document.querySelector<HTMLImageElement>("#modalImage");

const clickableImages = document.querySelectorAll<HTMLImageElement>(
`
.photos img,
.scrap-photo
`
);

clickableImages.forEach((image) => {
image.addEventListener("click", () => {
if (!modal || !modalImage) return;

modalImage.src = image.src;
modalImage.alt = image.alt;

modal.classList.add("is-open");
});
});

modal?.addEventListener("click", (event) => {
if (event.target === modal) {
modal.classList.remove("is-open");
}
});

/* =========================
スケジュール hover → 地図連動
========================= */

const scheduleItems =
document.querySelectorAll<HTMLAnchorElement>(".day3-schedule a");

scheduleItems.forEach((item) => {
item.addEventListener("mouseenter", () => {
const markerClass = item.className.replace("link-", "m-");

document
.querySelector(`.${markerClass}`)
?.classList.add("is-active");
});

item.addEventListener("mouseleave", () => {
const markerClass = item.className.replace("link-", "m-");

document
.querySelector(`.${markerClass}`)
?.classList.remove("is-active");
});
});

/* =========================
写真 hoverで立体感
========================= */

const hoverPhotos = document.querySelectorAll<HTMLElement>(
`
.photos img,
.scrap-photo
`
);

hoverPhotos.forEach((photo) => {
photo.addEventListener("mousemove", (e) => {
const rect = photo.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateY = (x / rect.width - 0.5) * 10;
const rotateX = (y / rect.height - 0.5) * -10;

photo.style.transform = `
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.12)
`;
});

photo.addEventListener("mouseleave", () => {
photo.style.transform = "";
});
});