const Admin = require("../../Modals/admin");

exports.addAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json("Please provide login details.");
    }
    const existingAdminByEmail = await Admin.findOne({ email });
    if (existingAdminByEmail) {
      return res.status(400).json("Email already exists.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const adminData = new Admin({ email, password: hashedPassword });

    const result = await adminData.save();

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    if (
      error.code === 11000 &&
      error.keyPattern &&
      error.keyPattern.email === 1
    ) {
      return res.status(400).json("Email already exists.");
    }

    return res.status(500).json("Server error.");
  }
};

exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json("Please provide login details.");
    }

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json("User not found.");
    }

    const ispasswordMatch = await bcrypt.compare(password, admin.password);
    if (ispasswordMatch) {
      const token = generateToken({ email: admin.email });
      return res.status(200).json({
        message: `Welcome ${admin.email}`,
        token: token,
      });
    }else{
        return res.status(401).json("Invalid credentials.")
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server error.");
  }
};
