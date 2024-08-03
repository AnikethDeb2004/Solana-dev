import {Connection,LAMPORTS_PER_SOL,PublicKey,clusterApiUrl} from  "@solana/web3.js"
const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey('9QNsspHsFaZcoSyr2ARVgsi8fhrw1NkaxsondsgLYv3i')
const balance= await connection.getBalance(address)
const balanceinSol = balance/ LAMPORTS_PER_SOL
console.log(`the balance of the ${address} is ${balanceinSol} SOL`);


console.log(`✅ Finished!`)
