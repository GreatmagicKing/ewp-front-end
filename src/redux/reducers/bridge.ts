
import { SET_BRIDGE } from '../actionTypes'
const initState = [{

}]
export default function bridgeReducers(preState=initState,action: { type: any; data: any; }){
    switch (action.type) {
        case SET_BRIDGE:
            console.log(action.data);
            return action.data
        default:
            return preState;
    }
}