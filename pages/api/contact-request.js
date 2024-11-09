// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://socian_ai:socian_ai@cluster0.udbtp.mongodb.net/?retryWrites=true&w=majority";
export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const body = req.body;

      const { name, email, subject, message } = JSON.parse(req.body);

      try {
        const client = await MongoClient.connect(uri, {
          useNewUrlParser: true,
        });
        const db = client.db("socianai_website");
        const tickets = db.collection("contact_tickets");

        await tickets.insertOne({ name, email, subject, message });

        return res.status(200).json({ success: true });
      } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
      }
    default:
      res.setHeader("Allow", "POST");
      return res.status(405).end("Method Not Allowed");
  }
}
