import { useState, useEffect } from 'react'
import { Monitor, Smartphone, Moon, X } from 'lucide-react'
import MobileViewport from './Components/MobileViewport'
import Dropdown from './Components/Dropdown'
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'

function AppContent() {
  const [isMobile, setIsMobile] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  
  // Sync the dropdown with the current route
  const currentPath = location.pathname.split('/')[1] || 'home'
  const view = currentPath.charAt(0).toUpperCase() + currentPath.slice(1)

  // Sync state when URL changes (if needed for more complex setups)
  useEffect(() => {
    // optional logic based on path
  }, [location.pathname])

  const handleViewChange = (newView: string) => {
    navigate(`/${newView.toLowerCase()}`)
  }

  const dropdownOptions = [
    { value: 'Home', label: 'Home' },
    { value: 'Forms', label: 'Forms' }
  ]

  return (
      <div className="flex flex-col h-screen w-full bg-[#eef2f6] font-sans">
        <header className="h-[60px] bg-white border-b border-[#e2e8f0] px-4 md:px-6 flex items-center justify-between shrink-0 shadow-sm z-50">
          <div className="flex items-center gap-6">
            <div className="text-[#1e293b] font-black text-xl tracking-wide">
              CREMP
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex bg-[#f8fafc] p-1 rounded-xl border border-[#e2e8f0] shadow-sm">
              <button
                onClick={() => setIsMobile(false)}
                className={`flex items-center gap-2 px-5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  !isMobile 
                    ? 'bg-[#1e293b] text-white shadow-md' 
                    : 'text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9]'
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setIsMobile(true)}
                className={`flex items-center gap-2 px-5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isMobile 
                    ? 'bg-[#1e293b] text-white shadow-md' 
                    : 'text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9]'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Mobile</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold tracking-widest text-[#94a3b8] uppercase hidden sm:block">
                View
              </span>
              <div className="w-[140px]">
                <Dropdown 
                  options={dropdownOptions} 
                  value={view} 
                  onChange={handleViewChange} 
                  size="md"
                />
              </div>
            </div>
            
            <div className="w-px h-8 bg-[#e2e8f0] hidden sm:block"></div>
            
            <button className="text-[#64748b] hover:text-[#0f172a] transition-colors p-2 rounded-lg hover:bg-[#f8fafc]">
              <Moon className="w-5 h-5" />
            </button>
            <button className="w-9 h-9 rounded-lg border border-[#e2e8f0] text-[#64748b] hover:text-[#0f172a] hover:bg-[#f8fafc] transition-all flex items-center justify-center shadow-sm">
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        <main className="flex-1 w-full h-[calc(100vh-60px)] overflow-hidden bg-[#f0f2f5] relative">
          <MobileViewport isMobile={isMobile}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home isMobile={isMobile} />} />
              <Route path="/forms" element={<Home isMobile={isMobile} />} />
            </Routes>
          </MobileViewport>
        </main>
      </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
