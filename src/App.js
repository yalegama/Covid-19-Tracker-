
import { ThemeProvider } from '@mui/styles';
import './App.css';
import Header from './components/Header';
import {theme} from "./theme";

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
