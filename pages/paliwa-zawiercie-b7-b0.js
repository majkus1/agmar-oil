import { React, useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'

const OilZawiercie = () => {
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
				<title>AGMAR | Paliwa Zawiercie B7 i B0 Diesel</title>
				<meta
					name='description'
					content='Dostawa paliwa zawiercie. Wyłącznie paliwo diesel b7 i b0. Posiadamy duże doświadczenie, zapraszamy.'
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
						<div href='#'>
							<img src='/img/oil.png' alt='znak logo krople paliwa' className='logo' />
							<p>AGMAR</p>
						</div>
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
				<h1>Paliwa Zawiercie B7 i B0 Diesel</h1>

				<div className='short-news'>
					<p>
						Witaj na stronie Agmar, Twojego niezawodnego dostawcy olejów napędowych B7 i B0 diesel na terenie Zawiercia.
						Specjalizujemy się w dostarczaniu najwyższej jakości paliw, które zaspokoją wszelkie Twoje potrzeby
						energetyczne, zapewniając jednocześnie wydajność i niezawodność Twoim maszynom i pojazdom.
					</p>

					<p>
						Oferujemy wysoce efektywne oleje napędowe B7 i B0 diesel, które charakteryzują się doskonałymi
						właściwościami czystości i stabilności. Dzięki temu zapewniamy, że Twoje silniki będą działać sprawnie i
						wydajnie, niezależnie od warunków pracy.
					</p>

					<p>
						Działając na terenie Zawiercia, jesteśmy zawsze gotowi do natychmiastowego dostarczenia potrzebnej ilości
						paliwa, bez względu na to, czy potrzebujesz oleju napędowego B7 do codziennego użytku, czy B0 diesel do
						bardziej wymagających zastosowań. Zawsze dostarczamy nasze produkty na czas, z pełnym szacunkiem dla Twojego
						harmonogramu i potrzeb.
					</p>

					<p>
						Wybierając Agmar jako dostawcę olejów napędowych B7 i B0 diesel, wybierasz firmę, która łączy doskonałą
						jakość produktów z pierwszorzędnym serwisem. Zapewniamy nie tylko wysokiej jakości paliwo, ale również
						wsparcie i doradztwo na każdym etapie Twojego zakupu.
					</p>

					<p>
						Skontaktuj się z nami, aby dowiedzieć się więcej o naszych produktach i usługach. Jesteśmy tutaj, aby Ci
						służyć i pomóc Ci znaleźć najbardziej efektywne i ekonomiczne rozwiązania dla Twoich potrzeb energetycznych.
						Oleje napędowe Zawiercie - B7 i B0 Diesel od Agmar - z nami zawsze jesteś na pełnym baku!
					</p>
				</div>
			</section>
		</>
	)
}

export default OilZawiercie
