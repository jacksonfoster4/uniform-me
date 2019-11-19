import Cookies from 'js-cookie'

const root = "http://192.168.1.138:8000/api/"
async function fetchUrl(path, method, body){
    if(path[0] == "/"){
        path[0] = path.substring(1)
    }
    return await fetch(root+path, {

        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        method: method ? method : "GET",
        body: JSON.stringify(body),

    }).then(res => {
        if(!res.ok){
            throw Error(res.statusText)
        }
        return res.json()
    }).then( (result) => {
        return result
    }).catch( (error) => {
        console.log(error)
    })
}

async function fetchAuthedUrl(path, method, body){
    if(path[0] == "/"){
        path[0] = path.substring(1)
    }    
    return await fetch(root+path, {
        headers: new Headers({
            'Content-Type': 'application/json',
            "Authorization": "Token " + getAuthToken()
        }),
        method: method ? method : "GET",
        body: JSON.stringify(body),
    }).then(res => {
        if(!res.ok){
            throw Error(res.statusText)
        }
        return res.json()
    }).then( (result) => {
        return result
    }).catch( (error) => {
        console.log(error)
    })
}

function getAuthToken(){
    return Cookies.get('authToken')
}

export default fetchAuthedUrl
export { fetchUrl }