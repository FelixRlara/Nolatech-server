import app from "./src/app.js";
import { sequelize } from "./src/db/sequelize.js";
import { config } from "./src/config.js"

const main = async () => {
  try{  
    //---->1: Sync db models
    await sequelize.sync();
    //---->2: Start Server
    app.listen(config.port);
    console.log(`[🤖]: Connection has been established successfully. listening on port ${config.port}`);
  }catch (error){
    console.log(`[🤖]: Error to start server`,error);
  }
  
}

main()