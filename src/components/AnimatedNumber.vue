<template>
  <span ref="numberRef">{{ display }}</span>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  to: Number,
  duration: {
    type: Number,
    default: 1500,
  },
});

const display = ref(0);
const numberRef = ref(null);

function animateCount() {
  const start = 0;
  const end = props.to;
  const duration = props.duration;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    display.value = Math.floor(progress * (end - start) + start);
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animateCount();
        observer.disconnect();
      }
    },
    { threshold: 0.5 }
  );

  if (numberRef.value) {
    observer.observe(numberRef.value);
  }
});
</script>
