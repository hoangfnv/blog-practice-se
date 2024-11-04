import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

async function prepareApp() {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'test'
  ) {
    const { worker } = await import('@/external-resource/all-api-mocks/browser')
    return worker.start()
  }

  return Promise.resolve()
}

prepareApp()
  .then(() => {
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  })
  .catch((reason) => {
    alert('Can not start app: ' + reason)
  })

