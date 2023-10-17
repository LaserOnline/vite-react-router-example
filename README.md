
## React Package

Install Router

```bash
  npm i react-router-dom
```
    
Install Dotenv
```bash
  npm install dotenv --save-dev
```

.env
```bash
  VITE_PORT=8080
```

.env.production
```bash
  VITE_PORT=5050
```

vite.config.ts
```bash
import dotenv from 'dotenv' // * นำเข้าโมดูล dotenv

dotenv.config()
export default defineConfig({
  server: {port: parseInt(process.env.VITE_PORT)},
  plugins: [react()],
})
```
