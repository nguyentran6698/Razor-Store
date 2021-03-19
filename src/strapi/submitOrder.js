import axios from 'axios'
import url from "./URL.js"

async function submitOrder({name,total,items,stripeTokenId,userToken}){
    const response = await axios.post(`${url}/orders` , {
        name,total,items,stripeTokenId,
    },
    {
        headers:{
            Authorization: `Bearer ${userToken}`,
        },
    }).catch(error =>console.log(error));
    return response;
 // code go here
}

export default submitOrder;