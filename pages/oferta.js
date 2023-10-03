import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
// import { Helmet } from 'react-helmet'

const Offer = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			{/* <Helmet>
				<title>AGMAR paliwa b7 i b0 | Oferta</title>
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
				<title>AGMAR paliwa b7 i b0 | Oferta</title>
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
					<Link href='/o-firmie'>O firmie</Link>
					<Link href='/oferta' className='active'>
						Nasza oferta
					</Link>
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
						<Link href='/oferta' onClick={() => setIsOpen(false)} className='nav-mob active'>
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
			</header>

			<div className='section wrapper' id='oferta'>
				<section className='offer'>
					<h3>Nasza oferta</h3>
					<div className='line line-left'></div>
					<div className='shortline shortline-left'></div>

					<div className='offertextmobile'>
						<h1>Sprzedaż i dostawa olejów napędowych B7 i B0 Diesel</h1>
						<p>
							Sprzedaż i dostawa olejów napędowych B7 i B0 Diesel najwyższej jakości w konkurencyjnej cenie. Oczywiście
							dostawa pod wskazany przez Ciebie adres. Bez stresu. Dla własnego komfortu. Czyli dokładnie tak, jak
							lubisz. Nie zwlekaj i już dziś zadbaj o dostęp do odpowiedniego paliwa dla swojego diesla.
						</p>
						<h2>Diesel B7 czy B0?</h2>
						<p>
							ON B7 jest wysokiej jakości paliwem napędowym przeznaczonym do praktycznie wszystkich typów silników
							diesla. To doskonałe paliwo napędowe z maksymalną zawartość procentową biokomponentów, czyli bioestrów
							FAME, wynoszącą 7%. Oczywiście ON B7 paliwo jest zgodne z obowiązującymi normami dotyczącymi zawartości
							biokomponentów w oleju. <br></br>Natomiast ON B0 to paliwo dedykowane najbardziej wymagającym silnikom
							diesla. Ponadto zapewnia nieco szybszy rozruch silnika. Oczywiście olej napędowy posiada odpowiednie
							biocydy, które skutecznie chronią go przed szkodliwym skażeniem mikrobiologicznym. Zatem kupując u nas ON
							B0, otrzymujesz czyste paliwo bez dodatków komponentów. Co oznacza, że Twój silnik otrzymuje to, co
							najlepsze.
						</p>
					</div>
					<div className='offertextdesktop'>
						<h1>Sprzedaż i dostawa olejów napędowych B7 i B0 Diesel</h1>
						<p>
							Sprzedaż i dostawa olejów napędowych B7 i B0 Diesel w województwie śląskim oraz małopolskim. Paliwo
							najwyższej jakości w konkurencyjnej cenie. Oczywiście dostawa pod wskazany przez Ciebie adres. Bez stresu.
							Dla własnego komfortu. Czyli dokładnie tak, jak lubisz.
						</p>
						<h2>Dostawa i sprzedaż oleju napędowego B7</h2>
						<p>
							Dostawa i sprzedaż oleju napędowego B7 przez naszą firmę to gwarancja zakupu wysokiej jakości paliwa z
							dowozem pod wskazany adres. Przy czym ON B7 to doskonałe paliwo napędowe z maksymalną zawartość procentową
							biokomponentów, czyli bioestrów FAME, wynoszącą 7%. Oczywiście ON B7 paliwo jest zgodne z obowiązującymi
							normami dotyczącymi zawartości biokomponentów w oleju.
						</p>
						<h2>Sprzedaż i dostawa oleju napędowego B0 Diesel</h2>
						<p>
							Sprzedaż i dostawa oleju napędowego B0 za naszym pośrednictwem zapewnia Ci nabycie wysokiej jakości
							czystego oleju napędowego z dowozem pod wskazany przez Ciebie adres. Oczywiście olej napędowy posiada
							odpowiednie biocydy, które skutecznie chronią go przed szkodliwym skażeniem mikrobiologicznym. Zatem
							kupując u nas ON B0, otrzymujesz czyste paliwo bez dodatków komponentów. Co oznacza, że Twój silnik
							otrzymuje to, co najlepsze.
						</p>
						<h2>Diesel B7 czy B0?</h2>
						<p>
							ON B7 jest wysokiej jakości paliwem napędowym przeznaczonym do praktycznie wszystkich typów silników
							diesla. Natomiast ON B0 to paliwo dedykowane najbardziej wymagającym silnikom diesla. Ponadto zapewnia
							nieco szybszy rozruch silnika. Nie zwlekaj i już dziś zadbaj o dostęp do odpowiedniego paliwa dla swojego
							diesla.
						</p>
					</div>
				</section>
			</div>
		</>
	)
}

export default Offer
