import Footer from "./components/Footer";
import Header from "./components/Header";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./styles/Themes";
import {GlobalStyles} from "./styles/GlobalStyles";
import {useDarkMode} from "./hooks/useDarkMode";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Links from "./pages/Links";
import Blog from "./pages/Blog";
import About from "./pages/About";

function App() {

    const [theme, themeToggler] = useDarkMode();

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles/>
                <div>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/links" element={<Links/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                    </Routes>
                    <Footer themeToggler={themeToggler} activeTheme={theme}/>
                </div>
            </>
        </ThemeProvider>
    );
}

export default App;
