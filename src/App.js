
import { ThemeProvider } from '@mui/styles';
import './App.css';
import Header from './pages/Header';


function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Header/>
      </ThemeProvider>
    </div>
  );
}

export default App;



// https://www.coronatracker.com/