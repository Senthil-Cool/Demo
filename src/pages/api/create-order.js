// src/pages/api/create-order.js
 
import Razorpay from 'razorpay';
 
export default async function handler(req, res) {
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const instance = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET,
    });
 
    const order = await instance.orders.create({
      amount: req.body.amount *100, // amount in the smallest currency unit, e.g., paise for INR
      currency: req.body.currency,
      receipt: 'receipt#1',
    });
 
   
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Order creation failed' });
  }
}
 