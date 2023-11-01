import {config} from "../config.js"
import jwt from "jsonwebtoken";

const getExpirationDate = () => {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return parseInt(expirationDate.getTime() / 1000, 10)
}

export async function createAccessToken(payload) {

  return new Promise((resolve, reject) => {

    const options = { 
      expiresIn: getExpirationDate()
    }

    const onTokenCreated = (err,token) => {
      if (err) reject(err);
      resolve(token);
    }

    jwt.sign(
      payload,
      config.jwtSecret, 
      options, 
      onTokenCreated
    );
    
  });
}