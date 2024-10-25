
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Page from "./component/page";
import { MovieContext, ThemeContext } from "./context";
import { useState } from "react";

function App() 
    {
        const [cartData, setCartData] = useState([]);
        const [darkMode, setDarkMode] = useState(false);
        return (
            <>
                <ThemeContext.Provider value={{darkMode, setDarkMode}}>
                    <MovieContext.Provider value={{cartData, setCartData}}>
                        <Page></Page>
                        <ToastContainer />
                    </MovieContext.Provider>
                </ThemeContext.Provider>
            </>
        );
    }

export default App;
