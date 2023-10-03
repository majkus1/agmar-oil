import { React, useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'

const OilOgrodzieniec = () => {
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
				<title>AGMAR | Paliwa Ogrodzieniec B7 i B0 Diesel</title>
				<meta
					name='description'
					content='Dostawa paliwa ogrodzieniec. Wyłącznie paliwo diesel b7 i b0. Posiadamy duże doświadczenie, zapraszamy.'
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
				<h1>Paliwa Ogrodzieniec B7 i B0 Diesel</h1>

				<div className='short-news'>
					<p>
						Witaj na stronie firmy Agmar, Twojego zaufanego dostawcy paliw na terenie Ogrodzieńca. Zajmujemy się
						sprzedażą i dostarczaniem najwyższej jakości olejów napędowych B7 i B0 diesel, zawsze gwarantując szybką i
						punktualną dostawę.
					</p>{' '}
					<p>
						Zdajemy sobie sprawę, jak ważne jest dla Ciebie posiadanie niezawodnego źródła paliw, dlatego stawiamy na
						jakość naszych produktów i usług. Nasze oleje napędowe diesel B7 oraz B0 są odpowiednie dla wszelkiego
						rodzaju pojazdów i maszyn, zawsze dostarczając optymalną wydajność i niezawodność.
					</p>
					<p>
						Nasza firma działa na terenie Ogrodzieńca, zapewniając naszym klientom wygodę i pewność, że ich potrzeby
						paliwowe zostaną zaspokojone szybko i efektywnie. Dzięki naszej lokalnej obecności, jesteśmy zawsze tuż
						obok, gotowi do dostarczenia Ci potrzebnej ilości paliwa. Wybierając firmę Agmar, wybierasz sprawdzonego
						dostawcę, który zawsze stawia na pierwszym miejscu potrzeby klienta. Zaufaj nam i dołącz do grona naszych
						zadowolonych klientów na terenie Ogrodzieńca.
					</p>{' '}
					Jeżeli masz pytania dotyczące naszych produktów lub usług, skontaktuj się z nami. Z chęcią pomożemy Ci znaleźć
					idealne rozwiązania paliwowe dla Twoich potrzeb. Paliwa Ogrodzieniec - Agmar.
				</div>
			</section>
		</>
	)
}

export default OilOgrodzieniec
