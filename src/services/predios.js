import { http } from './config'

export default {
    index:() =>{
        return http.get('predios');
    },

    store:(predio) =>{
        return http.put('predios/create', predio);
    },

    delete:(predio) =>{
        return http.delete(`predios/delete/${predio.id}`);
    },

    show:(predio_id) =>{
        return http.get(`predios/${predio_id}`);
    }
}