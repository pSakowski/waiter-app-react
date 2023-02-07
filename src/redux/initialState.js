const initialState = {
  tables: [
    {
      id: "1",
      status: "Busy",
      peopleAmount: "2",
      maxPeopleAmount: "4",
      bill: "20"
    },
    {
      id: "2",
      status: "Free",
      peopleAmount: "0",
      maxPeopleAmount: "3",
      bill: "0"
    },
    {
      id: "3",
      status: "Cleaning",
      peopleAmount: "0",
      maxPeopleAmount: "3",
      bill: "0"
    },
    {
      id: "4",
      status: "Reserved",
      peopleAmount: "0",
      maxPeopleAmount: "4",
      bill: "0"
    },
    {
      id: "5",
      status: "Busy",
      peopleAmount: "3",
      maxPeopleAmount: "6",
      bill: "45"
    }
  ]
};

export default initialState;