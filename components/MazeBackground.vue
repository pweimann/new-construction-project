<template>
  <canvas ref="canvas" class="fixed inset-0 z-0" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
const animationId = null
let ctx
let cols, rows
const cellSize = 40
const maze = []
let cellsToAnimate = []

function setup () {
  ctx = canvas.value.getContext('2d')
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight

  cols = Math.floor(canvas.value.width / cellSize)
  rows = Math.floor(canvas.value.height / cellSize)

  // Initialize the maze
  for (let y = 0; y < rows; y++) {
    maze[y] = []
    for (let x = 0; x < cols; x++) {
      maze[y][x] = {
        x,
        y,
        walls: [true, true, true, true], // top, right, bottom, left
        visited: false
      }
    }
  }

  // Start from the center
  const startX = Math.floor(cols / 2)
  const startY = Math.floor(rows / 2)
  generateMaze(startX, startY)

  // Prepare cells for animation
  cellsToAnimate = maze.flat().filter(cell => cell.visited)
  cellsToAnimate.sort((a, b) => {
    const distA = Math.abs(a.x - startX) + Math.abs(a.y - startY)
    const distB = Math.abs(b.x - startX) + Math.abs(b.y - startY)
    return distA - distB
  })
}

function generateMaze (x, y) {
  const directions = shuffleArray([0, 1, 2, 3])
  maze[y][x].visited = true

  for (let i = 0; i < directions.length; i++) {
    const [nextX, nextY] = getNextCell(x, y, directions[i])

    if (isValidCell(nextX, nextY) && !maze[nextY][nextX].visited) {
      // Remove walls between current and next cell
      maze[y][x].walls[directions[i]] = false
      maze[nextY][nextX].walls[(directions[i] + 2) % 4] = false

      generateMaze(nextX, nextY)
    }
  }
}

function getNextCell (x, y, direction) {
  switch (direction) {
    case 0: return [x, y - 1] // Up
    case 1: return [x + 1, y] // Right
    case 2: return [x, y + 1] // Down
    case 3: return [x - 1, y] // Left
  }
}

function isValidCell (x, y) {
  return x >= 0 && x < cols && y >= 0 && y < rows
}

function shuffleArray (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

function drawCell (cell) {
  const x = cell.x * cellSize
  const y = cell.y * cellSize

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
  ctx.lineWidth = 2

  if (cell.walls[0]) { // Top
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + cellSize, y)
    ctx.stroke()
  }
  if (cell.walls[1]) { // Right
    ctx.beginPath()
    ctx.moveTo(x + cellSize, y)
    ctx.lineTo(x + cellSize, y + cellSize)
    ctx.stroke()
  }
  if (cell.walls[2]) { // Bottom
    ctx.beginPath()
    ctx.moveTo(x + cellSize, y + cellSize)
    ctx.lineTo(x, y + cellSize)
    ctx.stroke()
  }
  if (cell.walls[3]) { // Left
    ctx.beginPath()
    ctx.moveTo(x, y + cellSize)
    ctx.lineTo(x, y)
    ctx.stroke()
  }
}

function animateMaze () {
  if (cellsToAnimate.length > 0) {
    const cell = cellsToAnimate.shift()
    drawCell(cell)
    setTimeout(animateMaze, 10) // Adjust this value to control the drawing speed
  }
}

onMounted(() => {
  setup()
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})

// Expose a method to start the animation
const startAnimation = () => {
  if (cellsToAnimate.length > 0) {
    animateMaze()
  }
}

// Expose the startAnimation method
defineExpose({ startAnimation })
</script>
