import UUID from "react-native-uuid";

export type Plants = {
  id: string;
  plantName: string;
  species: string;
  status: "pendente" | "conclude";
};

export const TaskCategories = [
  {
    id: UUID.v4() as string,
    categoryName: "Regar",
    habits: [
      {
        id: UUID.v4() as string,
        plantName: "Rose",
        species: "Rosa",
        status: "pendente",
      },
      {
        id: UUID.v4() as string,
        plantName: "Lily",
        species: "Lilium",
        status: "conclude",
      },
      {
        id: UUID.v4() as string,
        plantName: "Rose",
        species: "Rosa",
        status: "pendente",
      },
      {
        id: UUID.v4() as string,
        plantName: "Lily",
        species: "Lilium",
        status: "conclude",
      },
    ],
  },
  {
    id: UUID.v4() as string,
    categoryName: "Adubar",
    habits: [
      {
        id: UUID.v4() as string,
        plantName: "Sunflower",
        species: "Helianthus",
        status: "conclude",
      },
      {
        id: UUID.v4() as string,
        plantName: "Orchid",
        species: "Orchidaceae",
        status: "pendente",
      },
      {
        id: UUID.v4() as string,
        plantName: "Sunflower",
        species: "Helianthus",
        status: "conclude",
      },
      {
        id: UUID.v4() as string,
        plantName: "Orchid",
        species: "Orchidaceae",
        status: "pendente",
      },
    ],
  },
  {
    id: UUID.v4() as string,
    categoryName: "Pegar Sol",
    habits: [
      {
        id: UUID.v4() as string,
        plantName: "Tulip",
        species: "Tulipa",
        status: "pendente",
      },
      {
        id: UUID.v4() as string,
        plantName: "Sunflower",
        species: "Helianthus",
        status: "conclude",
      },
    ],
  },
  {
    id: UUID.v4() as string,
    categoryName: "Tirar do Sol",
    habits: [
      {
        id: UUID.v4() as string,
        plantName: "Rose",
        species: "Rosa",
        status: "pendente",
      },
      {
        id: UUID.v4() as string,
        plantName: "Lily",
        species: "Lilium",
        status: "conclude",
      },
    ],
  },
  {
    id: UUID.v4() as string,
    categoryName: "Trocar os Potes",
    habits: [
      {
        id: UUID.v4() as string,
        plantName: "Orchid",
        species: "Orchidaceae",
        status: "pendente",
      },
      {
        id: UUID.v4() as string,
        plantName: "Tulip",
        species: "Tulipa",
        status: "conclude",
      },
      {
        id: UUID.v4() as string,
        plantName: "Sunflower",
        species: "Helianthus",
        status: "conclude",
      },
      {
        id: UUID.v4() as string,
        plantName: "Orchid",
        species: "Orchidaceae",
        status: "pendente",
      },
      {
        id: UUID.v4() as string,
        plantName: "Orchid",
        species: "Orchidaceae",
        status: "pendente",
      },
      {
        id: UUID.v4() as string,
        plantName: "Tulip",
        species: "Tulipa",
        status: "conclude",
      },
      {
        id: UUID.v4() as string,
        plantName: "Sunflower",
        species: "Helianthus",
        status: "conclude",
      },
      {
        id: UUID.v4() as string,
        plantName: "Orchid",
        species: "Orchidaceae",
        status: "pendente",
      },
    ],
  },
];
