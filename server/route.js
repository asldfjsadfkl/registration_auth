import express from "express";
import Schema from "./Database/schema.js";
import isAuthenticated from "./Authentication/Auth.js";
const app = express();
const router = express.Router();

// signup router is here

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await Schema.create({
      name,
      email,
      password,
    });
    if (user) {
      const token = await user.createToken();
      res
        .status(201)
        .cookie("token", token, {
          expires: new Date(Date.now() + 100000000),
          httpOnly: true,
          secure: true,
          //  sameSite: "none",
        })
        .json({
          success: true,
          messege: "Registerd Successfully!",
        });
    }
    res.status(401);
  } catch (error) {
    res.status(500);
    console.error(error.message);
  }
});

// signin router is here
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Schema.findOne(req.email).select("+password");
    if (!user) {
      res.status(402).json({ message: "user not found" });
    }

    const token = await user.createToken();
    const options = {
      expires: new Date(Date.now() + 10000000),
      httpOnly: true,
      secure: true,
    //  sameSite: "none",
    };
    res.status(200).cookie("token", token, options).json({
      success: true,
      messege: "Login Successfully!",
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/logout", isAuthenticated, async (req, res) => {
  try {
    const user = await Schema.findById(req.user);
    if (user) {
      res
        .status(200)
        .cookie("token", null, {
          expires: new Date(Date.now()),
          httpOnly: true,
          secure: true,
          // sameSite: "none",
        })
        .json({
          success: true,
          message: "Logout Successfully!",
        });
    }
  } catch (error) {}
});

router.get("/getuser", isAuthenticated, async (req, res) => {
  try {
    const user = await Schema.findById(req.user);
    if (user) {
      res.status(200).json({
        success: true,
        user,
      });
    }
  } catch (error) {}
});

export default router;
