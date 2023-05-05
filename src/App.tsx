import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { TabsPage } from './components/TabsPage';
import { Title } from './components/Title';

export const App = () => (
  <>
    <Navbar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<Title text="Home page" />} />

          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="/tabs">
            <Route index element={<TabsPage />} />

            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route path="*" element={<Title text="Page not found" />} />
        </Routes>
      </div>
    </div>
  </>
);
