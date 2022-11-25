import Api from '@/axios';
import store from '@/store';
export default {
    updateInformation(data){
        Api().defaults.headers.common["Authorization"] = `Bearer ${store.state.authUser.token}`;
        return Api().post(`/auth/updateInformation`,data)
    },
}
