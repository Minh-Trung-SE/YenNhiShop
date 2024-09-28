import {createTransport} from 'nodemailer';
class NodemailerService {
    private static transporter = createTransport(
        {
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD
            },
        }
    )

    static async sendHtmlEmail(to: string, subject: string, html: string) {
        return this.transporter.sendMail({
            from: process.env.GMAIL_USER,
            to,
            subject,
            html
        })
    }
}

export default NodemailerService