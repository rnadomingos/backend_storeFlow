import {
    SERVICE_TYPE_LIST_FAIL,
    SERVICE_TYPE_LIST_REQUEST,
    SERVICE_TYPE_LIST_SUCCESS
} from "../../constants/serviceTypeConstant"

export const serviceTypeListReducer = (state = { serviceTypes: [] }, action) => {
    switch (action.type) {
        case SERVICE_TYPE_LIST_REQUEST:
            return {
                loading: true,
                SERVICE_TYPEs: []
            }

        case SERVICE_TYPE_LIST_SUCCESS:
            return {
                loading: false,
                serviceTypes: action.payload
            }

        case SERVICE_TYPE_LIST_FAIL:
            return {
                loading: false,
                error: action.payload.error
            }

        default:
            return state
    }
}

