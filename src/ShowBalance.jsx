import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect } from "react";

export function ShowBalance(){

    const {connection} = useConnection();
    const wallet = useWallet();

    async function getBalance(){
        const publicKey = wallet.publicKey;
        if(publicKey){
            const balance = await connection.getBalance(publicKey);
            document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
        }
    }

    useEffect(()=> {
        getBalance();
    }, [wallet]);

    return <div>
        <p>SOL Balance:</p> <div id="balance"></div>
    </div>
}