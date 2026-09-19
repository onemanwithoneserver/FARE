import { useState, useEffect } from 'react'
import MobileViewport from './Components/MobileViewport'
import Header, { type ViewMode } from './Components/Header'
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import Home from './Home'

export default function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  const pathSegments = location.pathname.split('/').filter(Boolean)
  const currentModeFromUrl: ViewMode = pathSegments[0] === 'mobile' ? 'mobile' : 'desktop'
  const currentViewFromUrl = pathSegments[1] || 'home'
  
  const viewMode: ViewMode = currentModeFromUrl
  const isMobile = viewMode === 'mobile'
  const view = currentViewFromUrl.charAt(0).toUpperCase() + currentViewFromUrl.slice(1)

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

  const handleViewModeChange = (newMode: ViewMode) => {
    navigate(`/${newMode}/${currentViewFromUrl}`)
  }

  const handleViewChange = (newView: string) => {
    navigate(`/${viewMode}/${newView.toLowerCase()}`)
  }

  return (
    <div className="flex flex-col h-screen w-full bg-[#eef2f6] font-sans relative">
      {isHeaderVisible ? (
        <Header 
          viewMode={viewMode}
          onViewModeChange={handleViewModeChange}
          view={view}
          onViewChange={handleViewChange}
          onClose={() => setIsHeaderVisible(false)}
        />
      ) : (
        <button
          onClick={() => setIsHeaderVisible(true)}
          title="Press Ctrl+M to toggle header"
          className="fixed top-3 right-[#071A49] z-50 px-3 py-1.5 bg-[#1e293b] text-white text-xs font-semibold rounded-[4px] shadow-lg flex items-center gap-1.5 hover:bg-[#0f172a] transition-all cursor-pointer opacity-90 hover:opacity-100"
        >
          <span>Header Hidden (Ctrl+M)</span>
        </button>
      )}

      <main className={`flex-1 w-full overflow-hidden bg-[#f0f2f5] relative ${isHeaderVisible ? 'h-[calc(100vh-60px)]' : 'h-screen'}`}>
        <MobileViewport isMobile={isMobile}>
          <Routes>
            <Route path="/" element={<Navigate to="/desktop/home" replace />} />
            <Route path="/:mode" element={<Navigate to={`/${viewMode}/home`} replace />} />
            <Route path="/:mode/home" element={<Home isMobile={isMobile} />} />
            <Route path="/:mode/forms" element={<Home isMobile={isMobile} />} />
            <Route path="*" element={<Navigate to="/desktop/home" replace />} />
          </Routes>
        </MobileViewport>
      </main>
    </div>
  )
}

