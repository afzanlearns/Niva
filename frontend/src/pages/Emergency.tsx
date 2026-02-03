import { Phone, MapPin, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Emergency = () => {
    const navigate = useNavigate();

    return (
        <div className="emergency-screen">
            <button className="back-btn" onClick={() => navigate(-1)}>
                <ArrowLeft size={24} /> Back
            </button>

            <div className="emergency-content text-center">
                <div className="pulse-ring">
                    <div className="sos-icon">SOS</div>
                </div>

                <h1>Emergency Mode</h1>
                <p className="mb-4">Finding nearest help...</p>

                <div className="card hospital-card text-left mb-4">
                    <div className="flex justify-between">
                        <div>
                            <h3>City General Hospital</h3>
                            <p className="text-sm">2.4 km away • Open 24h</p>
                        </div>
                        <div className="eta-badge">8 min</div>
                    </div>
                    <div className="divider my-2"></div>
                    <div className="flex gap-2">
                        <button className="btn btn-emergency flex-1">
                            <Phone size={20} /> Call Now
                        </button>
                        <button className="btn btn-secondary flex-1">
                            <MapPin size={20} /> Directions
                        </button>
                    </div>
                </div>

                <div className="card hospital-card text-left opacity-75">
                    <div>
                        <h3>Railway Clinic</h3>
                        <p className="text-sm">5.1 km away</p>
                    </div>
                </div>

            </div>

            <style>{`
        .emergency-screen {
          background-color: #FEF2F2;
          min-height: 100vh;
          padding: var(--spacing-4);
          color: #7F1D1D;
        }
        .back-btn {
          background: none;
          border: none;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: inherit;
          margin-bottom: var(--spacing-8);
          cursor: pointer;
        }
        
        .pulse-ring {
          width: 120px;
          height: 120px;
          background: var(--color-emergency);
          border-radius: 50%;
          margin: 0 auto 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7);
          animation: pulse-red 2s infinite;
        }
        
        .sos-icon {
          color: white;
          font-weight: 900;
          font-size: 2rem;
        }
        
        @keyframes pulse-red {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 20px rgba(220, 38, 38, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(220, 38, 38, 0);
          }
        }
        
        .hospital-card {
          background: white;
          border: 1px solid #FECACA;
        }
        
        .eta-badge {
          background: #EEF2FF;
          color: #4338CA;
          padding: 4px 8px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 0.8rem;
          height: fit-content;
        }
        
        .my-2 { margin: 8px 0; }
        .divider { height: 1px; background: #E5E7EB; }
        .opacity-75 { opacity: 0.75; }
      `}</style>
        </div>
    );
};
