<template>
  <canvas ref="canvas" class="fixed inset-0 z-0"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const canvas = ref(null);
let animationId = null;

onMounted(() => {
  const ctx = canvas.value.getContext('2d');
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;

  const cellSize = 40;
  const cols = Math.floor(canvas.value.width / cellSize);
  const rows = Math.floor(canvas.value.height / cellSize);

  const drawMaze = () => {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 2;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * cellSize;
        const y = j * cellSize;

        if (Math.random() > 0.5) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + cellSize, y + cellSize);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.moveTo(x + cellSize, y);
          ctx.lineTo(x, y + cellSize);
          ctx.stroke();
        }
      }
    }
  };

  const animateMaze = () => {
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
    drawMaze();
    animationId = requestAnimationFrame(animateMaze);
  };

  animateMaze();
});

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
});
</script>
