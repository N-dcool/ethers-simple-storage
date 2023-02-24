import {ethers} from "ethers";
import * as fs from "fs-extra";
import "dotenv/config"

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!);
  const encryptedJsonKey = await wallet.encrypt(
    process.env.PRIVATE_PASSWORD!,
    process.env.PRIVATE_KEY!
  );
  //console.log(encryptedJsonKey);
  fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey);
  console.log("Created encrptedKey.json successfully⏲️");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
