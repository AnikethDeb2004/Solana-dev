import "dotenv/config.js"
import {getKeypairFromEnvironment} from "@solana-developers/helpers"
const Keypair = getKeypairFromEnvironment("SECRET_KEY")
    console.log(
        `✅ Finished! We've loaded our secret key securely, using an env file!`
      );