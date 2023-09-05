import { Action } from "redux";
import { ITicketAllocation, ADD_TICKET_ALLOCATION } from "../constants/ticketAllocation";

const INITIAL: ITicketAllocation = {
  allocations: [
    "5% random chance",
    "Seats 3 to 50",
    "First seat purchased",
    "First ticket admitted",
    "First ticket claimed"
  ]
};

export const TicketAllocationReducer = (state = INITIAL, action: any): ITicketAllocation => {
  switch (action.type) {
    case ADD_TICKET_ALLOCATION:
      console.log(action)
      return {
        allocations: [...state.allocations, action.data]
      };

    default:
      return state;
  }
};
