import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import CategoryPage from './pages/CategoryPage';
import TopicsPage from './pages/TopicsPage';
import DataProvider from './app-context/context';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<CategoryPage />} />
            <Route path="/:topicID" element={<TopicsPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </DataProvider>

  );
}

export default App;
