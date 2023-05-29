import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Remove default margin */
* {
    margin: 0;
    padding: 0;
    font: inherit;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
/* 
ul[role="list"],
ol[role="list"] {
      list-style: none; 
}
*/
`;

export const A4Page = styled.div`
	height: 1240px;
	width: 1754px;

	border: 2px solid black;
`;

export const Col = styled.div``;
