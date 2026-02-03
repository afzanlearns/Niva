import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Layout } from './components/layout/Layout';
import { Home, HealthAssistant, Emergency, FamilyTree, Landing } from './pages';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="chat" element={<HealthAssistant />} />
            <Route path="family" element={<FamilyTree />} />
          </Route>
          <Route path="/emergency" element={<Emergency />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
