

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// require('dotenv').config();

// const app = express();
// const port = 9023;
// const url = process.env.MONGODB_URL;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("MongoDB connected");

//     // Start server
//     app.listen(port, () => {
//       console.log(`Server running on port ${port}`);
//     });
//   })
//   .catch((error) => {
//     console.error("MongoDB connection error:", error);
//   });

// // Signup Schema
// const signUpSchema = new mongoose.Schema({
//   email: String,
//   password: String,
// });
// const signUpDetails = mongoose.model('signupDetails', signUpSchema);

// // Signup Route
// app.post('/signup', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     console.log(email,password)
    
//     console.log('Signup request received:', req.body);

//     // Check if user with the same email already exists
//     const existingUser = await signUpDetails.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Account already exists' });
//     }

//     // Create new user with hashed password
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new signUpDetails({ email, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: 'Signup Successful' });
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });



// const loginSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   }
// });
// const loginDetails = mongoose.model('loginDetails', loginSchema);

// app.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await signUpDetails.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return res.status(401).json({ message: 'Invalid password' });
//     }

//     res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
const port = 9023;
const url = process.env.MONGODB_URL;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const signUpSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const signUpDetails = mongoose.model('signupDetails', signUpSchema);

app.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await signUpDetails.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Account already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new signUpDetails({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Signup Successful' });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await signUpDetails.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Dish Schema
const dishSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  instructions: String,
});

const Dish = mongoose.model('Dish', dishSchema);

app.post('/api/dishes', async (req, res) => {
  try {
    const newDish = new Dish(req.body);
    await newDish.save();
    res.status(201).json(newDish);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/dishes', async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
