import { Novu } from "@novu/node";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { subscriberId, email, yourName, yourEmail, phoneNumber, yourMessage } = req.body;

        try {
            const novu = new Novu("1a508da8bf3e385768ef827ca99dc500");

            await novu.trigger("demo-apartment-review", {
                to: {
                    subscriberId,
                    email,
                },
                payload: {
                    yourName,
                    yourEmail,
                    phoneNumber,
                    yourMessage,
                },
            });

            return res.status(200).json({ message: "Notification sent successfully" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Failed to send notification" });
        }
    } else {
        return res.status(405).json({ message: "Method Not Allowed" });
    }
}
