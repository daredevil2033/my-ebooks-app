import './App.css';
import BookManager from './BookManager';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {CssBaseline} from "@mui/material";

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
                <h1>E-books App</h1>
                <BookManager />
            </div>
        </ThemeProvider>
    );
}

export default App;
