import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Home, MessageSquare, Users, AlertTriangle, Globe } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Layout = () => {
  const { user, language, setLanguage } = useApp();
  const location = useLocation();
  const isEmergency = location.pathname === '/emergency';

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en'); // Simple toggle for now
  };

  if (isEmergency) {
    return <Outlet />; // Emergency/Full screen pages don't show nav
  }

  return (
    <div className="layout-root">
      {/* Top Bar */}
      <header className="header">
        <div className="container header-container">
          <div className="brand">
            <div className="logo-icon">
              <span style={{ fontSize: '1.5rem' }}>🌿</span>
            </div>
            <span className="brand-name">Niva</span>
          </div>

          <div className="header-actions">
            <button className="lang-btn" onClick={toggleLanguage} aria-label="Change Language">
              <Globe size={20} />
              <span>{language.toUpperCase()}</span>
            </button>
            <div className="profile-chip">
              <div className="avatar">{user.name[0]}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <Outlet />
        </div>
      </main>

      {/* Bottom Nav (Mobile First) */}
      <nav className="bottom-nav">
        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Home size={24} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/chat" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <MessageSquare size={24} />
          <span>Assistant</span>
        </NavLink>
        <NavLink to="/family" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Users size={24} />
          <span>Family</span>
        </NavLink>
        <NavLink to="/emergency" className="nav-item emergency-tab">
          <AlertTriangle size={24} />
          <span>SOS</span>
        </NavLink>
      </nav>

      <style>{`
        .layout-root {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: var(--color-bg);
          padding-bottom: 80px; /* Space for bottom nav */
        }

        .header {
          background-color: var(--color-primary);
          color: white;
          padding: var(--spacing-3) 0;
          position: sticky;
          top: 0;
          z-index: 10;
          box-shadow: var(--shadow-md);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
          font-weight: 700;
          font-size: var(--text-lg);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
        }

        .lang-btn {
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          padding: 4px 8px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: var(--text-xs);
          cursor: pointer;
        }

        .profile-chip {
          width: 32px;
          height: 32px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          font-weight: 600;
        }

        .main-content {
          padding-top: var(--spacing-4);
          flex: 1;
        }

        .bottom-nav {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          display: flex;
          justify-content: space-around;
          padding: 8px 0;
          box-shadow: 0 -1px 3px rgba(0,0,0,0.1);
          z-index: 20;
          height: 64px;
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--color-text-muted);
          font-size: var(--text-xs);
          gap: 4px;
          text-decoration: none;
          flex: 1;
        }

        .nav-item.active {
          color: var(--color-primary);
        }

        .emergency-tab {
          color: var(--color-emergency);
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};
