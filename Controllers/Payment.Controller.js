const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
var cloudinary = require('cloudinary').v2;

const YOUR_DOMAIN = process.env.STRIPE_YOUR_DOMAIN;

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

module.exports = {
  /*
   * method: POST
   * Description: Payment
   */
  CreateSession: async (req, res, next) => {
    let newimage;
    await cloudinary.uploader.upload(req.body.image, function(error, result) {
      console.log(result, error);
      newimage = result.url;
    });
    const session = await stripe.checkout.sessions.create({
      customer_email: req.body.email,
      payment_method_types: ['card'],
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'IN'],
      },
      
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: req.body.name,
              images: [newimage],
            },
            unit_amount: req.body.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}`,
      cancel_url: `${YOUR_DOMAIN}`,
    });
    res.json({ id: session.id });
  },

  RetrieveSession: async (req, res, next) => {
    const session = await stripe.checkout.sessions.retrieve(
      "cs_test_a1fov9bEypJUZxCzNaeGpx9aEWRV5Zq7p5yKP3n04Vrlqy5WfuTetICZx4"
    );
    res.send(session);
  },
};
