


import jwt from 'jsonwebtoken';

const generateToken = (userData) => {
  return jwt.sign(userData, process.env.JWT_SECRET, {  expiresIn: '1260s' });
};

const authenticate = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();


    } catch (error) {
      res.redirect('/');
    }
  } else {
    res.redirect('/');
  }
};

export { generateToken, authenticate };
