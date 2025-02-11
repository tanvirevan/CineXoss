import { useContext } from "react"
import { ThemeContext } from "../context"


export default function ShoppingCart() 
{
  const {darkMode} = useContext(ThemeContext);
  return (
    <div>
      <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g id="Frame">
            <g id="Vector" filter="url(#filter0_b_58_177)">
               <path d="M0 6C0 2.68629 2.68629 0 6 0H24C27.3137 0 30 2.68629 30 6V24C30 27.3137 27.3137 30 24 30H6C2.68629 30 0 27.3137 0 24V6Z" fill="#DDFF4A" fillOpacity="0.07"/>
            </g>
            <path id="Vector_2" d="M17.235 22C18.1 22 18.557 23.024 17.98 23.668C17.6051 24.0875 17.1459 24.4229 16.6323 24.6525C16.1188 24.8821 15.5625 25.0005 15 25C14.4374 25.0005 13.8812 24.8821 13.3676 24.6525C12.854 24.4229 12.3948 24.0875 12.02 23.668C11.468 23.052 11.862 22.089 12.654 22.007L12.764 22.001L17.235 22Z" fill={darkMode? "#A3181D" :"#00D991"}/>
            <path id="Vector_3" d="M15 6C16.2069 6 17.2271 6.79012 17.555 7.87337L17.5959 8.023L17.603 8.06063C18.5827 8.60479 19.4176 9.36972 20.0392 10.2927C20.6607 11.2158 21.0514 12.2707 21.1792 13.371L21.2041 13.6221L21.2209 13.875V16.4396L21.2396 16.5586C21.3613 17.2033 21.7236 17.7799 22.2554 18.1747L22.4038 18.2771L22.5478 18.3637C23.3121 18.7899 23.0454 19.909 22.2127 19.9947L22.1096 20H7.89039C6.97681 20 6.65776 18.8065 7.45226 18.3637C7.79088 18.1751 8.08346 17.9157 8.30945 17.6039C8.53544 17.292 8.68937 16.9353 8.76043 16.5586L8.77909 16.4335L8.77998 13.8348C8.83417 12.6919 9.17204 11.5795 9.76403 10.595C10.356 9.61053 11.1841 8.78391 12.1757 8.1875L12.3961 8.05975L12.405 8.02212C12.5307 7.4989 12.8164 7.02623 13.2236 6.66792C13.6307 6.30961 14.1397 6.08289 14.6819 6.01837L14.8436 6.0035L15 6Z" fill= {darkMode? "#A3181D" :"#00D991"}/>
         </g>
         <defs>
            <filter id="filter0_b_58_177" x="-4" y="-4" width="24" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_58_177"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_58_177" result="shape"/>
            </filter>
         </defs>
      </svg>

    </div>
  )
}
