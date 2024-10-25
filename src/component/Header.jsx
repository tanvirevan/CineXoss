import { useContext, useState } from "react";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import Logo from "../utils/Logo";
import Ring from "../utils/Ring";

import CartDetails from "../cine/CartDetails";
import { MovieContext, ThemeContext } from "../context";
import ShoppingCart from "../utils/ShoppingCart";

export default function Header() 
{
    const [showCardDetails, setShowCardDetails] = useState(false);
    const {cartData} = useContext(MovieContext);
    const {darkMode, setDarkMode} = useContext(ThemeContext);

  

    function handleCardDetails ()
      {
        setShowCardDetails(true);
      }

    function handleCloseCard()
      {
        setShowCardDetails(false);
      }
    return (
        <>
          {
            showCardDetails &&
            <CartDetails
              onClose={handleCloseCard}

            />
          }
          <header>
              <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <Logo/>
                </a>

                <ul className="flex items-center space-x-5">
                  <li>
                    <a className=" bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                      <Ring/>
                    </a>
                  </li>
                  <li>
                    <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#" onClick={() => setDarkMode(darkMode => !darkMode)}>
                      <img src={ darkMode? Sun : Moon} width="24" height="24" alt="theme-icon" />
                    </a>
                  </li>
                  <li>
                    <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#" onClick={() => handleCardDetails()}>
                      <ShoppingCart/>
                      {
                        cartData?.length > 0 
                        &&(<span className="rounded-full absolute top-[-12px] left-[28px] bg-primary dark:bg-[#A3181D]  text-white text-center p-[2px] w-[30px] h-[30px]">{cartData.length}</span>)

                      }
                    </a>
                  </li>
                </ul>
              </nav>
            </header>
        </>
    );
}
