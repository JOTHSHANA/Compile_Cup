import gsap from "gsap";

export function submitAnimation() {
  const btn = document.querySelector(".submit-btn");

  if (btn) {
    gsap.timeline()
      .to(".submit-btn .icon svg", { x: -8, y: 8, duration: 1 })
      .to(".submit-btn .icon svg", { x: "50vw", y: "-50vh", duration: 1 })
      .set(".submit-btn .icon svg", { x: "-50vw", y: "50vh" })
      .to(".submit-btn .icon svg", { x: 0, y: 0, duration: 0.7 });
  }
}
