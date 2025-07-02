export default {
  mounted(el, binding) {
    el.style.width = "0%";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = "width 1.2s ease-out";
          el.style.width = binding.value;
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
  },
};
