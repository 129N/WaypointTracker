import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
//import { requestFormReset } from 'react-dom'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  

})


/*
css:{
    postcss:{
      plugins:[
        require('tailwindcss'),
        require('autoprefixer'),
      ]
    }
  } */