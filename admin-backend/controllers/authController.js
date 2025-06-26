const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.create({ email, password });
    const token = createToken(admin._id);
    res.status(201).json({ token, adminId: admin._id });
  } catch (err) {
    res.status(400).json({ error: 'Email already exists or invalid input' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = createToken(admin._id);
    res.status(200).json({ token, adminId: admin._id });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
