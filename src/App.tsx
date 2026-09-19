import { useState, useEffect } from 'react'
import MobileViewport from './Components/MobileViewport'
import Header, { type ViewMode } from './Components/Header'
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('desktop')
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const isMobile = viewMode === 'mobile'
  const navigate = useNavigate()
  const location = useLocation()
  
  const currentPath = location.pathname.split('/')[1] || 'home'
  const view = currentPath.charAt(0).toUpperCase() + currentPath.slice(1)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'm') {
        e.preventDefault()
        setIsHeaderVisible(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleViewChange = (newView: string) => {
    navigate(`/${newView.toLowerCase()}`)
  }

  return (
    <div className="flex flex-col h-screen w-full bg-[#eef2f6] font-sans relative">
      {isHeaderVisible ? (
        <Header 
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          view={view}
          onViewChange={handleViewChange}
          onClose={() => setIsHeaderVisible(false)}
        />
      ) : (
        <button
          onClick={() => setIsHeaderVisible(true)}
          title="Press Ctrl+M to toggle header"
          className="fixed top-3 right-3 z-50 px-3 py-1.5 bg-[#1e293b] text-white text-xs font-semibold rounded-lg shadow-lg flex items-center gap-1.5 hover:bg-[#0f172a] transition-all cursor-pointer opacity-90 hover:opacity-100"
        >
          <span>Header Hidden (Ctrl+M)</span>
        </button>
      )}

      <main className={`flex-1 w-full overflow-hidden bg-[#f0f2f5] relative ${isHeaderVisible ? 'h-[calc(100vh-60px)]' : 'h-screen'}`}>
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

