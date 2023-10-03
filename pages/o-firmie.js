import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
// import { Helmet } from 'react-helmet'
import Image from 'next/image'

const About = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			{/* <Helmet>
				<title>AGMAR paliwa b7 i b0 | O firmie</title>
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
				<title>AGMAR paliwa b7 i b0 | O firmie</title>
				<meta
					name='description'
					content='Dostawa paliwa śląsk i małopolska. Wyłącznie paliwo diesel b7 i b0. Posiadamy duże doświadczenie, zapraszamy.'
				/>
				<meta
					name='keywords'
					content='paliwo, diesel, dostawa paliwa, sprzedaż paliw, diesel b7, diesel b0, b7, b0, paliwo śląsk, paliwo małopolska, paliwo ogrodzieniec, paliwo zawiercie, paliwo katowice, paliwo kraków, paliwo sosnowiec, paliwo dąbrowa górnicza, dostawa paliwa ogrodzieniec, dostawa paliwa zawiercie, dostawa paliwa dąbrowa górnicza, dostawa paliwa śląsk, dostawa paliwa małopolska, dostawa paliwa pilica'
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
					<Link href='/o-firmie' className='active'>
						O firmie
					</Link>
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
						<Link href='/o-firmie' onClick={() => setIsOpen(false)} className='nav-mob active'>
							O firmie
						</Link>
						<Link href='/oferta' onClick={() => setIsOpen(false)} className='nav-mob'>
							Oferta
						</Link>
						<Link href='/kontakt' onClick={() => setIsOpen(false)} className='nav-mob'>
							Kontakt
						</Link>
					</nav>

					{/* <div className='nav__links'>
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
					</div> */}
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
			</header>

			<div className='section wrapper' id='o-firmie'>
				<section className='aboutcompany'>
					<div className='infoaboutcompany'>
						<div className='abouttext'>
							<h3>O firmie</h3>
							<div className='line line-left'></div>
							<div className='shortline shortline-left'></div>
							<p>
								Nasza firma oferuje głównie olej napędowy najwyższej jakości oraz transport paliwa na terenie
								województwa śląskiego oraz małopolskiego. Dostarczamy wyłącznie paliwo od największych polskich
								producentów.
							</p>
							<div className='imgaboutdesktop'>
								<Image
									src='/img/flota3.png'
									alt='pojazd firmy a w tle rafinferia'
									className='imgaboutdesktop'
									sizes='100vw'
									width={760}
									height={230}
									loading='eager'
								/>
							</div>
							<div className='imgabout'>
								<Image
									src='/img/flota3.png'
									alt='pojazd firmy a w tle rafinferia'
									sizes='100vw'
									style={{ width: '100%', height: '120' }} // optional
									width={0}
									height={120}
									loading='eager'
								/>
								{/* <div className="shadowimgcompany"></div> */}
							</div>
							<h2>Co nas wyróżnia?</h2>
							<p>
								Wyróżnia nas duże doświadczenie w branży, gdyż zajmujemy się sprzedażą paliw od 2006 roku. Udało nam się
								zrealizować tysiące zamówień, czego wynikiem są zadowoleni klienci, którzy chętnie ponownie korzystają z
								naszych usług, dzięki możliwości łatwego i szybkiego kontaktu z nami.
							</p>
							<h2>Dla kogo jesteśmy?</h2>
							<p>
								Obsługujemy indywidualnych odbiorców, bazy transportowe oraz stacje paliw. Dbamy o naszych klientów a
								każda dostawa posiada świadectwo jakości.
							</p>
						</div>
						{/* <div className="imgaboutdesktop">
                    <img src={flota} alt="pojazd firmy a w tle rafinferia" className="imgaboutdesktop" />
                </div> */}
					</div>
					<div className='abouticon'>
						<div className='iconsone'>
							<div className='years'>
								<img src='/img/calendar.png' alt='znaczek kalendarza' />
								<p>
									16 lat <br></br> doświadczenia
								</p>
							</div>
							<div className='clients'>
								<img src='/img/team.png' alt='znaczek uściśniętych dłoni' />
								<p>
									Tysiące zrealizowanych <br></br> zamówień
								</p>
							</div>
						</div>
						<div className='iconstwo'>
							<div className='fasttransport'>
								<img src='/img/express-delivery.png' alt='znaczek samochodu z dostawą' />
								<p>
									Terminowa i szybka <br></br> dostawa
								</p>
							</div>
							<div className='contacts'>
								<img src='/img/communicate.png' alt='znaczek komunkacji mailem lub telefonem' />
								<p>
									Szybki i łatwy <br></br> kontakt
								</p>
							</div>
						</div>
					</div>

					<div className='abouticondesktop'>
						<div className='years'>
							<img src='/img/calendar.png' alt='znaczek kalendarza' />
							<p>16 lat doświadczenia</p>
						</div>
						<div className='clients'>
							<img src='/img/team.png' alt='znaczek uściśniętych dłoni' />
							<p>Tysiące zrealizowanych zamówień</p>
						</div>
						<div className='fasttransport'>
							<img src='/img/express-delivery.png' alt='znaczek samochodu z dostawą' />
							<p>Terminowa i szybka dostawa</p>
						</div>
						<div className='contacts'>
							<img src='/img/communicate.png' alt='znaczek komunkacji mailem lub telefonem' />
							<p>Szybki i łatwy kontakt</p>
						</div>
					</div>
				</section>
			</div>
			<div className='otherlinks'>
				<Link href='/paliwa-katowice-b7-b0'>Paliwa Katowice</Link>
				<Link href='/paliwa-zawiercie-b7-b0'>Paliwa Zawiercie</Link>
				<Link href='/paliwa-ogrodzieniec-b7-b0'>Paliwa Ogrodzieniec</Link>
				<Link href='/paliwa-krakow-b7-b0'>Paliwa Kraków</Link>
			</div>
		</>
	)
}

export default About
