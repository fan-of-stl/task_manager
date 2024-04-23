const authService = require("../services/authService");

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await authService.authenticateUser(username, password);
    console.log("User authenticated:", user.username);
    if (user) {
      console.log("User authenticated:", user.username);
      const accessToken = authService.generateAccessToken(user.id);
      res.status(200).json({ accessToken });
    } else {
      console.log("Invalid username or password");
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Inside auth controller");
    console.error("Error authenticating user:", error);
    res.status(500).json({ message: "Error authenticating user" });
  }
};

module.exports = { login };
