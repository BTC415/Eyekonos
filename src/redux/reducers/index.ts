import { combineReducers } from 'redux';
import { TokenReducer } from './token';
import { TicketAllocationReducer } from './ticketAllocation';

const rootReducer = combineReducers({
    TokenReducer,
    TicketAllocationReducer,
});

export default rootReducer;