export default {
  mounted(el, binding) {
    el.classList.add("opacity-0");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0");
          el.classList.add(
            "animate__animated",
            binding.value || "animate__fadeInUp"
          );
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
  },
};
