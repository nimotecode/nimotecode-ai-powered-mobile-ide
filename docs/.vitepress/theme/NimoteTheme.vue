<template>
  <div class="nimote-layout">
    <DefaultTheme />
  </div>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted, onBeforeUnmount } from 'vue'
import './custom.css'

// Custom animation for page transitions
onMounted(() => {
  // Add animation class to hero section
  const hero = document.querySelector('.VPHero')
  if (hero) {
    hero.classList.add('animate-fade-in')
  }
  
  // Add animation delay to feature cards
  const features = document.querySelectorAll('.VPFeature')
  features.forEach((feature, index) => {
    feature.classList.add('animate-scale-in')
    feature.classList.add(`animate-delay-${(index + 1) * 100}`)
  })
  
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth'
  
  // Add hover effect to all cards
  const cards = document.querySelectorAll('.custom-card')
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)'
      card.style.boxShadow = '0 8px 24px rgba(100, 108, 255, 0.15)'
    })
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)'
      card.style.boxShadow = 'none'
    })
  })
})

onBeforeUnmount(() => {
  // Clean up event listeners
  const cards = document.querySelectorAll('.custom-card')
  cards.forEach(card => {
    card.removeEventListener('mouseenter', () => {})
    card.removeEventListener('mouseleave', () => {})
  })
})
</script>

<style scoped>
.nimote-layout {
  min-height: 100vh;
  background: linear-gradient(to bottom, #ffffff, #f8f9fa);
}

@media (prefers-color-scheme: dark) {
  .nimote-layout {
    background: linear-gradient(to bottom, #1a1a1a, #2d2d2d);
  }
}
</style>
