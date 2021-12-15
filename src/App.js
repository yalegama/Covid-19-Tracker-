
import { ThemeProvider } from '@mui/styles';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <HomePage/>
      </ThemeProvider>
    </div>
  );
}

export default App;
