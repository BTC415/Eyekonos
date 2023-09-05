import { ITicketAllocation, ADD_TICKET_ALLOCATION } from "../constants/ticketAllocation";

export const addTicketAllocation = (allocation: ITicketAllocation) => {
    console.log(allocation)
    return {
        type: ADD_TICKET_ALLOCATION,
        data: allocation
    };
};