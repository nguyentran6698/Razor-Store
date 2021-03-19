import {writable} from "svelte/store"
const globalStore = writable({
    sidebar:false,
    cart:false,
    alert:false,
    alertText:'default alert',
    alertDanger: false,

})

const store = {
     subscribe : globalStore.subscribe,
    toggleItem: (item,value,alertText="default",alertDanger=false)=>{
        if(item === 'alert'){
            globalStore.update(storeValue =>{
                return {...storeValue,[item]:value,alertText,alertDanger}
            })
        }else{
            globalStore.update(productValues =>{
                return {...productValues,[item]:value}
            })
        }
   
}
}

export default store;