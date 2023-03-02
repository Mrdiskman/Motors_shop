export const database = {
  user: {
    id: "1",
    name: "Pedro Sandes",
    email: "pedro2@email.com",
    cpf: "123.456.789-10",
    phone: "7599992222",
    dateOfBirth: "16/05/2002",
    descripition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat urna pellentesque, condimentum lacus quis, ut urna feugiat malesuada. Sed consectetur lorem egestas, finibus dolor a, sem, lacinia sed nibh ut.",
    seller: true,
    announcements: [
      {
        id: "1",
        model: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 ",
        pictures: [
          "https://st4.depositphotos.com/1008239/40970/i/1600/depositphotos_409708386-stock-photo-service-worker-washing-car-on.jpg",
          "https://st4.depositphotos.com/1008239/40970/i/1600/depositphotos_409708386-stock-photo-service-worker-washing-car-on.jpg",
          "https://st4.depositphotos.com/1008239/40970/i/1600/depositphotos_409708386-stock-photo-service-worker-washing-car-on.jpg",
          "https://st4.depositphotos.com/1008239/40970/i/1600/depositphotos_409708386-stock-photo-service-worker-washing-car-on.jpg",
          "https://st4.depositphotos.com/1008239/40970/i/1600/depositphotos_409708386-stock-photo-service-worker-washing-car-on.jpg",
          "https://st4.depositphotos.com/1008239/40970/i/1600/depositphotos_409708386-stock-photo-service-worker-washing-car-on.jpg",
        ],
        type: "Car",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat urna pellentesque, condimentum lacus quis, ullamcorper leo. Class Curabitur lobortis ligula ut urna feugiat malesuada. Sed consectetur lorem egestas, finibus dolor a, dignissim urna. Mauris turpis sem, lacinia sed nibh ut, mollis rutrum mauris. Nam tempus erat vel consequat mattis.",
        km: "10000",
        year: 2001,
        price: "120.000,00",
        isActive: true,
      },
    ],
  },

  comments: [
    {
      user: "Arminda Cantareli",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat urna pellentesque, condimentum lacus quis, ullamcorper leo.",
    },
    {
      user: "João Pedro",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat urna pellentesque, condimentum lacus quis, ullamcorper leo. Class Curabitur lobortis ligula ut urna feugiat malesuada. Sed consectetur lorem egestas, finibus dolor a, dignissim urna. Mauris turpis sem, lacinia sed nibh ut, mollis rutrum mauris. Nam tempus erat vel consequat mattis.",
    },
    {
      user: "João Texeira",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat urna pellentesque, condimentum lacus quis, ullamcorper leo, consectetur adipiscing elit. Curabitur consequat urna pellentesque, condimentum lacus quis, ullamcorper leo.",
    },
  ],
};
