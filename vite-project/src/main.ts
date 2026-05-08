import "./style.css";

const hero = document.getElementById("hero") as HTMLElement | null;
const overlay = document.getElementById("overlay") as HTMLElement | null;
const bgVideo = document.getElementById("bgVideo") as HTMLVideoElement | null;

if (hero && overlay && bgVideo) {
  const handleScroll = (): void => {
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;
    const progress = Math.min(scrollY / heroHeight, 1);

    overlay.style.transform = `translateY(${scrollY * -0.25}px)`;
    overlay.style.opacity = `${1 - progress * 1.2}`;

    bgVideo.style.transform =
      `translate(-50%, calc(-50% + ${scrollY * 0.12}px)) scale(${1 + progress * 0.08})`;
  };

  window.addEventListener("scroll", handleScroll);
}

/* ここから地図マーカー hover */

const dayCards = document.querySelectorAll(".day-card");

dayCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const day = card.getAttribute("data-day");
    const markers = document.querySelectorAll(`.${day}-marker`);

    markers.forEach((marker) => {
      marker.classList.add("is-visible");
    });
  });

  card.addEventListener("mouseleave", () => {
    const day = card.getAttribute("data-day");
    const markers = document.querySelectorAll(`.${day}-marker`);

    markers.forEach((marker) => {
      marker.classList.remove("is-visible");
    });
  });
});