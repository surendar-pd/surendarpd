/**
 * Contact Endpoint
 */

// Dependencies
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import z from 'zod';

type ResponseData = {
	message: string;
};

const contactFormRequestSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	service: z.string().max(10).optional(),
	message: z.string(),
});

// Email Sender
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.GMAIL_EMAIL,
		pass: process.env.GMAIL_PASSWORD,
	},
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	switch (req.method) {
		case 'POST': {
			return await sendContactMessage(req, res);
		}
	}
}

// POST: /contact endpoint to send email when
// 		 someone submits contact form
export async function sendContactMessage(
	request: NextApiRequest,
	resonse: NextApiResponse
) {
	try {
		const body = request.body;
		const { value, status } =
			z.OK<z.infer<typeof contactFormRequestSchema>>(body);
		if (status === 'valid') {
			await transporter.sendMail({
				from: process.env.GMAIL_EMAIL,
				to: process.env.GMAIL_EMAIL,
				subject: `${value.name} - ${value.email} - looking for ${value.service} service`,
				text: `${value.message}\nEmail: ${value.email}\nName:${value.name}\n\nThis message is sent from the websites contact form`,
			});
			return resonse.status(200).json({
				message: 'contact/form-submitted-succeessfully',
			});
		} else {
			return resonse
				.status(400)
				.json({ message: 'contact/invalid-req-body' });
		}
	} catch (e) {
		console.log(e);
		return resonse
			.status(500)
			.json({ message: 'app/internal-server-error' });
	}
}
