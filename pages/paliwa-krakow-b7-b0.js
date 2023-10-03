import { React, useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'

const OilKrakow = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [price, setPrice] = useState('')

	const fetchPrice = async () => {
		const response = await axios.get('https://agmar-paliwa.pl/apis/fuel-price')

		setPrice(response.data.price)
	}

	useEffect(() => {
		fetchPrice()
	}, [])

	return (
		<>
			<Head>
				<title>AGMAR | Paliwa Kraków B7 i B0 Diesel</title>
				<meta
					name='description'
					content='Dostawa paliwa kraków. Wyłącznie paliwo diesel b7 i b0. Posiadamy duże doświadczenie, zapraszamy.'
				/>
			</Head>
			<header id='headernav'>
				<nav className='navdesktop-list'>
					<div className='nav-item'>
						<Link href='/'>
							<img src='/img/oil.png' alt='znak logo krople paliwa' className='logo' />
							<p>AGMAR</p>
						</Link>
					</div>
					<Link href='/'>Strona główna</Link>
					<Link href='/o-firmie'>O firmie</Link>
					<Link href='/oferta'>Nasza oferta</Link>
					<Link href='/kontakt'>Kontakt</Link>
				</nav>

				<nav className='mobilenav'>
					<li className='nav-item'>
						<Link href='/'>
							<img src='/img/oil.png' alt='znak logo krople paliwa' className='logo' />
							<p>AGMAR</p>
						</Link>
					</li>

					<button className='menu-button' onClick={() => setIsOpen(!isOpen)}>
						<p className='burger'>{isOpen ? 'X' : '☰'}</p>
					</button>
					<nav className={`sidebar ${isOpen ? 'open' : ''}`}>
						<Link href='/' onClick={() => setIsOpen(false)} className='nav-mob first'>
							Strona Główna
						</Link>
						<Link href='/o-firmie' onClick={() => setIsOpen(false)} className='nav-mob'>
							O firmie
						</Link>
						<Link href='/oferta' onClick={() => setIsOpen(false)} className='nav-mob'>
							Oferta
						</Link>
						<Link href='/kontakt' onClick={() => setIsOpen(false)} className='nav-mob'>
							Kontakt
						</Link>
					</nav>

					<div className='nav__links'>
						<ul>
							<li>
								<a href='/index.php'>Strona Główna</a>
							</li>
							<li>
								<a href='/o-firmie.php'>O firmie</a>
							</li>
							<li>
								<a href='/oferta.php'>Oferta</a>
							</li>
							<li>
								<a href='/kontakt.php'>Kontakt</a>
							</li>
						</ul>
					</div>
					<div className='toggle' id='nav-toggle'>
						<i className='fas fa-bars'></i>
					</div>
					<div className='close' id='nav-close'>
						<i className='fas fa-times'></i>
					</div>
				</nav>
				<div className='telcontact'>
					<a href='tel: +48 501 060 285'>
						<img src='/img/telephone.png' alt='znaczek słuchawki od telefonu' />
					</a>
				</div>
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
			</header>

			<section className='services-description'>
				<h1>Paliwa Kraków B7 i B0 Diesel</h1>

				<div className='short-news'>
					<p>
						Witamy na stronie Agmar, Twojego lokalnego dostawcy olejów napędowych B7 i B0 diesel w Krakowie. Dostarczamy
						produkty najwyższej jakości, które spełniają najwyższe standardy wydajności i niezawodności.
					</p>

					<p>
						Nasze oleje napędowe B7 i B0 diesel są starannie wyselekcjonowane, aby zapewnić optymalną czystość,
						stabilność i wydajność. Są one idealne dla wszelkiego rodzaju pojazdów i maszyn, zawsze dostarczając
						niezawodną moc i wydajność.
					</p>

					<p>
						Działając na terenie Krakowa, jesteśmy zawsze blisko, aby szybko i efektywnie dostarczyć potrzebną Ci ilość
						paliwa. Z nami, możesz być pewny, że Twoje potrzeby energetyczne zostaną zaspokojone na czas i zgodnie z
						Twoimi wymaganiami.
					</p>

					<p>
						Wybierając Agmar, wybierasz niezawodność, jakość i profesjonalizm. Jesteśmy tutaj, aby pomóc Ci zaspokoić
						Twoje potrzeby energetyczne, oferując najlepsze na rynku oleje napędowe B7 i B0 diesel.
					</p>

					<p>
						Skontaktuj się z nami, aby dowiedzieć się więcej o naszych produktach i usługach. Jesteśmy gotowi, aby Ci
						służyć i pomóc Ci znaleźć idealne rozwiązania dla Twoich potrzeb. Oleje napędowe Kraków - B7 i B0 Diesel od
						Agmar - z nami zawsze jedziesz z pełnym bakiem!
					</p>
				</div>
			</section>
		</>
	)
}

export default OilKrakow
