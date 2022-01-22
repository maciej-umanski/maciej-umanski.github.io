import Footer from "./components/Footer";
import Header from "./components/Header";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./styles/Themes";
import {GlobalStyles} from "./styles/GlobalStyles";
import {useDarkMode} from "./hooks/useDarkMode";
import {Route, Routes} from "react-router-dom";
import Page from "./components/Page";

function App() {

    const [theme, themeToggler] = useDarkMode();

    const home = () => {
        return <Page name="home"/>
    }
    const contact = () => {
        return <Page name="contact"/>
    }
    const blog = () => {
        return <Page name="blog"/>
    }
    const links = () => {
        return <Page name="links"/>
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles/>
                <div>
                    <Header/>
                    <Routes>
                        <Route path="/" element={home()}/>
                        <Route path="/contact" element={contact()}/>
                        <Route path="/blog" element={blog()}/>
                        <Route path="/links" element={links()}/>
                    </Routes>
                    <Footer themeToggler={themeToggler} activeTheme={theme}/>
                </div>
            </>
        </ThemeProvider>
    );
}

export default App;
