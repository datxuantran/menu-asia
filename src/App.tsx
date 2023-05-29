import {
	A4Page,
	CategoryContainer,
	CategoryTitleContainer,
	Col,
	DishContainer,
	ExtraCategoryContainer,
	ExtraContainer,
	FooterContainer,
	GlobalStyle,
	Grid,
} from "./style";
import dishes, {
	ICategory,
	IDish,
	categories,
	extraItems,
	footers,
} from "./data";

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
			<Grid>
				<Col>
					<Category id={0} min={1} max={11} />
					<Category id={1} min={20} max={27} />
					<Category id={2} min={30} max={37} />
					<Footer id={0} />
				</Col>
				<Col>
					<Category id={3} min={39} max={49} />
					<Category id={4} min={50} max={59} />
					<Footer id={1} />
				</Col>
				<Col>
					<Category id={5} min={60} max={69} />
					<Category id={6} min={70} max={74} />
					<Category id={7} min={75} max={78} />
					<Footer id={2} />
				</Col>
			</Grid>
		</A4Page>
	);
};

const Back = () => {
	return (
		<A4Page>
			<Grid>
				<Col>
					<Category id={8} min={80} max={86} />
					<Category id={9} min={90} max={91} />
					<Extras id={10} />
				</Col>
				<Col>
					<Category id={11} min={100} max={106} />
					<Category id={12} min={0} max={0} />
					<Category id={13} min={0} max={0} />
				</Col>
				<Col></Col>
			</Grid>
		</A4Page>
	);
};

const Extras = ({ id }: { id: number }) => {
	const category = categories[id];
	return (
		<ExtraCategoryContainer>
			<CategoryTitle category={category} />
			{extraItems.map((item, idx) => {
				return (
					<ExtraContainer key={idx} style={idx === 4 ? { alignItems: "end" } : {}}>
						<div className='description'>
							<div className='primaryDescription'>
								{idx !== 4 ? (
									<>{item.primaryDescription}</>
								) : (
									<>
										<div>Liebe Gäste,</div>
										<div>
											wir verpacken Ihre nichtverzehren Speisen gerne ein. Für die
											Verpackung berechnen wir
										</div>
									</>
								)}
							</div>
							<div className='secondaryDesciption'>
								<div>{item.secondaryDescription}</div>
								{idx === 1 ? (
									<ul>
										<li>
											vietnamesische Art-Soße <div>(leicht scharf)</div>
										</li>
										<li>Chop-Suey</li>
										<li>Gong-Pao (scharf)</li>
										<li>Curry-Soße (leicht scharf)</li>
										<li>Süß-Sauer</li>
										<li>Erdnuss-Soße</li>
										<li>
											Thai-Curry (scharf) <div>"OHNE SCHARF" geht nicht</div>
										</li>
										<li>
											Thai-Gewürz-Soße (scharf) <div>"OHNE SCHARF" geht nicht</div>
										</li>
										<li>Szechuan-Soße (scharf)</li>
									</ul>
								) : (
									<></>
								)}
							</div>
						</div>
						<div className='price'>{item.price}€</div>
					</ExtraContainer>
				);
			})}
		</ExtraCategoryContainer>
	);
};

const Category = ({
	id,
	min,
	max,
}: {
	id: number;
	min: number;
	max: number;
}) => {
	const category = categories[id];
	const cDishes = dishes
		.filter((dish) => parseInt(dish.id) <= max && parseInt(dish.id) >= min)
		.sort((a, b) => parseInt(a.id) - parseInt(b.id));
	return (
		<CategoryContainer>
			<CategoryTitle category={category} />
			<Dishes dishes={cDishes} />
		</CategoryContainer>
	);
};

const CategoryTitle = ({ category }: { category: ICategory }) => {
	const primaryDescription = category.primaryDescription;
	const secondaryDescription = category.secondaryDescription;
	const terinatyDescription = category.terinatyDescription;
	return (
		<CategoryTitleContainer>
			{primaryDescription ? (
				<div className='primaryDescription'>{primaryDescription}</div>
			) : (
				<></>
			)}
			{secondaryDescription !== "" ? (
				<div className='secondaryDescription'>{secondaryDescription}</div>
			) : (
				<></>
			)}
			{terinatyDescription !== "" ? (
				<div className='terinatyDescription'>{terinatyDescription}</div>
			) : (
				<></>
			)}
		</CategoryTitleContainer>
	);
};

const Dishes = ({ dishes }: { dishes: IDish[] }) => {
	console.log(dishes);
	return (
		<>
			{dishes.map((dish, idx) => (
				<Dish dish={dish} key={idx} />
			))}
		</>
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
		<DishContainer>
			<div className='description'>
				<div className='id'>{id}.</div>
				<div className='primaryDescription'>
					{primaryDescription}
					{superscriptText !== "" ? <sup>{superscriptText}</sup> : <></>}
				</div>
				{warning !== "" ? <div className='warning'>{warning}</div> : <></>}
				{secondaryDescription !== "" ? (
					<div className='secondaryDesciption'>{secondaryDescription}</div>
				) : (
					<></>
				)}
			</div>
			<div className='price'>{price}€</div>
		</DishContainer>
	);
};

const Footer = ({ id }: { id: number }) => {
	const footer = footers[id];
	return (
		<FooterContainer>
			<div className='description'>{footer.description}</div>
			<div className='price'>+{footer.price}€</div>
		</FooterContainer>
	);
};
