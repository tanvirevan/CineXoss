import { useContext } from "react"
import { ThemeContext } from "../context"

function Logo() 
   {
   const {darkMode} = useContext(ThemeContext)
   return (
      <div>
            <svg version="1.1" viewBox="0 0 2048 2048" width="100" height="80" xmlns="http://www.w3.org/2000/svg">
               <path transform="translate(810,375)" d="m0 0h442l84 1 19 2 17 5 16 6 19 11 7 7 8 6 10 12 8 13 5 12 3 12 3 28 2 23 220 1 36 2 27 4 26 6 24 8 25 12 9 5 21 14 21 16 8 8 8 7 18 18 13 17 11 17 10 18 11 23 10 30 5 20 4 25 1 18-3 10-4 6-5 4-11 4-11 2-11 1h-21l-16-3-9-4-5-5-5-10-6-25-6-21-6-15-10-20-7-10-8-12-23-23-13-10-15-9-16-8-15-6-21-5-23-3-18-1-322-1-7-4-4-6-1-3-1-19v-106l-4-5-2-1-562-1-7 4-1 2-1 104-1 22-3 7-8 5-6 1-122 1h-200l-25 2-25 5-15 5-20 9-14 8-14 11-14 12-7 7-11 14-10 16-12 25-6 19-5 22-1 8-1 23-1 52v455l1 66 1 31 3 16 9 27 14 29 11 17 15 16 14 14 15 11 17 9 24 10 24 6 15 2 14 1 42 1h377l12 1 9 4 5 6 1 3 1 14v59l-2 8-7 6-6 2-7 1h-49l-374-1-32-2-23-3-27-7-24-8-20-9-16-8-16-11-14-10-14-11-9-9-8-7-9-9-11-14-11-15-11-19-6-10-12-28-7-19-7-27-4-28-1-17-1-559 1-64 3-24 6-26 8-26 8-21 11-21 8-13 5-9 9-11 9-12 14-15 8-8 11-9 16-13 20-13 19-11 16-8 17-7 28-8 26-5 17-2 25-1 203-1 21-1 2-1 1-3 2-31 2-17 6-17 7-13 10-14 10-10 14-10 15-8 22-8 16-3 12-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(665,877)" d="m0 0h40l4 10 14 48 13 43 10 34 5 18 3 8 2 1 1-159 3-3h35l1 1v279h-39l-3-5-9-30-7-25-8-26-12-40-11-35-6-18-3-2v180l-2 1h-36l-1-4v-131l1-144z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(1027,874)" d="m0 0h38l4 8 14 41 12 33 3 4 14-41 13-40 3-5h40l-3 11-9 23-13 36-19 51-2 7v8l13 37 15 39 7 21 14 35v4h-40l-5-8-16-47-9-24-5-15-3 1-17 52-11 35-3 6h-41l1-6 30-80 13-35 5-15 1-1v-8l-15-41-10-26-14-37-7-18v-4z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(425,873)" d="m0 0 19 1 12 3 11 6 10 8 9 13 5 14 2 15v26l-2 5-23 2h-12l-2-4-2-31-3-9-6-7-8-3h-12l-8 3-7 8-3 12v161l2 11 5 9 6 4 8 2h7l8-3 6-5 4-9 2-12 1-29 2-4h24l12 1 1 1v38l-2 15-5 14-7 11-9 9-12 7-14 4-20 1-13-1-13-4-11-6-8-7-9-14-5-16-1-9v-173l2-13 4-12 7-12 9-9 12-7 15-4z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(1524,870)" d="m0 0h13l14 2 12 4 11 7 9 10 6 12 3 14 1 16-1 2-11 2-19 2h-6l-2-4-2-15-4-8-5-4-4-2h-14l-6 3-5 6-3 9v12l4 15 5 9 11 13 17 16 8 7 17 17 9 12 8 14 5 14 2 14v23l-2 16-5 14-9 12-9 7-11 5-11 3-8 1h-15l-14-2-10-3-11-6-9-9-6-10-3-7-3-18-1-16 2-7 7-2 9-1h20l1 3 1 20 3 10 6 7 5 2h18l7-3 4-5 3-11v-22l-3-10-5-9-8-10-16-16-8-7-16-15-10-11-9-14-7-17-3-22v-12l3-20 5-12 7-9 9-8 12-5 8-2z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(1694,871)" d="m0 0h29l16 4 13 8 7 8 8 16 3 13v15l-4 3-19 2h-12l-2-2-3-17-4-8-5-4-7-2h-8l-8 3-6 7-2 6v21l4 12 8 12 18 18 11 9 20 20 10 14 7 12 5 15 2 15v23l-2 13-4 12-6 10-10 10-14 7-11 3-21 1-17-2-12-4-10-6-9-10-7-15-2-9-1-9v-19l1-4 5-2 9-1h22l1 6 1 19 3 8 5 6 7 3h16l7-3 6-7 2-8v-23l-4-12-6-10-9-10-11-11-8-7-10-9-14-14-11-15-8-16-3-11-1-7v-31l3-12 6-12 9-10 11-7 11-4z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(856,874)" d="m0 0h111l2 2v34l-1 1h-73v37l1 41 58 1 1 1v35l-10 1h-50v82h73l1 1 1 35-1 1h-114l-1-1v-265z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(1026,1341)" d="m0 0h149l121 1 68 1 46 1 28 1 49 1 55 3 34 3 5 1v1l-83 4-113 4-45 1-154 1h-221l-124-1-64-1-41-2-67-2-62-2-16-1-1-3-3-1 4-1 39-2 12-1 28-1 69-1 73-2 84-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1307,869)" d="m0 0h16l17 3 16 5 20 8 13 7 13 10 15 14 9 10 9 14 8 15 3 5 8 26 1 11v44l-6 24-5 12-8 16-7 11-8 11-9 9-17 13-10 8-10 6-15 6-16 4-24 4h-26l-17-2-18-5-16-8-14-9-12-9-15-14-14-18-6-8-7-12-8-21-3-13-1-10v-38l3-17 8-23 5-9 7-13 10-14 9-10 8-7 10-8 11-7 15-9 15-6 21-4zm-11 15-19 2-15 5-30 15-10 8-9 11-8 9-9 13-8 16-7 16-5 24v14l3 28 7 21 8 17 2 7h2l2 4 8 9 5 5 13 14 5 4 12 6 5 3 20 9 14 4 11 1h26l23-3 16-5 12-5 13-9 9-6 8-8 10-8 6-10 7-6 10-21 5-15 3-10v-41l-2-4-3-19-4-15-2-7-5-3-6-12-6-7-5-9-9-2-5-6-3-5-9-7-11-7-14-7-15-5-12-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1790,537)" d="m0 0 5 1 24 12 10 7 12 8 21 16 8 8 8 7 18 18 13 17 11 17 10 18 11 23 10 30 5 20 4 25 1 18-3 10-4 6-5 4-11 4-4 1h-9l3-2 6-3 1-6 3-1v-2l5-4 1-5 1-10 1-2v-11l-2-14-3-14-1-7-2-6-3-12-4-10-2-6-4-10-3 5 2 9v6l-3 4 1 5-2 3h-2l-3-5-4-2-1-4-4-1-3 3h-2l1-5-8-4v-2h-4l-3-15v-8h-2v-3h3l-2-5-9-2-2-3v-6l-5-2 1-4 2-6-4-1-1-2-1-11h-2l-3-9-4-4-3-7-7-7-7-4-4-5v-2l-6-2-11-11-2-5-7-2-9-8-10-6-7-3-4-2v-2l-4-1-8-3 1-3h10l7 2 3-2v2h3l-3-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(570,979)" d="m0 0h17l8 4 3 4 1 10v159l-2 1h-39l-1-43v-121l2-8 5-4z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(772,1344)" d="m0 0h64l12 1v2h9l5 1 16 1 19-3 3-2h17l2 2 8 2 2 2 3 2 3 1v-2l5 1h11l16-1 6-1 29 1 4 1 15-1h37 2 7l2 2 7 1 5 1v2l2 1-4 1h-14l-19 2-4 1h-18l-7-2-14-1-11 1h-10l-14 2-26-1 2 2h-103l-64-1-41-2-67-2-62-2-16-1-1-3-3-1 4-1 39-2 12-1 28-1 69-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1027,403)" d="m0 0h2l1 6 6-3h3 6l4-3 3 1 6 1-3 3 3 2 1-2 1-1 7-2h7l2 2 5-1 5-2v2h2l-1 4h2v3l2 2-4-1v-2l-9 2-2 4 4 2h5l5-1 3 2v3l5-1 4 3-1 3-4 2-3 2-2-1-1 2-2 2 2 1-5 3-1-2h-2l-1-3h-2l-6 1v2l-5 1v-3h-8l-11 3-5 1-7-4-7-1-3-2-2 1-1-2-2 1-2-1v3l-3 1-1-1v-5h-7v2h-3l-3 3h-4v-2l-4 2v-2h-4l-1-2-4 3-7-1-5-2-4 3-3-4v-2h-3l1 3-5 3-2 2-2-4h2l-2-3-3-1v2l-4 1-1-2 2-4 3-3 5-6 6 2h2v4l-2 1 3 2 3-1v-2l-2-2 1-2-3-1 2-5v-5h2v-2l4 2v5h3v-4l4-1 1 3 2 1 1-3 5-2 8 4 1-2 7 1v2h2l1-2 1 3 5-1 4-5 6-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1026,1341)" d="m0 0h149l45 1-2 2h-5v2l-8 2-18 1h-35l-28 4-15 3-11 1h-3-14l-5-2-10-2v-1h-6-3-42l-10 1-6-1-28-1-4 1-19 1h-8l-5-2v2l-6-1-4-4-7-2-1-1h-17l-2 2-10 1-10 2-16-1-11-1-3-1v-2l-36-1v-1l84-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1346,1344)" d="m0 0h64l28 1 49 1 55 3 34 3 5 1v1l-83 4-113 4h-49l1-4 6-1h-8l-13-2-2-3 8-3 12-3 3-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1248,1006)" d="m0 0 2 1 7-1-1 5-10 25-3 8-3 5-7 30-2 16-4 8-5-2-6-7v-2l-4-1-5-8-9-19-3-10v-9l6-7 15-9 13-10 14-9z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1429,1010)" d="m0 0h1l1 10-1 22-13 28-3 6-2 2-19-2-37-7-15-5v-3l8-5 22-9 27-14 9-6 15-11z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1264,1049)" d="m0 0 3 1 4 8 7 18 5 11 6 12 10 16 8 11 7 9v2l-2 1h-21l-10-2-16-6-12-6-3-3-1-3v-9l4-22 3-21 4-13z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1277,900)" d="m0 0 4 1 10 11 7 13 8 10 7 10 5 8 2 5-1 4-1 1-8-1-18-8-7-4-21-5-26-7-13-2-1-4 6-9 13-7 10-6 12-5z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1320,895)" d="m0 0 7 1 23 7 12 4 7 6 1 7-2 20-4 16-1 1-2 16-5 15-3-1-6-14-6-16-6-8-5-13-10-17-2-5-7-6-3-6v-5z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1300,1071)" d="m0 0 8 1 9 2 4 5 31 9 15 5 1 3 12-1 13 2v2h3v3l-16 14-7 4-4 1-9 5-18 6-5-1-5-6-5-5-5-8-1-4h-2l-6-7-6-11-5-7-3-9z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1221,956)" d="m0 0h6l4 2 26 6 14 2 6 4-4 5-16 8-21 9-19 10-5 5-14 10-8 5h-2v-14l2-14 6-18 8-16 4-3h12z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1393,924)" d="m0 0 4 4 8 15 4 6 4 8 5 4 3 11 1 12-4 11-6 5-17 10-22 14-6 2-2-4v-9l7-10 7-24 5-17 4-20z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(234,1388)" d="m0 0h2v20l2 2-2 3v-2h-2l-1 4-3 6 2 5 1 6v7l5 5 1 3 4 4 2 4h-2l1 4h-2v2l-2 2 1 10 3-1 5 9 4 5 1 2h5v2l3 1v2h2l3 6v2l5 1 4 5v2h2l4 6-1 5 4 4 4 2 2 2 4 2 2 2v4l2 3 5 2 1 5 5 1-2 1 1 7 3-2 1-2 7 2 2 1-1 3-15 3-4-5-7-1-2-3-2-4-4-3-2-2-5-1 1-7-1-2-8-1-3-7-2-7-9 2-6-6v-11l-1-7-5-6v-3-2h-3l-4-7-4-2-3-14-3-3v-7h-2l-1-4-3 1-4-2v-2l-7-1v-2h2l2-5 3-6-1-2-7 1-1-2 3-5 2-4 1-4 6-2v-9l5-7 4-2 2-5z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(149,1405)" d="m0 0 4 1 2 5 11 1 2 7h3l-1 5v2l5 10v2l2 1-1 2 3 1-4 4 1 7-2 18-2 5v2h2v2l5 1-2 4 1 5-3 2 2 4 4 4-3 1h-1l1 5-5 1-4-4-2-9-2-1-1-7 3 1-1-4-2-3-4 1-1-3-3-1h-1l-2 1-3-3-7-26-3-16v-13l1-3 3-1 2-10z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1176,1215)" d="m0 0h7l1 9 7-6 7-3h10l9 3 5 6 2 2 4-5 10-5 9-1 9 2 8 7 3 10v46l-4 2-4-2-1-49-3-5-3-3-3-1h-9l-8 4h-2l-4 8-1 47h-7l-1-1-1-50-5-6-5-2h-8l-8 4-6 9-1 46h-6l-2-6v-59z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(1350,1215)" d="m0 0 4 1v9l9-7 9-3 11 1 6 3 6 7 5-5 6-4 9-2 9 1 6 3 6 7 2 7v48l-4 1-3-1-1-8-1-43-5-6-4-2h-9l-8 4-4 5-2 6-1 45h-7l-1-12-1-40-5-6-4-2h-10l-8 5-4 6-1 5-1 44-7-1-1-3v-33l1-28z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(635,531)" d="m0 0h8l3 1 5 5-3 2 5-1 1 5-3 2-4-2-1-2-1 2h-2l-1 11 3 1-1 5h-2v3l-5 1 3 8 2 1-2 6h-3l-5 2-2-1-1 4h-2l-1 2-9-6-1 2-10 1-3-1 1 5h-3l-7-1-4-2v-2h-2l-1 2h-1l-4 1-2-4 5-2 3 1 1-5 5-4h2v-3l-4-1v-4l4-2 3 3 2-5 4-2h3l2-2 4 3 2-2 7-3 3-2 6 4-2 1 1 3-2 1 1 2h6l1-5v-4l-3 1-2-2 1-5-9 4-2-4 2-1v-5l-3 1v-2l-10-2-3-1v-2l9-2 16-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(373,1215)" d="m0 0h6l1 9 8-6 4-2h16l8 4 4 6 9-8 5-2h16l6 3 5 6 2 4v51h-6l-1-35-1-15-6-7-3-1h-11l-6 4-6 7-1 4-1 44h-6l-1-2-1-49-6-7-3-1h-10l-8 4-5 8-1 47-1 1h-6l-1-32v-28z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(576,904)" d="m0 0 10 1 8 5 5 8 1 3v14l-6 9-8 5-3 1h-13l-6-3-5-6-2-4v-16l4-10 7-5z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(749,597)" d="m0 0 1 4-2 8 7 1v-2l4-1-2 5-3 2-1-1h-12l-6-2-2-2-4 1-16 1-6 1-6-1-1 2h-5l-5-2-12-1v-2l-10 3-4 2-2-1v2l-9-1v-1l7-1v-3l-7 1-2 2h-6v-2l-13 4h-29l-8 1h-41l1-2 16-1 8-2 7 1v-2l-11-1-1-1-14-1v-2l3-1h21l3 1 18 1 1 1h7l8 1 8-1 3 1 6-1h9l6-1h7l3-1 2 1 1-2h7l6-3h6l2 2 6 2h11l8-1 8 2 9-2 4 1 5 2 6-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1e3 1189)" d="m0 0h6v92h-5l-2-5-10 6-5 1h-10l-7-3-5-5-5-8-2-8v-21l3-9 6-8 10-5h13l8 4 5 4-1-20v-13zm-24 32-6 3-6 7-2 7-1 16 2 11 6 9 7 4h9l10-5 4-5 1-2v-32l-6-8-8-5z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(926,1348)" d="m0 0 6 4 3 1v-2l5 1h11l16-1 6-1 29 1 4 1 15-1h37 2 7l2 2 7 1 5 1v2l2 1-4 1h-14l-19 2-4 1h-18l-7-2-14-1-11 1h-10l-14 2-26-1 2 2h-11l1-2-2-2 1-1h-9l1-4-3-4h4z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1306,1215)" d="m0 0 10 1 8 4 7 8 3 9 1 13-1 1h-46l3 12 6 9 4 3 6 2h7l8-3 5-5 6 1-1 4-7 6-7 3h-15l-8-3-7-6-6-11-1-4v-18l4-11 6-8 8-5zm-1 6-8 4-6 9-3 7v3l39 1 1-2-4-13-6-7-5-2z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(777,414)" d="m0 0 6 1 5 2-1 3 1 2-2 1 3 1-1 3-4 3v10l6 4 2-1 7 1 5 3 12 2 1 2 8 1h9l6 2v2h-17l-15-1-3-1v-2h-10l-4 2v-2l-10-1h-5l-4-1-5 1-3-1v-2l-7 2h-5l1-4v-5h-2l-1-4 2-5h-2v-5h7l2-1-4-1 1-3 4-2 9 1 6-4z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1041,1216)" d="m0 0h17l8 4 5 6 2 8v47l-3 1-4-4-1-3-9 6-9 2-13-1-6-4-4-6-1-10 3-8 7-6 10-3h23l-1-13-3-6-8-4h-10l-6 3-5 6-2 4h-6l1-7 4-6 8-5zm5 34-9 3-7 8v8l7 8 3 1h10l8-3 7-7 1-3v-14l-3-1z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(1627,1189)" d="m0 0h6l1 1 1 35 7-6 6-3h13l8 4 6 8 3 8 1 6v15l-3 12-6 8-8 5h-14l-9-4-5-4-1 6-4 1-1-1-1-56zm20 32-8 5-4 4-1 3v33l4 6 5 4 4 2h12l7-4 5-8 2-8v-19l-4-10-8-7-2-1z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(878,381)" d="m0 0 33 1 7-1 7 1 29 1 13 3-4 2h-2l2 4h-3l5 3 7 1 4 2-1 2h-6l-2-1h-7l-4 1v-2l-4 1-2-1-7-1 2 2-1 3-8 1-3-3 3-3v-3l-6-1v2l3 1-2 4-4-2-9 1-5 2-5-3-4 1-5 2h-6l-4 1-2-2-7-1v-2l3-2 14-1v-2l1-1-4-4 2-1h-3v2h-8v-2l-2-1 2-1-7-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1390,946)" d="m0 0h2l2 2 2 4 5 5 3 1v4l8 1v2h2l-1 6 1 4-2 8h-2l1 6-4-2-1-11 1-4-2 2-1 8 1 6-2 4h-2v2l-5 3-4-1v3h-2v5h-9l-5-5 3-10v-10l5-17 2-12h2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1167,381)" d="m0 0h3v2l-10 2-14 1h-18l-5 1v3l-5 1 7-1 2 1h7v3l4 1 2-1 8 4h10l4-1 12 3 7 3-1 4-1 2-4-2v-2l-9-1v-2l-4 2v2l2 1-3 1-1-2-9-2h-4l-5-3-4-2-4 1-1 2-4-1v2h-2v2l-6-1-2-2 4-2-2-1v-2l-9-2 2 3 4 4-2 2-4-1-3 2-11-1-4 3-4-3v-3l3-3-5 2-1-1-7-1-1-2h2l1-2 1-1-1-3-10 2-2-1 1-3 10-2h4l19-2h17l15-1h13z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1575,1216)" d="m0 0h17l8 3 6 8 1 3 1 51-5-1-3-6-10 7-2 1h-18l-7-4-4-6-1-9 2-7 4-5 6-4 12-2h19l-1-13-3-5v-2l-4-2-3-1h-11l-8 4-7 10-4-2 1-6 4-6 5-4zm6 34-9 3-6 5-1 2v9l4 6 6 3h10l8-3 5-5 3-4 1-10-1-6z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(1474,1216)" d="m0 0h14l8 3 6 5 6 10 2 9v11l-2 11-5 8-5 5-6 4-4 1h-13l-9-3-5-4-6-9-2-6-1-14 2-12 4-8 5-5 5-4zm2 5-8 5-5 6-4 11v13l3 10 8 9 8 3h7l7-3 6-5 4-8 1-3v-19l-4-10-8-7-5-2z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(495,1216)" d="m0 0h15l7 3 5 4 4 8v50l-2 1-3-1-1-7-11 7-12 2-9-1-6-4-4-6-1-4v-7l3-7 7-6 5-2 19-1h8v-13l-3-5-5-4-3-1h-11l-6 3-5 6-2 4h-5l-1-4 4-7 6-5zm3 34-10 4-4 5-1 2v8l4 6 6 3h12l8-4 6-6 1-3v-15z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(544,1189)" d="m0 0h7v25l-1 33 6-4 9-10 12-12 7-5 5 1-6 7-18 18 1 4 13 16 12 16-1 3-6-2-9-11-10-13-4-6-5 2-5 6-1 23-4 1-2-6z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(820,1215)" d="m0 0h6l2 3v48l3 7 4 3 3 1h10l8-4 4-5 1-3 1-49h8l-1 65-1 1h-5l-2-5-9 5-4 1h-12l-8-3-5-6-3-8z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(770,1216)" d="m0 0h15l8 4 5 4 6 10 1 4v23l-4 10-9 9-10 3h-10l-9-3-8-7-5-10-2-9v-10l4-13 6-9 8-5zm2 5-8 4-6 8-3 9v15l4 11 6 7 7 3h9l10-5 5-6 3-9v-17l-4-10-4-5-9-5z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(1308,1343)" d="m0 0h56v1l-21 1-1 2-1-1v1l-16 4-4 2 1 1 13 2h9l1 2-7 1-1 2 3 2h-63v-1l34-1v-2l-4-1-1 3h-13v-2h-3-5v-5l-8-1-4 2v2h-2l1 3-5 2-3-1-3-3-6-1h-10l-4-2v-2h-2l1-4 10 1h17l11-2 3-1 4 1h19v-1l8-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(621,1216)" d="m0 0h11l7 3 6 5 5 10 1 4v12h-46l2 12 4 8 6 5 7 2h9l8-4 4-4 4 1-1 4-5 5-5 3-4 1h-12l-9-3-7-6-5-8-2-8v-15l2-9 5-9 8-7zm0 5-7 4-6 8-3 8v4l38 1 2-1-1-10-4-8-6-5-3-1z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(736,1215)" d="m0 0 7 1-3 9-18 49-7 20-6 10-7 4h-9l-1-2 3-3 8-2 4-5 4-10v-8l-11-31-7-18-3-9v-4h5l3 5 10 27 7 20v2h2l3-10 14-43z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(1087,1216)" d="m0 0 4 1 6 14 13 37 1 2 10-29 7-20 3-5h6l-1 5-20 55-7 20-6 8-6 4h-9v-4l10-3 4-4 4-12-1-9-15-41-6-16v-2z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(1024,442)" d="m0 0 10 2 5-1 3 2-1 2 10 2 1 3 13 2-2 2-7 1h-15l-8 1-37 1-7-2-6 1h-8l-7-1h-10l-4-2 4-2 11-2h8l7-2 1-2 7 1 2-2 8-1v-2h9l8 2 1-2v3h2l1-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1741,1216)" d="m0 0h11l8 3 5 5 4 7 2 7 1 11-1 1-45 1v7l3 8 8 9 5 2h12l8-4 5-4h2l-1 5-7 6-5 2-11 1-9-2-8-6-6-8-2-5-1-6v-12l3-11 6-9 6-5zm3 4-7 3-6 5-5 10-1 7 4 1h34l3-1-1-8-4-9-8-7z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(1115,1356)" d="m0 0h17v2l16 1 9 3 29 1v1h-221l-21-1-4-2 7-1 23 1 12-2h16l7-1 18 2 4 1h17l10-2 15-1h20l22-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1429,1010)" d="m0 0h1l1 10-1 22-13 28-3 6-2 2-7-1-2-1-1-7h2l1-4 4-2 1-2-2-1 3-5h2l1-4-1-3 2-5-1-2-7-4v-2l-4-1v-3l4-4 15-11z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1185,938)" d="m0 0h2l-1 7-1 3-2 8-1 2 4-3 1-4h2l-1 5-1 2h-2l1 3-2 2 2 1v6l-4 9-5-1v3h-2l1 4h-2v8l-3 4-2 17 2 1v9l1 3h-2l1 6-1 4-1 9 2 1 1 7 2 6-1 3-2-5-5-11-2-1-1-10v-38l3-17 8-23 5-9z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1153,410)" d="m0 0 9 2 4 2 4 1v2l4-1 1-1 1-2 2 1 1 6 6-2h7l4 1 1 3h-4v2l2 1 1 1h2l1-3 7 1-1-3 3-1 8 1-4 8 2 1-3 3-7-2-5 5-5 1v2l-4-1v-4h-3l-7 2-1-2 4-2-1-3-7 1 1-5-3-1-4 2-14 1v4h-5l-3-4v-2h2l-1-5-5-1v2l-7 2-1-3 4-1 2-1 1-4 7 1 3-1-2-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1338,496)" d="m0 0h1l1 16 3-2v5 2l1 3h2l3 17 2 9v11l1 6-2 8-1 5h-2l-2-10-1-3-1 14-1 4 1 4v4l1 5 4 2-1 5 2 1-2 6-5-6-1-2v4l3 3-1 3h2l-1 4-4-6-1-3-1-19z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(898,1349)" d="m0 0 14 1 7-1 7 4 1 4 9 1-2 2 1 2-2 1h-92l4-2 3-3 14-1 10 1 7-1 1-2-3-1 4-3h7z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(165,1509)" d="m0 0 5 5 5 10 6 10 10 16 8 10 7 8 17 16 6 7 7 8 6 5v2h3v2l4 2 16 10 6 5 14 7v2l5 2 11 5 3-2 5 4 6 3 2 3 3 1v2l-7-1-20-9-16-8-16-11-14-10-14-11-9-9-8-7-9-9-11-14-11-15-11-19-6-10-3-7z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1431,554)" d="m0 0 5 1 3-1 14 3v2h2l1 2 5-1 2 2 1 3 2 2-1 7 5 1 2 4-1 5h-2v2l-6 1-4-2v-2l-5 2h-6l2-1v-2l-2-1v2l-3 1v-2l-2-1 1-5-3-2v-2l-5-1-3-3 1-3 4-2-4-2 1-4-3 1-2 3-2-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1277,900)" d="m0 0 4 1 10 11 7 13 8 10 7 10 5 8 2 5-1 4-1 1-8-1-18-8-7-4-7-2 4-2 11-2h2l5-5-1-3-2-1-2-6v-2l-4-2-3-1-3-6 1-6-3-1v-2l-5-2-7-2 1-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1285,1095)" d="m0 0h2l8 14 12 17 7 9v2l-2 1h-21l-10-2-16-6-12-6-3-3 1-4 15 9 7 2 9 1 1-5 7-1 4-2-1-3-2-2 2-4-5-10-3-4z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(888,1215)" d="m0 0h7v9l9-7 8-2 6 1v5l-10 1-6 4-4 5-1 2-1 10-1 38h-7z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(1527,1215)" d="m0 0 4 1v8l10-7 2-1h11l1 4-1 1-10 1-8 5-3 6-1 4-1 44h-6l-1-9v-52l1-4z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(1388,1038)" d="m0 0 4 1 2 4h-2l-1-1-2 1-2-1-2 7-6 1-3 8-4 3-2 1 1 3h-2v5l-13-1-15-5v-3l8-5 22-9z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1300,1071)" d="m0 0 8 1 9 2 4 5 9 3v3l-2 1-6-1-1-1-4 2-4 1-1-1-1 4 7 11 5 5 4 6v2l4 2v2h2v3l13 2 9 2-4 4-9 3-5-1-5-6-5-5-5-8-1-4h-2l-6-7-6-11-5-7-3-9z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1698,1189)" d="m0 0 5 1v90l-3 1-3-2v-89z" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(198,1537)" d="m0 0 7 1 4 6 7 2 4 2v6l-8-1 2 5h8l6 4v7l-2 6-4 1-5-5v-3h-2v-2l-5-2-5-8-3-4-3-8z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(894,407)" d="m0 0h5l2 4 2 2-2 6-4 1v-2h-2v-2l-4-1-4 3 5 2-1 2-6-1-4 1-1 2-7 1h-6l-4-5 1-3 1 3h2l1-4h-5l1-7 8 1h4l9-2 2 1h5z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1201,1038)" d="m0 0 2 1-3 9 1 11 9 18v3h2l2 7h3l-1-2 5 2 3 1h3v-3l4-3v13l-4 8-5-2-6-7v-2l-4-1-5-8-9-19-3-10v-9z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1358,949)" d="m0 0 5 3 1 4-1 1-2 16-5 15-3-1-6-14-3-9 1-5h3l3 3 4-1 2-1v-3l-2-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1264,1049)" d="m0 0 3 1 4 8 7 18 4 8v5l-7-7v-3l-4-2-7-4-2-4 1-9-4 11-3-1 1-8 3-9z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1320,895)" d="m0 0 7 1 13 4 1 3h-6l8 2v2h-3l-1 2-4-2-1 2-4-1v-2l-4 2-3 2h-5l-1 1-4-1-4-5-1-8z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1248,1006)" d="m0 0 2 1 7-1-1 5-10 25-2-3v-5l-4-1-6-6h-5v-2l14-9z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(735,424)" d="m0 0 7 1v6l-5 3h-3l-1 7v2h3 5l1 2 3 2h-3l-1 4-5 5h-5l-1-4-5-1v-8l-1-4 5-6v-2l-1-1 1-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1379,1095)" d="m0 0 11 1 3 1v2h3v3l-16 14-3 2h-3v-2l-2-1h2v-9l-2-5v-3h3v-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1248,964)" d="m0 0h9l14 2 6 4-4 5-12 6h-8l-1-5-2-8v-2h-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1449,594)" d="m0 0 5 1v4l2 1-2 3-7 1-1-1h-5l-1 1h-7l-2 1h-11l-9 1-7 2-7-1-10 1-6-1v2l-2 2 10 2-4 1-12-1-2-1v-2h-7l-4-2 7-1 8-1 3-1 15-1 3-1h16l10-1h9l15-3 2-4z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(384,1656)" d="m0 0 8 1 6 2 9 1 4 2h3l-1 3-12 4-11-2-7-1-4-1-5-2-1-4 1-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(812,1343)" d="m0 0h82l3 1 1 3-10 1-10 2-16-1-11-1-3-1v-2l-36-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1153,410)" d="m0 0 9 2 2 1 2 6h-2v2h2l-1 3h-2v2l-8 1v4h-5l-3-4v-2h2l-1-5-5-1v2l-7 2-1-3 4-1 2-1 1-4 7 1 3-1-2-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(595,920)" d="m0 0 5 1v14l-6 9-8 5-7 1-3-5-3-2 9-3 5-1 2-4 5-6-1-3-1-4h3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(184,1437)" d="m0 0h4v2l3 1-1 4 2 1 2 7 1 3 10-2 2-1-3 9-4 3-10-2-4-2v-2h-2l-1-5-1-2 3-4 2-6h-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(954,376)" d="m0 0h190v1h-88v2l-4 1-1-2-14 1h-3v-2h-2l-1 2v-2l-8 2-3-1-8 2-10-2-48-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(736,517)" d="m0 0 2 2v3l4 1 1 3 2 1 1 7v22l-1-2h-2v6h-1l-1-6 1-3-2-1v-2l-2 2v-6h2l-1-2-2-1 1-2h2v-3l-4-2v-5l2-4-2-4z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(246,1431)" d="m0 0 2 4 6 17 14 29 5 8-1 3-2-4-4-2-4-7-5-5-1-3h2l-5-14-4-7-4-17z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1229,1348)" d="m0 0 3 1h-2v2l-10 5 1 1 9 1 3 4-2 1h-24v-1l11-1-11-4 1-2h2v-3l6-3v2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(565,575)" d="m0 0 4 1 2-1v2l5 1 4 5h-2l-2 7h-6l-7-2-3-1-1-3-2-2 5-2 3-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1277,1352)" d="m0 0 8 2v5l6-2 3 3h12l1-2 4 1 1 3-45 1 4-4 2-5z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1331,1083)" d="m0 0 7 1 27 8 2 1v3l-4-1v2l-10-1h-4l-7-3-3-3-4-2-3-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(864,409)" d="m0 0 8 1h4 5l2 4h-2l-2 4-3 2-3 5h-6l-4-5 1-3 1 3h2l1-4h-5z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1158,397)" d="m0 0h4l12 3 7 3-1 4-1 2-4-2v-2l-9-1v-2l-4 2v2l2 1-3 1-1-2-9-2h-4l-2-2 5-4h8z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(844,453)" d="m0 0 4 2h3l4 1 14 3 2 3h11l3 2-6 1-22-2h-10l-5-2 4-2-5-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1812,550)" d="m0 0 7 3 5 4 4 4 11 7 1 3 4 2 10 9 4 2 1 3 2 2h-3l-1-3-4-1v-2h-2v-2l-4-2-7-3-3-4v-2l-5-2-10-7-8-5-1-3-4-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(969,386)" d="m0 0 3 1h9l1 1 12 1 1 1 25-1 4 2-5 1-13 1h-12l-1 2-1-2-2 1-2-2-2 2-1 2-4-2v-4l-6-1v6h-6l2-2-1-5-2-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(570,912)" d="m0 0h8l4 3-1 2-2-1-1 2-6 2h-6l-3 7-3 3-1-7-2 2 1-8 3-4 6 1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1234,921)" d="m0 0 2 1-1 2h-2l-1 4h3l1 3 6 3 5 3v2l-17-2-6-2 1-5 5-7z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(754,555)" d="m0 0h1l1 10-1 4 1 3-2 2v6l-5 2-1-8-1-2v-9l-2-2 2-3h3v2l4-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1421,541)" d="m0 0 5 2 8 4-2 1-2 8-7-1h-3l-1-4-5-1 2-5 4-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1349,904)" d="m0 0 8 1 6 3 6 5 1 7-1 9-3 1h-3l-1-4 1-1-2-1 1-3 2 1v-2h2l-1-3 1-2-6-2-3-3-1-2-6-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(203,615)" d="m0 0 2 1-3 2zm-2 3v3l-1 3-2 1-1 3-2 1-1 3h-2l-1 5-4 7h-2l-1 6h-2v3h-2v3h-2l-2 4-3 5-3 1 2-5 9-15 5-9 9-11z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1822,687)" d="m0 0 5 5 4 6 5 9 6 10 5 12 1 6h-2l-12-25-8-13-5-7z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1319,914)" d="m0 0 5 3 7 12 7 16 2 2 1 8h-2l-4-6-5-13-10-17z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1449,594)" d="m0 0 5 1v4l2 1-2 3-7 1-1-1h-5l-1 1h-7l-2 1h-20l1-2 10-1h9l15-3 2-4z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(164,1486)" d="m0 0 3 1 5 8 1-3h2l2 4 4 4-3 1h-1l1 5-5 1-4-4-2-9-2-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(649,487)" d="m0 0 3 4h4v4l5-2 6 3 1 4 2 2v2h-2l-2 5h-2l-2-7-3-4h-3l-1-2h-4l-1 2-1-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1930,706)" d="m0 0 3 3v5h2l1 4-1 5 2 8v5l-2-1-2-3v-5l-3-3-3-11 1-4z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1164,376)" d="m0 0h75l-3 2h-14l-9 1-25-1-24-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(855,413)" d="m0 0 5 2 2-1v6l-8-1-1 5-5 2-2 6h-2l-2-6 2-3h4l-1-6 4-2 2 1v-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(926,385)" d="m0 0h11l4 3 5-2h3v2h6l4 3-5 1-8 1-2 1v-2l-5-2-12-2-4-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1868,798)" d="m0 0 11 4 16 3 12 1 1 2h-20l-15-4-5-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1930,744)" d="m0 0 2 3 2 9-2 2 1 1v6h-2l1 4h2v9h-2l-2-6-1-11-1-3v-12z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1092,458)" d="m0 0 23 1 6 1 4-1 10 2 4 2 3 1-3 3-6-1-2-3-6 1-8-2-26-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(796,1568)" d="m0 0h40v1l-18 1v2h-21z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1924,721)" d="m0 0h2l1 7 3 2v13l-1-2-2 1-1 2-3-3 2-1v-4-4h-3-3l4-8z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1145,461)" d="m0 0h2v2h13l3-1h7l3 2v2l-14 1h-9l-5-5z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(721,482)" d="m0 0 2 1 2 4-1 5-3 3-4 1 2 1-5 2-5-3v-2l5-2 2 1 2-1-1-5h2v-2h2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(280,1611)" d="m0 0 2 1 4 8-4 2-5-1-6-3v-2l-2-1 2-2v2l8-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1190 1e3)" d="m0 0 2 4-1 9 5-1 1-4v2l4 1-3 3-8 5h-2v-14z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1361,1110)" d="m0 0 4 1 2-1 2 2-3 1-1 4 2 4h-11l-3-2 4-4 2-3h2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(595,937)" d="m0 0h3l-2 5-8 6-5 2-5-1 3-1v-2l6-1-3-3 7-2 1-2 1 2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1378,605)" d="m0 0m-3 1h3v2l3 1-2 2 10 2-4 1-12-1-2-1v-2h-7l-4-2 7-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1212,433)" d="m0 0 3 1v2h2l1-3h6l1 3-2 3h-6l-2 2v5h-2v-7l-4-1v-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1399 1e3)" d="m0 0 1 2 3-1-1 3-14 8-1-5 5-5z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(650,510)" d="m0 0 3 4 1 4-5 5-7 2-5-2-1-2 7-1 6-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(911,375)" d="m0 0 28 1v1l-24 1h-26l-1-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1167,381)" d="m0 0h3v2l-10 2-14 1h-17l-1-2 8-1h13z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1416,410)" d="m0 0 4 1 9 10 10 15 1 5-4-4-6-10-12-14z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(913,406)" d="m0 0h3v6l-4 3h-2v2l-3-1-5-6h3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1136,408)" d="m0 0h4l-2 5h-3v2l-9 1-5 2v-2l-3-1 5-1 2-2v2l2-1 1-4 5 2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1435,974)" d="m0 0 3 3 3 14v10l-3-3-3-19z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(278,1500)" d="m0 0 4 1 11 12 4 5-4-1-10-9-4-4z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1226,1092)" d="m0 0m-4-1h2l1 5h2v2h2l-2 5-5-2-5-7 4-1h1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1393,914)" d="m0 0 5 2 7 7v3l-6-1-6-7z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1020,376)" d="m0 0h31l-4 2-3 1h-10v-2h-2l-1 2v-2l-8 2-3-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(585,939)" d="m0 0m-3 1h3v2l3 3-3 1h-4l-1 2-7-4 1-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(754,555)" d="m0 0h1l1 10-5 2 2-4-4 2-4-4 2-3h3v2l4-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(942,1360)" d="m0 0 26 1 1 2h-25l-4-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1337,1358)" d="m0 0h10l7 2v2h-18z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1200,450)" d="m0 0 9 3-1 2h-8-3l-8 1-1-2 8-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1057,395)" d="m0 0h10l1 2-10 2-3 1-1 1-2-1v-2l-2-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(681,445)" d="m0 0 5 1-1 5-3 6-2-1v-3l-2-4z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(248,1472)" d="m0 0 5 5 3 4-1 3-4-1-4-8z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(649,487)" d="m0 0 3 4h4v4h3v3h-3l-1-2h-4l-1 2-1-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1407,971)" d="m0 0 1 2-1 8 1 6-3 1-2-9 2-5-2-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1160,415)" d="m0 0h4l2 4h-2v2h2l-1 3-3 1-3-5v-3l-2-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1175,450)" d="m0 0 4 1 1 2-3 1 2 2-2 1h-7v-3h-2l1-2h5z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(906,387)" d="m0 0 2 3v3l-8 3-1-3 2-4z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1201,1038)" d="m0 0 2 1-3 9-1 2-4-1 1-6z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1379,981)" d="m0 0h1v8l-4 9-2 1 2-10z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(616,545)" d="m0 0 3 1v2h2l-1 2-2-1v2h-5l-3-3v-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(713,423)" d="m0 0 4 1 4 5h-3l-1 2-4 1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(561,930)" d="m0 0 4 4 1 3 3 1 2 4-3 1-1-3-4-2-3-5z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(940,422)" d="m0 0h2v2l3 1-2 4h-2l-1 2-3-5v-2h3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(199,1439)" d="m0 0 4 1 1 3-5 3-4-1 1-4z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(712,492)" d="m0 0 6 1-1 3 2 1-5 2-5-3v-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1006,376)" d="m0 0h14l-2 2-6 2-5-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1360,525)" d="m0 0h2l-1 7v4l-5-5 2-5z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1082,387)" d="m0 0m-2-1 2 3-5 2-5 1-2-1 1-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1226,928)" d="m0 0 5 5-1 3h-5l-1-4z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1115,406)" d="m0 0 1 3v6l-7-1 1-3h2v-2h2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(971,405)" d="m0 0 4 2-2 7-2 1v-3h-2v-5h2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1100,396)" d="m0 0 6 1v4l-3 1-6-4z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(789,1568)" d="m0 0h7v3l-5 1-8-1v-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(720,419)" d="m0 0 3 1 4 6v3l-4-1-2-6-2-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1075,394)" d="m0 0 4 1-1 3h-2v2h-2v-2h-6l3-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(163,678)" d="m0 0h2l-2 10-4 2 1-5z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(606,548)" d="m0 0 5 1-1 2 2 2-6 1-2-2v-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(925,389)" d="m0 0 3 2 1 2-10 2v-3l2-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(624,513)" d="m0 0h18v2l-7 1v-2h-11z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1393,924)" d="m0 0 4 4 1 6-5-3-1-5z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(714,482)" d="m0 0v3l-5 3-5-1 2-1 1-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1213,449)" d="m0 0h6l-1 4-2 2v-2l-4-1-1-2z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1063,388)" d="m0 0 5 1-1 3h-10l-1-2 4-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1913,652)" d="m0 0 7 6v4h-2v-2h-2v-3l-3-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(683,593)" d="m0 0h5v2l2 1-8 2-2-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1041,396)" d="m0 0 1 2 2 1-5 1-4 1-3-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1939,764)" d="m0 0 3 1 1 6-3 1-2-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(754,555)" d="m0 0h1l1 10-5 2 1-7 2-1z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(1433,428)" d="m0 0 4 5 3 5-1 3-7-11z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(849,402)" d="m0 0h7v2h-2l-1 2h-5l-1-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(952,400)" d="m0 0 4 2v2l-7 1-1-3z" fill={darkMode? "#A3181D" : "#00D991" }/>
               <path transform="translate(581,1352)" d="m0 0" fill={darkMode ? "#FFFFFF" : "#000000"}/>
               <path transform="translate(578,1352)" d="m0 0" fill={darkMode ? "#FFFFFF" : "#000000"}/>
            </svg>
      </div>
   )
   }

export default Logo
