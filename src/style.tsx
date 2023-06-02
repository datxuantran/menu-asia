import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import backgroundImage from "./assets/images/asian-style-food-bowls-with-chopsticks-copy-space-writing-text.jpg";

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
	--clr-accent-500: hsl(12, 60%, 45%);
	--clr-accent-400: hsl(12, 88%, 59%);
	--clr-accent-300: hsl(12, 88%, 75%);
	--clr-accent-100: hsl(13, 100%, 96%);

	--clr-primary-400: hsl(228, 39%, 23%);

	--clr-neutral-900: hsl(232, 12%, 13%);
	--clr-neutral-200: hsl(0 0% 97%);
	--clr-neutral-100: hsl(0 0% 100%);

	--ff-primary: "Be Vietnam Pro", sans-serif;

	--ff-body: var(--ff-primary);
	--ff-heading: var(--ff-primary);

	--fw-regular: 400;
	--fw-semi-bold: 500;
	--fw-bold: 700;

	--fs-300: 0.8125rem;
	--fs-400: 0.875rem;
	--fs-500: 0.9375rem;
	--fs-600: 1rem;
	--fs-650: 1.0625rem;
	--fs-700: 1.25rem;
	--fs-800: 1.5rem;
	--fs-900: 1.875rem;
	--fs-1000: 2rem;

	--fs-body: var(--fs-400);
	--fs-primary-heading: var(--fs-800);
	--fs-secondary-heading: var(--fs-700);
	--fs-nav: var(--fs-500);
	--fs-button: var(--fs-300);

	--size-100: 0.25rem;
	--size-200: 0.5rem;
	--size-300: 0.75rem;
	--size-400: 1rem;
	--size-500: 1.5rem;
	--size-600: 2rem;
	--size-700: 3rem;
	--size-800: 4rem;
	--size-900: 5rem;

	height: 1240px;
	width: 1754px;
	background-image: url(${backgroundImage});
	background-size: 1754px 1240px;

	// border: 2px solid green;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;

	gap: 2rem;
	padding-inline: 1rem;
	padding-block: 1rem;
	height: 100%;
`;

export const Col = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-content: space-around;

	background-color: rgba(0, 0, 0, 0.8);

	padding-inline: 1rem;
	padding-block: 1rem;

	border-radius: 0.5rem;

	height: 100%;
`;

export const CategoryContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
`;

export const CategoryTitleContainer = styled.div`
	text-align: center;
	color: red;

	& .primaryDescription {
		font-family: var(--ff-heading);
		font-size: var(--fs-900);
		font-weight: var(--fw-bold);
	}

	& .secondaryDescription {
		font-size: var(--fs-800);
		font-weight: var(--fw-bold);
	}

	& .terinatyDescription {
		font-size: var(--fs-700);
		font-weight: var(--fw-semi-bold);
	}
`;

export const DishContainer = styled.div`
	display: flex;
	justify-content: space-between;

	font-size: var(--fs-650);
	font-weight: var(--fw-bold);

	color: white;

	& .description {
		display: grid;
		grid-template-columns: auto auto;
		align-items: end;
		gap: 0.5ch;
	}

	& .id {
		grid-column: 1/2;
		grid-row: 1/2;
	}

	& .primaryDescription {
		grid-column: 2/-1;
		grid-row: 1/2;

		& sup {
			font-size: var(--fs-300);
		}
	}

	& .description:has(.warning) > .secondaryDesciption {
		grid-column: 2/-1;
		grid-row: 3/4;
	}

	& .secondaryDesciption {
		grid-column: 2/-1;
		grid-row: 2/3;

		font-weight: var(--fw-regular);
	}

	& .warning {
		grid-column: 2/-1;
		grid-row: 2/3;
	}

	& .price {
		padding-top: 0.4rem;
		white-space: nowrap;
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	justify-content: space-between;

	font-size: var(--fs-650);
	font-weight: var(--fw-bold);

	color: white;
	background-color: red;
`;

export const ExtraCategoryContainer = styled(CategoryContainer)`
	gap: 1rem;
`;

export const ExtraItemContainer = styled.div`
	display: flex;
	justify-content: space-between;

	font-size: var(--fs-650);
	font-weight: var(--fw-bold);

	color: white;

	& .description {
	}

	& .primaryDescription {
		grid-column: 2/-1;
		grid-row: 1/2;
	}

	& .secondaryDesciption {
		font-weight: var(--fw-regular);
	}

	& .price {
	}

	& ul {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-content: center;
		gap: 0.75rem;

		font-size: var(--fs-600);
		opacity: 0.9;
		width: 150%;
		padding-left: 1rem;
	}
`;

// Drinks
export const Group = styled.div`
	font-size: var(--fs-650);
	font-weight: var(--fw-bold);

	color: white;

	&:nth-child(n + 3) {
		margin-top: 2rem;
	}
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;

	& sup {
		font-size: var(--fs-300);
	}
`;
export const Prices = styled.div`
	display: grid;
	grid-template-columns: 5ch 5ch;
	gap: 2rem;
	justify-items: start;
`;

export const Footer2 = styled.div`
	font-size: var(--fs-650);
	font-weight: var(--fw-bold);

	color: white;

	& .primary {
		color: red;
	}

	& .sub {
		font-weight: var(--fw-regular);
	}
`;

export const AboutContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	font-size: var(--fs-800);
	font-weight: var(--fw-bold);

	color: white;
	text-align: center;

	& .restaurant-name {
		color: red;
		font-family: var(--ff-heading);
		font-size: var(--fs-1000);
		font-weight: var(--fw-bold);
	}

	& .restaurant-description {
		font-weight: var(--fw-regular);
	}

	& .restaurant-address {
		font-size: var(--fs-900);
	}

	& .restaurant-tel {
		font-size: var(--fs-900);

		& span:first-child {
			font-weight: var(--fw-regular);
		}
	}

	& .restaurant-open-hours {
		font-size: var(--fs-900);
		font-weight: var(--fw-semi-bold);
	}

	& .restaurant-angebot {
		font-size: var(--fs-800);
		font-weight: var(--fw-semi-bold);

		& div:nth-child(n + 3) {
			font-size: var(--fs-900);
			font-weight: var(--fw-bold);
			color: red;
		}
	}

	& .restaurant-timestamp {
	}
`;
