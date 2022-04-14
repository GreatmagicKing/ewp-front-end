import axios from "axios";
import { setbridge } from "../redux/actions/bridge";
import store from "../redux/store";
export class BridgeService {

    public getBridge() {
        axios.get('http://localhost:8080/Bridge')
            .then(function (response) {
                console.log(response);
                store.dispatch(setbridge(response.data))
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}