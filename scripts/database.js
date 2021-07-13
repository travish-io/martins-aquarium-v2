// A database module in an application has the responsibility of maintaining the state of a particular type of data. In this application, the database.js module holds the state of each fish. Other modules in the application can request that state, and then use it for whatever they are responsible for.
const database = {
  fish: [
    {
      name: "Carl",
      food: "Plankton",
      size: 1.5,
    },
    {
      name: "Nemo",
      food: "Tacos",
      size: 3,
    },
    {
      name: "Dory",
      food: "Sushi",
      size: 5,
    },
    {
      name: "Johnathan",
      food: "Fruit Roll-ups",
      size: 3.2,
    },
    {
      name: "Bubba",
      food: "BBQ",
      size: 69,
    },
    {
      name: "Tim",
      food: "Watermellon",
      size: 1.6,
    },
  ],
};

// The database module will maintain the state, but other modules need copies of the state to use for their purposes. Here's the simplest way to do that. The function below returns a copy of the fish array. The function is exported so other modules can import it and use it.
export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};
