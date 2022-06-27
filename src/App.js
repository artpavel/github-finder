import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/not-found';
import { GithubProvider } from './context/github/github-context';
import { AlertProvider } from './context/alert/alert-context';
import Alert from './components/layout/alert';
import User from './pages/user';


const App = () => (
  <GithubProvider>
    <AlertProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Alert />
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/about" element={ <About /> } />
              <Route path="/user/:login" element={ <User /> } />
              <Route path="/notfound" element={ <NotFound /> } />
              <Route path="/*" element={ <NotFound /> } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AlertProvider>
  </GithubProvider>
);

export default App;
