import Api from '@/axios';
import store from '@/store';
export default {
    getUserReactions(){
        Api().defaults.headers.common["Authorization"] = `Bearer ${store.state.authUser.token}`;
        return Api().get('/auth/getuserreaction?page=${page}')
    },
}
