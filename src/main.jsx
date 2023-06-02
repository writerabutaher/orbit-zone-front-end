import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import UserContext from './Contexts/UserContext.jsx'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </UserContext>
  </React.StrictMode>,
)
