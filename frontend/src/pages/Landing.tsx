import { useNavigate } from 'react-router-dom';
import { Activity, Shield, Users, Mic, Heart, ArrowRight } from 'lucide-react';

export const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-page fade-in">
            {/* Hero Section */}
            <header className="hero-section text-center p-6 mt-8">
                <div className="logo-large mb-4">🌿</div>
                <h1 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-primary-dark)', marginBottom: 'var(--spacing-4)' }}>
                    Niva
                </h1>
                <p style={{ fontSize: 'var(--text-xl)', color: 'var(--color-text-body)', maxWidth: '600px', margin: '0 auto var(--spacing-8)' }}>
                    A health companion that understands your family, your language, and your life.
                </p>
                <div className="flex flex-col gap-4 items-center">
                    <button className="btn btn-primary btn-large" onClick={() => navigate('/home')}>
                        <span>Get Started</span>
                        <ArrowRight size={20} />
                    </button>
                    {/* <button className="btn btn-ghost">Learn More</button> */}
                </div>
            </header>

            {/* About / Trust Section */}
            <section className="about-section container mt-12 mb-12">
                <div className="card shadow-md p-6" style={{ background: 'var(--color-primary-light)', border: 'none' }}>
                    <div className="flex flex-col items-center text-center gap-4">
                        <Shield size={32} color="var(--color-primary)" />
                        <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: 0 }}>Trusted & Secure</h2>
                        <p className="text-muted">
                            Private family health tracking designed for rural India. Your data is safe and locally stored.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-section container mb-12">
                <h3 className="text-center mb-6">How Niva Helps You</h3>
                <div className="grid-2">
                    <ServiceCard
                        icon={<Users size={24} color="var(--color-primary)" />}
                        title="Family Health"
                        desc="Track health records for every member of your family."
                    />
                    <ServiceCard
                        icon={<Mic size={24} color="var(--color-accent)" />}
                        title="Voice Assistant"
                        desc="Ask health questions in Hindi, Telugu, or English."
                    />
                    <ServiceCard
                        icon={<Heart size={24} color="#E11D48" />}
                        title="Remedies"
                        desc="Culturally relevant home remedies and guidance."
                    />
                    <ServiceCard
                        icon={<Activity size={24} color="var(--color-success)" />}
                        title="Prevention"
                        desc="Vaccination reminders and seasonal health tips."
                    />
                </div>
            </section>

            {/* Footer */}
            <footer className="footer text-center p-6 mt-8" style={{ borderTop: '1px solid var(--color-surface-dim)' }}>
                <p className="text-muted text-sm mb-2">
                    Niva is a health companion, not a replacement for a doctor.
                </p>
                <div className="flex justify-center gap-4 text-sm text-primary">
                    <span>English</span>
                    <span>हिंदी</span>
                    <span>తెలుగు</span>
                </div>
            </footer>

            <style>{`
                .hero-section {
                    padding-top: var(--spacing-12);
                    padding-bottom: var(--spacing-12);
                }
                .logo-large {
                    font-size: 3rem;
                }
                .btn-large {
                    padding: var(--spacing-3) var(--spacing-8);
                    font-size: var(--text-lg);
                    width: 100%;
                    max-width: 300px;
                }
                .grid-2 {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: var(--spacing-4);
                }
                @media (min-width: 640px) {
                    .grid-2 {
                        grid-template-columns: 1fr 1fr;
                    }
                }
                .fade-in { animation: fadeIn 0.8s ease-out; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </div>
    );
};

const ServiceCard = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="card flex flex-col items-center text-center p-4">
        <div className="mb-2 p-2 bg-white rounded-full shadow-sm" style={{ backgroundColor: 'var(--color-bg)' }}>{icon}</div>
        <h4 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--spacing-1)' }}>{title}</h4>
        <p className="text-muted text-sm">{desc}</p>
    </div>
);
