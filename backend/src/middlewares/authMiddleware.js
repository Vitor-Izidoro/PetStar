const jwt = require('jsonwebtoken');


/*
Função responsável pela autenticação do usuário,
verificando o token JWT fornecido no cabeçalho da requisição.

return: autenticação e passa para a função next()

*/
const authMiddleware = (req,res,next)=>{
  const token = req.headers.authorization?.split(' ')[1];
  if(!token) return res.status(401).json({ error:'No token provided' });
  try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user = decoded;
    next();
  }catch(err){
    res.status(401).json({ error:'Invalid token' });
  }
};

module.exports = authMiddleware;
