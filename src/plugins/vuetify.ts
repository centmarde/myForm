/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#22577a',    // deep blue
          secondary: '#38a3a5',  // teal
          background: '#c7f9cc', // lightest mint
          surface: '#80ed99',    // light mint
          accent: '#57cc99',     // mint
        },
      },
    },
  },
})
