const User = require("../Models/AuthModel");
const jwt = require("jsonwebtoken");

//3days
const maxAge = 3 * 24 * 60 * 60;

const CreateToken = (id) => {
  return jwt.sign({ id }, "e-connect", {
    expiresIn: maxAge,
  });
};

const handleErrors = (err) => {
  let errors = { fullName: "", email: "", password: "" };

  //Handling errors for signUP
  //Duplicate value for email
  if (err.code === 11000) {
    console.log("from authController line 19");
    errors.email = "Email is already registered";
    console.log(errors);

    return errors;
  }

  //nothing is entered in the form
  if (err.message.includes("users validation failed")) {
    Object.values(err.errors).forEach(({ prop }) => {
      errors[prop.path] = prop.message;
    });
    return errors;
  }

  //Handling Error for login
  if (err.message === "Incorrect Email" || err.message === "Incorrect Password") {
    errors.email = "Invalid credentials";
    return errors;
  }
};

const signup = async (req, res) => {
  try {
    const { email, password,fullName } = req.body;
    const user = await User.create({ email, password ,fullName});
    const token = CreateToken(user._id);

    res.cookie("jwt", token, {
      withCredentials: true,
      httpOnly: t=false,
      maxAge: maxAge * 1000,
    });

    res.status(201).json({ user: user._id, created: true });
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    console.log("Auth Controller line 54");
    res.json({ errors, created: false });
  }
};



const googleAuth = async (req, res) => {
  try{
      const {email,fullName}=req.body;
      let user=User.findOne({email}).exec();
      console.log("From google auth line 68");
      if(user){
        console.log(user);
      }
      if(!user){
        user=await User.create({ email,fullName})
      }
      const plainUser = user.toObject();
      const token=jwt.sign({userId:user._id},"e-connect",{expiresIn:"3d"});
      res.status(200).json({token,user:plainUser});
  }
  catch(err){
      console.log(err);
      console.log("From google auth line 77");
      res.status(500).json({error:"Internal Server Error"});
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //console.log("Hello from authcontroller");
    const user = await User.login(email, password);
    const token = CreateToken(user._id);

    res.cookie("jwt", token, {
      httpOnly: false,
      maxAge: maxAge * 1000,
    });
    //console.log("Hello from authcontroller")
    res.status(200).json({ user: user._id, status: true });
  } catch (err) {
    //console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, status: false });
  }
};

module.exports = { signup, login, googleAuth };
