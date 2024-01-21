(() => {
  const scrollBar = document.querySelector(".js-loadingScroll");

  window.addEventListener("scroll", () => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (window.scrollY / scrollHeight) * 100;

    const widthPercentage = Math.min(Math.max(scrollProgress, 0), 100);

    scrollBar.style.width = widthPercentage + "%";
  });

  scrollBar.style.width = "0%";
})();
