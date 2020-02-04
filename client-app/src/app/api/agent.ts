import axios, { AxiosResponse } from 'axios'
import { IContraception } from '../models/contraception';


axios.defaults.baseURL=process.env.REACT_APP_API_URL;
axios.defaults.url=''

const responseBody=(response:AxiosResponse)=>response.data;

const requests={
    get:(url:string)=>axios.get(url).then(responseBody),
    post:(url:string,body:{})=>axios.post(url,body).then(responseBody),
    put:(url:string,body:{})=>axios.put(url,body).then(responseBody),
    del:(url:string)=>axios.delete(url).then(responseBody)
}


const Contraceptions={

    list:():Promise<IContraception[]>=>requests.get('/contraception'),
    details:(id:string)=>requests.get(`/contraception/${id}`),
    create:(contraception:IContraception)=>requests.post('/contraception',contraception),
    update:(contraception:IContraception)=>requests.put(`/contraception/${contraception.id}`,contraception),
    delete:(id:string)=>requests.del(`/contraception/${id}`)
}


export default {

    Contraceptions
}