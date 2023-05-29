import { A4Page, Col, GlobalStyle } from "./style";
import dishes, { ICategory, IDish, categories } from "./data";

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Front />
			<Back />
		</>
	);
};

export default App;

const Front = () => {
	return (
		<A4Page>
			<Col>
				<Vorspeisen />
			</Col>
			<Col></Col>
			<Col></Col>
		</A4Page>
	);
};

const Back = () => {
	return (
		<A4Page>
			<Col></Col>
			<Col></Col>
			<Col></Col>
		</A4Page>
	);
};

const Vorspeisen = () => {
	const category = categories[0];
	const min = 38;
	const max = 49;
	const cDishes = dishes
		.filter((dish) => parseInt(dish.id) <= max && parseInt(dish.id) >= min)
		.sort((a, b) => parseInt(a.id) - parseInt(b.id));
	return (
		<div>
			<CategoryTitle category={category} />
			<Dishes dishes={cDishes} />
		</div>
	);
};

const CategoryTitle = ({ category }: { category: ICategory }) => {
	const primaryDescription = category.primaryDescription;
	const secondaryDescription = category.secondaryDescription;
	const terinatyDescription = category.terinatyDescription;
	return (
		<div>
			{primaryDescription ? <div>{primaryDescription}</div> : <></>}
			{secondaryDescription !== "" ? <div>{secondaryDescription}</div> : <></>}
			{terinatyDescription !== "" ? <div>{terinatyDescription}</div> : <></>}
		</div>
	);
};

const Dishes = ({ dishes }: { dishes: IDish[] }) => {
	console.log(dishes);
	return (
		<div className='Dishes'>
			{dishes.map((dish, idx) => (
				<Dish dish={dish} key={idx} />
			))}
		</div>
	);
};

const Dish = ({ dish }: { dish: IDish }) => {
	const id = dish.id;
	const primaryDescription = dish.primaryDescription;
	const secondaryDescription = dish.secondaryDescription;
	const warning = dish.warning;
	const price = dish.price;
	const superscriptText = dish.superscriptText;
	return (
		<div className='dish'>
			<div className='description'>
				<div>{id}.</div>
				<div>
					{primaryDescription}
					{superscriptText !== "" ? <sup>{superscriptText}</sup> : <></>}
				</div>
				{warning !== "" ? <div>{warning}</div> : <></>}
				{secondaryDescription !== "" ? <div>{secondaryDescription}</div> : <></>}
			</div>
			<div className='price'>{price}€</div>
		</div>
	);
};
