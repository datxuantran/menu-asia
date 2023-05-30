import {
	A4Page,
	AboutContainer,
	CategoryContainer,
	CategoryTitleContainer,
	Col,
	DishContainer,
	ExtraCategoryContainer,
	ExtraItemContainer,
	Footer2,
	FooterContainer,
	GlobalStyle,
	Grid,
	Group,
	Prices,
	Row,
} from "./style";
import dishes, {
	ICategory,
	IDish,
	categories,
	drinks,
	extraItems,
	footers,
} from "./data";

import restaurantImage from "./assets/images/asia-imbiss.jpg";

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
					<Drinks id={12} min={1} max={13} />
					<Drinks2 id={13} min={14} max={19} />
					<Footer2>
						<div className='primary'>
							Allergene können bei der Bestellung erfragt werden
						</div>
						<div>Erläuterungen zur Speisekarte:</div>
						<div className='sub'>
							(1)=mit Süßungsmittel (2)=mit Geschmacksverstärker, Farbstoff und
							Süßungsmittel (3)=coffeinhaltig und mit Farbstoff
						</div>
					</Footer2>
				</Col>
				<Col>
					<About />
				</Col>
			</Grid>
		</A4Page>
	);
};

const About = () => {
	return (
		<AboutContainer>
			<div className='restaurant-name'>
				<div>ASIA-IMBISS</div>
				<div>TUAN KIET</div>
			</div>
			<div className='restaurant-image'>
				<img src={restaurantImage} width={500} />
			</div>
			<div className='restaurant-description'>
				<div>Vor Ihren Augen im Wok frisch zubereitete Qualitätsware!</div>
				<div>Preiswert und schnell!</div>
			</div>
			<div className='restaurant-address'>
				<div>Rathausstr.2</div>
				<div>74366 Kirchheim/N</div>
			</div>
			<div className='restaurant-tel'>
				<span>Tel.:</span>
				<span>07143/961317</span>
			</div>
			<div className='restaurant-open-hours'>
				<div>ÖFFNUNGSZEITEN:</div>
				<div>Montag, Mittwoch - Freitag:</div>
				<div>11:00-15:00 Uhr</div>
				<div>17:00-21:30 Uhr</div>
				<div>Samstag, Sonntag & Feiertage:</div>
				<div>12:00-22:00 Uhr</div>
				<div>Dienstag ist Ruhetag!</div>
			</div>
			<div className='restaurant-angebot'>
				<div>Gerne beliefern wir auf Anfrage Ihre Party!</div>
				<div>Unser Service wird Sie überzeugen!</div>
				<div>Alle Gerichte auch zum Mitnehmen!</div>
			</div>
			<div className='restaurant-timestamp'>GÜLTIG AB: 20.05.2023</div>
		</AboutContainer>
	);
};

