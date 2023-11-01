import { User } from "../models/user.model.js";

export const getUser = async (req, res) => {
    const user = await User.findByPk( req.user.id,
        { attributes: { exclude: ['password'] }
    });
    
    return  res.json(user)
}


export const updateUser = async (req, res) => {
    let where = { }
    if (req.body?.email){ 
        where = { 
            email: req.body?.email
        }
    }
    if (req.body?.username){ 
        where = {
            ...where,
            username: req.body?.username
        }
    }
    const existUser = await User.findAll({ where });

    if (existUser)
      return res.status(400).json({
        message: ["Email or Username Exist"],
      });
    
    await User.update(
        { ...req.body },
        { where: { id: req.user.id }, returning: true }
    );
    delete req.body?.password
    return res.json({ ...req.body });
}
