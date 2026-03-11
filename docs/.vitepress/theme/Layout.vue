<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
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
})
</script>

<template>
  <DefaultTheme />
</template>
