import Api from '@/axios';
import store from '@/store';

export default {
    loginUser(data){
        return Api().post('/login', data)
    },
    user(){
        Api().defaults.headers.common["Authorization"] = `Bearer ${store.state.authUser.token}`;
        return Api().post('/auth/me',{})
    }
}
