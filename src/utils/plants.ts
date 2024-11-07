import UUID from "react-native-uuid"

type Props = {
  id: string;
  plantName: string;
  species: string;
  status: "task" | "pendente" | "conclude";
};



export const plants: Props[] = [
  {
    id: UUID.v4() as string,
    plantName: "Rose",
    species: "Rosa",
    status: "task"
  },
  {
    id: UUID.v4() as string,
    plantName: "Lily",
    species: "Lilium",
    status: "pendente"
  },
  {
    id: UUID.v4() as string,
    plantName: "Sunflower",
    species: "Helianthus",
    status: "conclude"
  },
  {
    id: UUID.v4() as string,
    plantName: "Orchid",
    species: "Orchidaceae",
    status: "task"
  },
  {
    id: UUID.v4() as string,
    plantName: "Tulip",
    species: "Tulipa",
    status: "pendente"
  }
];
