import { React, useEffect, useState } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios';


const Home = () => {
	const [price, setPrice] = useState('');

	const fetchPrice = async () => {
	  const response = await axios.get('https://agmar-paliwa.pl/apis/fuel-price');
  
	  setPrice(response.data.price);
	};
  
	useEffect(() => {
	  fetchPrice();
	}, []);
	return (
		<>
			{/* <Helmet>
				<title>AGMAR | Dostawa paliw B7 i B0 śląsk i małopolska od 16 lat</title>
				<meta
					name='description'
					content='Dostawa paliwa śląsk i małopolska. Wyłącznie paliwo diesel b7 i b0. Posiadamy duże doświadczenie, zapraszamy.'
				/>
				<meta
					name='keywords'
					content='paliwo, diesel, dostawa paliwa, sprzedaż paliw, diesel b7, diesel b0, b7, b0, paliwo śląsk, paliwo małopolska, paliwo ogrodzieniec, paliwo zawiercie, paliwo katowice, paliwo kraków, paliwo sosnowiec, paliwo dąbrowa górnicza, dostawa paliwa ogrodzieniec, dostawa paliwa zawiercie, dostawa paliwa dąbrowa górnicza, dostawa paliwa śląsk, dostawa paliwa małopolska, dostawa paliwa pilica'
				/>
			</Helmet> */}
			<Head>
				<title>AGMAR | Dostawa paliw B7 i B0 śląsk i małopolska od 16 lat</title>
				<meta
					name='description'
					content='Dostawa paliwa śląsk i małopolska. Wyłącznie paliwo diesel b7 i b0. Posiadamy duże doświadczenie, zapraszamy.'
				/>
				<meta
					name='keywords'
					content='paliwo, diesel, dostawa paliwa, sprzedaż paliw, diesel b7, diesel b0, b7, b0, paliwo śląsk, paliwo małopolska, paliwo ogrodzieniec, paliwo zawiercie, paliwo katowice, paliwo kraków, paliwo sosnowiec, paliwo dąbrowa górnicza, dostawa paliwa ogrodzieniec, dostawa paliwa zawiercie, dostawa paliwa dąbrowa górnicza, dostawa paliwa śląsk, dostawa paliwa małopolska, dostawa paliwa pilica'
				/>
			</Head>
			<header id='strona-glowna'>
				<nav className='navdesktop-list'>
					<div className='nav-item'>
						<Link href='/'>
							<img src='/img/oil.png' alt='znak logo krople paliwa' className='logo' />
							<p>AGMAR</p>
						</Link>
					</div>
				</nav>

				<nav className='mobilenav'>
					<div>
						<a href='index.php' className='nav-item'>
							<img src='/img/oil.png' alt='znak logo krople paliwa' className='logo' />
							<p>AGMAR</p>
						</a>
					</div>
				</nav>

				<img
					src='/img/main-img-desktop.webp'
					alt='tło głównej strony a na nim 4 pojazdy firmowe na trasie z tyłu znajduje się pole'
					className='hero-img'
					loading='eager'
				/>
				<img
					src='/img/main-img-mobile.webp'
					alt='tło głównej strony a na nim 4 pojazdy firmowe na trasie z tyłu znajduje się pole'
					className='hero-imgmobile'
					loading='eager'
				/>
				<img
					src='/img/main-img-medium.webp'
					alt='tło głównej strony a na nim 4 pojazdy firmowe na trasie z tyłu znajduje się pole'
					className='hero-imgmedium'
					loading='eager'
				/>
				<div className='hero-shadow section'>
					<div className='hero-text'>
						<h1>Sprzedaż olejów napędowych</h1>
						<p>z dostawą na terenach województwa śląskiego oraz małopolskiego.</p>
						<div className='buttonslinks'>
							<Link href='/o-firmie' className='btns'>
								O firmie
							</Link>
							<Link href='/oferta' className='btns'>
								Oferta
							</Link>
							<Link href='/kontakt' className='btns'>
								Kontakt
							</Link>
						</div>
					</div>
					<div className='hero-textmobile'>
						<h1>Sprzedaż olejów napędowych</h1>
						<p>z dostawą na terenach województwa śląskiego oraz małopolskiego.</p>
						<div className='buttonsoflinksmobile'>
							<Link href='/o-firmie'>O firmie</Link>
							<Link href='/oferta'>Oferta</Link>
							<Link href='/kontakt'>Kontakt</Link>
						</div>
					</div>
					<div className='white-block white-block-left'></div>
					<div className='pricebox'>
						<div className='date'>
							<p>
								<strong>Dzisiejsza cena</strong>
							</p>
						</div>
						<div className='imgprice'>
							<p>ON</p>
						</div>
						<div className='onprice'>
							<p>{price} zł/m3</p>
						</div>
					</div>
					<p className='telnexttoprice'>tel:+48 501 060 285</p>
				</div>
				<div className='telcontact'>
					<a href='tel:+48501060285'>
						<img src='/img/telephone.png' alt='znaczek słuchawki od telefonu' />
					</a>
				</div>
			</header>
		</>
	)
}

export default Home
