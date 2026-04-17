<template>
  <div class="nimote-layout">
    <DefaultTheme />
  </div>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted, onBeforeUnmount } from 'vue'
import './custom.css'

// Enhanced scroll behavior and interaction
onMounted(() => {
  // Smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth'
  
  // Add scroll-based nav styling
  const handleScroll = () => {
    const nav = document.querySelector('.VPNav')
    if (nav) {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled')
      } else {
        nav.classList.remove('scrolled')
      }
    }
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Store cleanup function
  window._nimoteScrollHandler = handleScroll
})

onBeforeUnmount(() => {
  // Clean up scroll listener
  if (window._nimoteScrollHandler) {
    window.removeEventListener('scroll', window._nimoteScrollHandler)
    delete window._nimoteScrollHandler
  }
})
</script>

<style scoped>
.nimote-layout {
  min-height: 100vh;
  position: relative;
}

/* Ensure smooth transitions */
.nimote-layout * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
