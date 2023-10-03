import nextCors from 'nextjs-cors'
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
	await nextCors(req, res, {
		// Options
		methods: ['POST'],
		origin: ['https://agmar-paliwa.pl', 'https://www.agmar-paliwa.pl'], 
		optionsSuccessStatus: 200,
	})
	if (req.method === 'POST') {
		let { email, phone, message } = req.body

		let transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASS,
			},
		})

		let mailOptions = {
			from: email,
			to: 'michalipka1@gmail.com',
			subject: 'Nowa wiadomość z formularza kontaktowego',
			text: `Od: ${email} Telefon: ${phone} Wiadomość: ${message}`,
		}

		try {
			await transporter.sendMail(mailOptions)
			res.status(200).json({ message: 'Wiadomość wysłana pomyślnie' })
		} catch (error) {
			res.status(500).json({ message: 'Wystąpił błąd podczas wysyłania wiadomości' })
		}
	} else {
		res.status(405).end() //Method Not Allowed
	}
}
