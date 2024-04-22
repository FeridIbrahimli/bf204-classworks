import API_BASE_URL from "../constants.js";

// getAll
export async function getAll(endpoint) {
    let obj = {
        data: null,
        error: null
    };
    await axios.get(API_BASE_URL+endpoint).then((result) => {
        obj.data = result.data;
    }).catch((err) => {
        obj.error = err;
    });
    return obj;
    
}
// getOne
export async function getOne(endpoint,id) {
    let obj = {
        data: null,
        error: null
    };
    await axios.get(API_BASE_URL+endpoint+`?id=${id}`).then((result) => {
        obj.data = result.data;
    }).catch((err) => {
        obj.error = err;
    });
    return obj;
    
}
// post 
 export async function post(endpoint, payload) {
    const response = await axios.post(API_BASE_URL+endpoint, payload);
    return response;
 }
// delete 
export async function deleteOne(endpoint, id) {
   const response = await axios.delete(API_BASE_URL+endpoint+`/${id}`) 
   return response;
}
// put 
export async function put(endpoint, id, payload) {
    const response = await axios.put(API_BASE_URL+endpoint+`?id=${id}`, payload) 
    return response;
}
