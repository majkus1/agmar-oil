import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
// import { Helmet } from 'react-helmet'

const Contact = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [message, setMessage] = useState('')
	const [errors, setErrors] = useState({ email: '', phone: '' })
	const [statusMessage, setStatusMessage] = useState('') // Nowy stan

	// const validateEmail = (email) => {
	//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	//   return emailRegex.test(email);
	// };

	// const validatePhone = (phone) => {
	//   const phoneRegex = /^[0-9\b]+$/;
	//   return phoneRegex.test(phone) && phone.length === 9;
	// };

	// const handleSubmit = (e) => {
	//   e.preventDefault();

	//   let errors = { email: '', phone: '' };

	//   if (!validateEmail(email)) {
	//     errors.email = "Niepoprawny format e-mail";
	//   }

	//   if (!validatePhone(phone)) {
	//     errors.phone = "Niepoprawny format numeru telefonu";
	//   }

	//   setErrors(errors);

	//   if (errors.email === '' && errors.phone === '') {
	//     console.log("Formularz został przesłany");
	//   }
	// };

	const handleSubmit = async event => {
		event.preventDefault()

		const validateEmail = email => {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
			return emailRegex.test(email)
		}

		const validatePhone = phone => {
			const phoneRegex = /^[0-9\b]+$/
			return phoneRegex.test(phone) && phone.length === 9
		}

		const validateMessage = message => {
			return message.length >= 10
		}

		// walidacja tutaj...
		let errors = { email: '', phone: '', message: '' }

		if (!validateEmail(email)) {
			errors.email = 'Niepoprawny format e-mail'
		}

		if (!validatePhone(phone)) {
			errors.phone = 'Niepoprawny format numeru telefonu'
		}

		if (!validateMessage(message)) {
			errors.message = 'Wiadomość musi mieć co najmniej 10 znaków'
		}

		setErrors(errors)

		if (errors.email === '' && errors.phone === '' && errors.message === '') {
			try {
				let url =
					window.location.hostname === 'www.agmar-paliwa.pl'
						? 'https://www.agmar-paliwa.pl/api/send'
						: 'https://agmar-paliwa.pl/api/send'

				const response = await fetch(url, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ email, phone, message }),
				})

				if (!response.ok) {
					throw new Error('Błąd sieci!')
				}

				const data = await response.json() // teraz `data` to obiekt JSON

				setStatusMessage(data.message) // Ustawienie komunikatu o sukcesie

				// tutaj możesz zrobić coś z odpowiedzią...
			} catch (error) {
				console.error('Błąd:', error)
				setStatusMessage('Wystąpił błąd podczas wysyłania wiadomości') // Ustawienie komunikatu o błędzie
			}
		}
	}

	return (
		<>
			{/* <Helmet>
				<title>AGMAR paliwa b7 i b0 | Kontakt</title>
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
				<title>AGMAR paliwa b7 i b0 | Kontakt</title>
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
					<Link href='/oferta'>Nasza oferta</Link>
					<Link href='/kontakt' className='active'>
						Kontakt
					</Link>
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
						<Link href='/kontakt' onClick={() => setIsOpen(false)} className='nav-mob active'>
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

			<div className='section wrapper' id='kontakt'>
				<section className='contact'>
					<h3>Kontakt</h3>
					<div className='line line-left'></div>
					<div className='shortline shortline-left'></div>
					<div className='contactus'>
						<p>
							<img src='/img/telephone.png' alt='znaczek słuchawki telefonu' />
							<strong>501 060 285</strong>
							<br></br>42-440 Ogrodzieniec <br></br> ul. Słowackiego 13a <br></br>{' '}
							<Image
								src='/img/flotacontact.png'
								alt='zdjęcie zrobione na trasie pojazdu przewożącego paliwo'
								className='flotacontact'
								width={230}
								height={200}
							/>
						</p>
						<img
							src='/img/contactphoto.webp'
							alt='zdjęcie zrobione na trasie pojazdu przewożącego paliwo'
							className='contactfoto'
							loading='eager'
						/>

						<form className='contact contactform' name='myform' onSubmit={handleSubmit}>
							<p>Formularz kontaktowy:</p>
							<div>
								<label htmlFor='mail'>E-mail:</label>
								<input type='email' name='Email' id='mail' value={email} onChange={e => setEmail(e.target.value)} />
								<br></br>
								{errors.email && <span>{errors.email}</span>}
							</div>
							<div>
								<label htmlFor='number'>Telefon:</label>
								<input type='tel' name='Number' id='number' value={phone} onChange={e => setPhone(e.target.value)} />
								<br></br>
								{errors.phone && <span>{errors.phone}</span>}
							</div>
							<div className='textarea'>
								<label htmlFor='msg'>Wiadomość:</label>
								<br />
								<textarea
									name='Message'
									id='msg'
									cols='30'
									rows='10'
									value={message}
									onChange={e => setMessage(e.target.value)}></textarea>
							</div>
							{errors.message && <span>{errors.message}</span>}
							<div className='status-message'>
								{statusMessage} {/* Wyświetlanie komunikatu statusu */}
							</div>
							<button type='submit' name='Login' value='submit' className='border'>
								Wyślij
							</button>
						</form>
					</div>
				</section>
			</div>
		</>
	)
}

export default Contact
