import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Home, MessageSquare, Users, Globe } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Layout = () => {
  const { user, language, setLanguage } = useApp();
  const location = useLocation();
  const isEmergency = location.pathname === '/emergency';

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  if (isEmergency) {
    return <Outlet />;
  }

  return (
    <div className="layout-root">
      {/* Top Bar - Clean & Minimal */}
      <header className="header">
        <div className="container header-container">
          <div className="brand">
            <div className="logo-icon">🌿</div>
            <span className="brand-name">Niva</span>
          </div>

          <div className="header-actions">
            <button className="lang-btn" onClick={toggleLanguage} aria-label="Change Language">
              <Globe size={18} />
              <span>{language.toUpperCase()}</span>
            </button>
            <div className="profile-chip">
              {user.name[0]}
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

      {/* Bottom Nav - Distinct Hierarchy */}
      <nav className="bottom-nav">
        <NavLink to="/home" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Home size={24} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/home/chat" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <MessageSquare size={24} />
          <span>Assistant</span>
        </NavLink>
        <NavLink to="/home/family" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Users size={24} />
          <span>Family</span>
        </NavLink>
        <NavLink to="/emergency" className="nav-item emergency-tab">
          <div className="sos-icon">SOS</div>
          <span>Emergency</span>
        </NavLink>
      </nav>

      <style>{`
        .layout-root {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: var(--color-bg);
          padding-bottom: 80px;
        }

        .header {
          background-color: var(--color-surface); /* White header */
          color: var(--color-text-main);
          padding: var(--spacing-3) 0;
          position: sticky;
          top: 0;
          z-index: 10;
          box-shadow: var(--shadow-sm); /* Subtle shadow */
          border-bottom: 1px solid var(--color-surface-dim);
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
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--text-lg);
          color: var(--color-primary);
        }
        
        .logo-icon {
          font-size: 1.5rem;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
        }

        .lang-btn {
          background: var(--color-surface-dim);
          border: none;
          color: var(--color-text-body);
          padding: 6px 10px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: var(--text-xs);
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .lang-btn:hover {
            background: var(--color-surface-dim); /* darken slightly? or just keep same */
            filter: brightness(0.95);
        }

        .profile-chip {
          width: 36px;
          height: 36px;
          background: var(--color-primary-light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary-dark);
          font-weight: 700;
          font-size: var(--text-sm);
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
          background: var(--color-surface);
          display: flex;
          justify-content: space-around;
          padding: 12px 0;
          box-shadow: 0 -4px 20px rgba(0,0,0,0.04);
          z-index: 20;
          height: 72px; /* Slightly taller */
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--color-text-muted);
          font-size: 0.7rem;
          gap: 4px;
          text-decoration: none;
          flex: 1;
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-item.active {
          color: var(--color-primary);
        }
        
        .nav-item svg {
            transition: transform 0.2s;
        }
        .nav-item.active svg {
            transform: translateY(-2px);
        }

        .emergency-tab {
          color: var(--color-emergency);
        }
        
        .sos-icon {
            background: var(--color-emergency-bg);
            color: var(--color-emergency);
            border: 1px solid rgba(239, 68, 68, 0.2);
            border-radius: 8px;
            padding: 4px 8px;
            font-weight: 700;
            font-size: 0.8rem;
        }
      `}</style>
    </div>
  );
};
