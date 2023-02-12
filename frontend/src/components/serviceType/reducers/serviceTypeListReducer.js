import { SERVICE_TYPE_LIST_FAIL, SERVICE_TYPE_LIST_REQUEST, SERVICE_TYPE_LIST_SUCCESS } from "../constants/serviceTypeConstant"


export const serviceTypeListReducer = (state = { serviceType: [] }, action) => {
    switch (action.type) {
        case SERVICE_TYPE_LIST_REQUEST:
            return {
                loading: true,
                serviceType: []
            }

        case SERVICE_TYPE_LIST_SUCCESS:
            return {
                loading: false,
                serviceType: action.payload.serviceType,
                total: action.payload.total,
                limit_per_page: action.payload.limit_per_page
            }

        case SERVICE_TYPE_LIST_FAIL:
            return {
                loading: false,
                error: action.payload.message
            }

        default:
            return state
    }
}

