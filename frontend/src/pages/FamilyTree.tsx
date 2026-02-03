import { useApp } from '../context/AppContext';
import { Plus, User, AlertCircle } from 'lucide-react';

export const FamilyTree = () => {
    const { familyMembers } = useApp();

    return (
        <div className="family-page">
            <div className="flex justify-between items-center mb-4">
                <h2>My Family</h2>
                <button className="btn btn-primary" style={{ borderRadius: '50%', width: 40, height: 40, padding: 0 }}>
                    <Plus size={24} />
                </button>
            </div>

            <div className="grid-list">
                {familyMembers.map((member) => (
                    <div key={member.id} className="card member-card">
                        <div className="member-avatar">
                            {member.avatar ? <img src={member.avatar} alt={member.name} /> : <User size={24} />}
                        </div>
                        <div className="member-info">
                            <h3>{member.name}</h3>
                            <p className="text-muted">{member.age} years • {member.role === 'primary' ? 'Caregiver' : 'Member'}</p>
                        </div>
                        <div className="member-status">
                            {/* Mock Status */}
                            {member.name === 'Raju' && <span className="status-dot warning"></span>}
                            {member.name !== 'Raju' && <span className="status-dot good"></span>}
                        </div>
                    </div>
                ))}
            </div>

            <div className="info-block mt-4">
                <h3 className="mb-2">Hereditary Risks</h3>
                <div className="card risk-card">
                    <AlertCircle size={20} className="text-warning" />
                    <div>
                        <p className="font-medium">Diabetes History</p>
                        <p className="text-sm text-muted">Detected in maternal line. Monitoring suggested for <strong>Lakshmi</strong>.</p>
                    </div>
                </div>
            </div>

            <style>{`
        .grid-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-3);
        }
        .member-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          padding: 12px;
          cursor: pointer;
        }
        .member-avatar {
          width: 48px;
          height: 48px;
          background: var(--color-primary-light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary-dark);
        }
        .member-info {
          flex: 1;
        }
        .status-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: block;
        }
        .status-dot.good { background-color: var(--color-success); }
        .status-dot.warning { background-color: var(--color-warning); }
        
        .risk-card {
          display: flex;
          gap: 12px;
          border-left: 4px solid var(--color-warning);
        }
        .text-warning { color: var(--color-warning); }
      `}</style>
        </div>
    );
};
