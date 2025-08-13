import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App.tsx'
import { Clients, SelectedClients } from "@pages"
import { PaginationProvider, SelectedClientsProvider } from "@providers"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SelectedClientsProvider>
      <PaginationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/clientes" element={<Clients />} />
            <Route path="/clientes-selecionados" element={<SelectedClients />} />
          </Routes>
        </BrowserRouter>
      </PaginationProvider>
    </SelectedClientsProvider>
  </StrictMode>,
)
