// const Admin = require('../models/Admin');
// const jwt = require('jsonwebtoken');

// const createToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
// };

// exports.register = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const admin = await Admin.create({ email, password });
//     const token = createToken(admin._id);
//     res.status(201).json({ token, adminId: admin._id });
//   } catch (err) {
//     res.status(400).json({ error: 'Email already exists or invalid input' });
//   }
// };

// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const admin = await Admin.findOne({ email });
//     if (!admin || !(await admin.comparePassword(password))) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }
//     const token = createToken(admin._id);
//     res.status(200).json({ token, adminId: admin._id });
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };



// const Admin = require('../models/Admin');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// exports.register = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const existing = await Admin.findOne({ email });
//     if (existing) return res.status(400).json({ msg: 'Admin already exists' });

//     const hashed = await bcrypt.hash(password, 10);
//     const admin = new Admin({ email, password: hashed });
//     await admin.save();

//     res.status(201).json({ msg: 'Admin registered successfully' });
//   } catch (err) {
//     res.status(500).json({ msg: err.message });
//   }
// };

// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const admin = await Admin.findOne({ email });
//     if (!admin) return res.status(400).json({ msg: 'Admin not found' });

//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

//     const token = jwt.sign({ id: admin._id }, 'your_jwt_secret', { expiresIn: '1d' });
//     res.status(200).json({ token, admin: { id: admin._id, email: admin.email } });
//   } catch (err) {
//     res.status(500).json({ msg: err.message });
//   }
// };



// const Admin = require('../models/Admin');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// exports.register = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const existing = await Admin.findOne({ email });
//     if (existing) return res.status(400).json({ msg: 'Admin already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newAdmin = new Admin({ email, password: hashedPassword });
//     await newAdmin.save();

//     res.status(201).json({ msg: 'Admin registered successfully' });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ msg: 'Server error' });
//   }
// };

// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const admin = await Admin.findOne({ email });
//     if (!admin) return res.status(400).json({ msg: 'Invalid credentials' });

//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

//     const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, {
//       expiresIn: '1d',
//     });

//     res.status(200).json({ token });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ msg: 'Server error' });
//   }
// };






const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await Admin.findOne({ email });
    if (existing) return res.status(400).json({ msg: 'Admin already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ name, email, password: hashedPassword });
    await newAdmin.save();

    res.status(201).json({ msg: 'Admin registered successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      token,
      admin: {
        id: admin._id,
        name: admin.name, // make sure this line exists
        email: admin.email
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Server error' });
  }
};
