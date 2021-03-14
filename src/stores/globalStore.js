import {writable} from "svelte/store"
const globalStore = writable({
    sidebar:false,
    cart:false,
    alert:false,
})

const store = {
     subscribe : globalStore.subscribe,
    toggleItem: (item,value)=>{
    globalStore.update(productValues =>{
        return {...productValues,[item]:value}
    })
}
}

export default store;