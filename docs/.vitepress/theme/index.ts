import DefaultTheme from 'vitepress/theme'
import { type Theme } from 'vitepress'
import './custom.css'

// Extend the default VitePress theme
const theme: Theme = {
  extends: DefaultTheme,
  
  enhanceApp({ app, router, siteData }) {
    // You can register global components here
    // Example: app.component('MyComponent', MyComponent)
    
    // Add custom Vue plugins or other enhancements
  }
}

export default theme
