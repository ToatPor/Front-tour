import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

:root{
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #27272a;
  
  --color-primary: rgba(40, 180, 135, 0.85);

;
  --color-secondary: rgba(125, 213, 111, 0.85);


  --color-black-100: #151515;
  --color-black-200: rgba(0,0,0,.96);

  --color-todo: #f87171;
  --color-progress: #fbbf24;
  --color-complete: #55c57a;
;




  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);


  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
    --section-rotate: 5vw;

}
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  /* transition: background-color 0.3s, border 0.3s; */
}


html {
  font-size: 62.5%;
} 

body {
  
font-family: 'Lato', sans-serif;

  color: var(--color-grey-600);
  line-height: 1.6;
  font-size: 1.8rem;
  padding: 3rem;
 font-weight: 400;
}

  .leaflet-container {
    /* width: 100%; */
    height: 40vh;
    background: black;
  }

.leaflet-popup-content-wrapper {
  border-left: 5px solid var(--color-primary);
  transform: skewY(4deg);
  padding: .6rem .8rem;
}
.leaflet-pane{
  padding: 1.2rem 1.8rem;
  transform: skewY(4deg);

}
.leaflet-tooltip{
  font-family: "Lato" sans-serif;
  border-right: 5px solid var(--color-primary);
  font-size: 2rem;
  padding: 1.2rem 2.4rem;
}



`;