const Drinks = ({ id, min, max }: { id: number; min: number; max: number }) => {
	const category = categories[id];
	const cDrinks = drinks.filter((drink) => drink.id <= max && drink.id >= min);

	return (
		<CategoryContainer>
			<CategoryTitle category={category} />
			<Group>
				<Row>
					<div></div>
					<Prices style={{ fontWeight: "normal", textDecoration: "underline" }}>
						<div>0.2l</div>
						<div>0.4l</div>
					</Prices>
				</Row>

				{cDrinks
					.filter(
						(drink) =>
							drink.prices?.[0]?.volume === 0.2 ||
							drink.prices?.[0]?.volume === 0.4 ||
							drink.prices?.[1]?.volume === 0.2 ||
							drink.prices?.[1]?.volume === 0.4
					)
					.map((drink, idx) => (
						<Row key={idx}>
							<div>
								{drink.description}
								{drink.superscriptText !== "" ? (
									<sup>{drink.superscriptText}</sup>
								) : (
									<></>
								)}
							</div>
							<Prices>
								{drink.prices.length === 2 ? (
									<>
										<div>{drink.prices[0].price}€</div>
										<div>{drink.prices[1].price}€</div>
									</>
								) : (
									<>
										<div></div>
										<div>{drink.prices[0].price}€</div>
									</>
								)}
							</Prices>
						</Row>
					))}
			</Group>

			<Group>
				<Row>
					<div></div>
					<Prices style={{ fontWeight: "normal", textDecoration: "underline" }}>
						<div></div>
						<div>0.25l</div>
					</Prices>
				</Row>

				{cDrinks
					.filter((drink) => drink.prices?.[0]?.volume === 0.25)
					.map((drink, idx) => (
						<Row key={idx}>
							<div>
								{drink.description}
								{drink.superscriptText !== "" ? (
									<sup>{drink.superscriptText}</sup>
								) : (
									<></>
								)}
							</div>
							<Prices>
								{drink.prices.length === 2 ? (
									<>
										<div>{drink.prices[0].price}€</div>
										<div>{drink.prices[1].price}€</div>
									</>
								) : (
									<>
										<div></div>
										<div>{drink.prices[0].price}€</div>
									</>
								)}
							</Prices>
						</Row>
					))}
			</Group>

			<Group>
				<Row>
					<div></div>
					<Prices style={{ fontWeight: "normal", textDecoration: "underline" }}>
						<div></div>
						<div></div>
					</Prices>
				</Row>

				{cDrinks
					.filter((drink) => drink.prices?.[0]?.volume === undefined)
					.map((drink, idx) => (
						<Row key={idx}>
							<div>
								{drink.description}
								{drink.superscriptText !== "" ? (
									<sup>{drink.superscriptText}</sup>
								) : (
									<></>
								)}
							</div>
							<Prices>
								{drink.prices.length === 2 ? (
									<>
										<div>{drink.prices[0].price}€</div>
										<div>{drink.prices[1].price}€</div>
									</>
								) : (
									<>
										<div></div>
										<div>{drink.prices[0].price}€</div>
									</>
								)}
							</Prices>
						</Row>
					))}
			</Group>
		</CategoryContainer>
	);
};

const Drinks2 = ({
	id,
	min,
	max,
}: {
	id: number;
	min: number;
	max: number;
}) => {
	const category = categories[id];
	const cDrinks = drinks.filter((drink) => drink.id <= max && drink.id >= min);

	return (
		<CategoryContainer>
			<CategoryTitle category={category} />
			<Group>
				<Row>
					<div></div>
					<Prices style={{ fontWeight: "normal", textDecoration: "underline" }}>
						<div></div>
						<div>0.5l</div>
					</Prices>
				</Row>

				{cDrinks
					.filter((drink) => drink.prices?.[0]?.volume === 0.5)
					.map((drink, idx) => (
						<Row key={idx}>
							<div>
								{drink.description}
								{drink.superscriptText !== "" ? (
									<sup>{drink.superscriptText}</sup>
								) : (
									<></>
								)}
							</div>
							<Prices>
								{drink.prices.length === 2 ? (
									<>
										<div>{drink.prices[0].price}€</div>
										<div>{drink.prices[1].price}€</div>
									</>
								) : (
									<>
										<div></div>
										<div>{drink.prices[0].price}€</div>
									</>
								)}
							</Prices>
						</Row>
					))}
			</Group>

			<Group>
				<Row>
					<div></div>
					<Prices style={{ fontWeight: "normal", textDecoration: "underline" }}>
						<div></div>
						<div>0.2l</div>
					</Prices>
				</Row>

				{cDrinks
					.filter((drink) => drink.prices?.[0]?.volume === 0.2)
					.map((drink, idx) => (
						<Row key={idx}>
							<div>
								{drink.description}
								{drink.superscriptText !== "" ? (
									<sup>{drink.superscriptText}</sup>
								) : (
									<></>
								)}
							</div>
							<Prices>
								{drink.prices.length === 2 ? (
									<>
										<div>{drink.prices[0].price}€</div>
										<div>{drink.prices[1].price}€</div>
									</>
								) : (
									<>
										<div></div>
										<div>{drink.prices[0].price}€</div>
									</>
								)}
							</Prices>
						</Row>
					))}
			</Group>
		</CategoryContainer>
	);
};

const Extras = ({ id }: { id: number }) => {
	const category = categories[id];
	return (
		<ExtraCategoryContainer>
			<CategoryTitle category={category} />
			{extraItems.map((item, idx) => {
				return (
					<ExtraItemContainer
						key={idx}
						style={idx === 4 ? { alignItems: "end" } : {}}
					>
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
					</ExtraItemContainer>
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
