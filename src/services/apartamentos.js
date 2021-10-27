import { http } from './config'

export default {
    index:() =>{
        return http.get('apartamentos');
    },

    store:(apartamento) =>{
        return http.put('apartamentos/create', apartamento);
    },

    delete:(apartamento) =>{
        return http.delete(`apartamentos/delete/${apartamento.id}`);
    }
}