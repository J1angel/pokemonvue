import Api from '@/axios';

export default {
    registerUser(data){
        return Api().post('/register', data)
    },
}
