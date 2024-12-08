import Jwt from "jsonwebtoken";
import Schema from "../Database/schema.js";

const isAuthenticated = async (req, res, Next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      res.status(401).json({
        message: "token Not found",
      });
    }

    const decoded = Jwt.verify(token, process.env.JWT_SECREAT);
    req.user = await Schema.findById(decoded.id);
    Next();
  } catch (error) {}
};

export default isAuthenticated;
