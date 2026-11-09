import {maskAccount} from "../utils/maskAccount";
export function AccountCard({number,balance}:{number:string;balance:number}){return <article><small>ACCOUNT</small><h2>{maskAccount(number)}</h2><p>Available balance</p><strong>₹{balance.toLocaleString("en-IN")}</strong></article>}
