import { useContext } from "react";
import { ThemeContext } from "../context";

export default function Trending() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
          <path
            d="M12 12C14 9.04 12 5 11 4C11 7.038 9.227 8.741 8 10C6.774 11.26 6 13.24 6 15C6 16.5913 6.63214 18.1174 7.75736 19.2426C8.88258 20.3679 10.4087 21 12 21C13.5913 21 15.1174 20.3679 16.2426 19.2426C17.3679 18.1174 18 16.5913 18 15C18 13.468 16.944 11.06 16 10C14.214 13 13.209 13 12 12Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={darkMode ? "white" : "black"}
          />
      </svg>
    </div>
  );
}
