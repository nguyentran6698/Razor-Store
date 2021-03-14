import {writable, derived} from "svelte/store"
import localProducts from "../localProducts"

const store = writable(flattenProducts([...localProducts]));
//subscribe
//set
//update
//flatten product
function flattenProducts(data){
    return data.map(item=>{
        let image = item.image.url;
        return {...item,image}
    })
}
export default store;
// derived
export const featuredStore = derived(store, ($featured)=>{
    return $featured.filter((item)=> item.featured === true);
})