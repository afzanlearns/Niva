import { useApp } from '../context/AppContext';
import { Mic, Activity, Calendar, Thermometer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const { user, language } = useApp();
    const navigate = useNavigate();

    const t = {
        en: {
            greeting: 'Namaste',
            how_feeling: 'How is your family feeling today?',
            ask_niva: 'Ask Niva',
            ask_sub: '"My child has a fever..." or "Is neem good for..."',
            tap_speak: 'Tap to Speak',
            quick_actions: 'Quick Actions',
            symptoms: 'Check Symptoms',
            vaccines: 'Vaccinations',
            timeline: 'Health Timeline',
            view_all: 'View All'
        },
        hi: {
            greeting: 'नमस्ते',
            how_feeling: 'आज आपका परिवार कैसा महसूस कर रहा है?',
            ask_niva: 'निवा से पूछें',
            ask_sub: '"मेरे बच्चे को बुखार है..." या "क्या नीम..."',
            tap_speak: 'बोलने के लिए टैप करें',
            quick_actions: 'त्वरित कार्य',
            symptoms: 'लक्षण जांचें',
            vaccines: 'टीकाकरण',
            timeline: 'स्वास्थ्य समयरेखा',
            view_all: 'सभी देखें'
        }
    }[language === 'hi' ? 'hi' : 'en'];

    return (
        <div className="home-page fade-in">
            <section className="welcome-section mb-4">
                <h1 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--spacing-1)' }}>{t.greeting}, {user.name} 🙏</h1>
                <p style={{ color: 'var(--color-text-muted)' }}>{t.how_feeling}</p>
            </section>

            {/* Main Action - Health Assistant */}
            <section className="assistant-card card mb-4" onClick={() => navigate('/chat')}>
                <div className="flex justify-between items-center mb-4">
                    <div className="icon-bg">
                        <Activity size={24} color="var(--color-primary)" />
                    </div>
                    <span className="badge">AI Powered</span>
                </div>
                <h2 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--spacing-2)' }}>{t.ask_niva}</h2>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-4)' }}>
                    {t.ask_sub}
                </p>
                <button className="voice-btn-large">
                    <Mic size={24} />
                    <span>{t.tap_speak}</span>
                </button>
            </section>

            {/* Quick Actions */}
            <h3 style={{ fontSize: 'var(--text-base)', marginBottom: 'var(--spacing-3)' }}>{t.quick_actions}</h3>
            <div className="grid-2 mb-4">
                <div className="action-card card">
                    <Thermometer size={24} className="mb-2" color="var(--color-accent)" />
                    <span>{t.symptoms}</span>
                </div>
                <div className="action-card card">
                    <Calendar size={24} className="mb-2" color="var(--color-primary)" />
                    <span>{t.vaccines}</span>
                </div>
            </div>

            {/* Recent Activity / Timeline Snippet */}
            <div className="flex justify-between items-center mb-2">
                <h3 style={{ fontSize: 'var(--text-base)' }}>{t.timeline}</h3>
                <button className="btn-link">{t.view_all}</button>
            </div>

            <div className="card timeline-card">
                <div className="timeline-item">
                    <div className="timeline-date">Today</div>
                    <div className="timeline-content">
                        <p className="font-medium">Raju - Fever Check</p>
                        <p className="text-sm text-muted">Temp 99.8°F recorded</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-date">Feb 2</div>
                    <div className="timeline-content">
                        <p className="font-medium">Lakshmi - Medication</p>
                        <p className="text-sm text-muted">Taken at 9:00 AM</p>
                    </div>
                </div>
            </div>

            <style>{`
        .icon-bg {
          background: var(--color-primary-light);
          padding: 8px;
          border-radius: 50%;
        }
        .badge {
          background: var(--color-surface-dim);
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .voice-btn-large {
          width: 100%;
          background: var(--color-primary);
          color: white;
          border: none;
          padding: 16px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: var(--text-lg);
          font-weight: 600;
          cursor: pointer;
          box-shadow: var(--shadow-md);
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-4);
        }
        .action-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-weight: 500;
          padding: var(--spacing-4);
        }
        .btn-link {
          background: none;
          border: none;
          color: var(--color-primary);
          font-size: var(--text-sm);
          cursor: pointer;
        }
        .timeline-item {
          display: flex;
          gap: 16px;
          padding: 8px 0;
          border-bottom: 1px solid var(--color-surface-dim);
        }
        .timeline-item:last-child {
          border-bottom: none;
        }
        .timeline-date {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          width: 48px;
        }
        .text-muted { color: var(--color-text-muted); }
        .font-medium { font-weight: 500; }
        
        /* Simple Fade In Animation */
        .fade-in { animation: fadeIn 0.5s ease-in; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
        </div>
    );
};
