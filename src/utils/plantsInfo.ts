import UUID from "react-native-uuid";

export type PlantBase = {
  species: string;
  recommended: boolean;
  difficulty: "facil" | "medio" | "dificil";
  water: "low" | "medium" | "high";
  sun: "low" | "medium" | "high";
  toxic: boolean;
  location: string;
};


export type Plant = {
  id: string;
  name: string
  species: string;
  recommended: boolean;
  difficulty: "facil" | "medio" | "dificil";
  water: "low" | "medium" | "high";
  sun: "low" | "medium" | "high";
  toxic: boolean;
  location: string;
};

const plantSpeciesData: Record<string, PlantBase> = {
  "Espada de São Jorge": {
    species: "Espada de São Jorge",
    recommended: true,
    difficulty: "facil",
    water: "low",
    sun: "medium",
    toxic: false,
    location: "África Ocidental"
  },
  "Figueira benjamim": {
    species: "Figueira benjamim",
    recommended: false,
    difficulty: "medio",
    water: "medium",
    sun: "medium",
    toxic: true,
    location: "Sul e Sudeste Asiático"
  },
  "Lírio da Paz": {
    species: "Lírio da Paz",
    recommended: true,
    difficulty: "medio",
    water: "medium",
    sun: "low",
    toxic: true,
    location: "América Central e do Sul"
  },
  "Costela de Adão": {
    species: "Costela de Adão",
    recommended: true,
    difficulty: "medio",
    water: "medium",
    sun: "medium",
    toxic: true,
    location: "América Central"
  },
  "Peperômia": {
    species: "Peperômia",
    recommended: true,
    difficulty: "facil",
    water: "low",
    sun: "low",
    toxic: false,
    location: "América Central e do Sul"
  },
  "Nerium": {
    species: "Nerium",
    recommended: false,
    difficulty: "dificil",
    water: "medium",
    sun: "high",
    toxic: true,
    location: "Mediterrâneo e Ásia"
  },
  "Hera inglesa": {
    species: "Hera inglesa",
    recommended: true,
    difficulty: "medio",
    water: "medium",
    sun: "low",
    toxic: true,
    location: "Europa e Ásia Ocidental"
  },
  "Cactos": {
    species: "Cactos",
    recommended: true,
    difficulty: "facil",
    water: "low",
    sun: "high",
    toxic: false,
    location: "América"
  },
  "Palmeira de jardim": {
    species: "Palmeira de jardim",
    recommended: true,
    difficulty: "medio",
    water: "medium",
    sun: "medium",
    toxic: false,
    location: "Regiões tropicais"
  }
};

export function createPlant( name : string , species: string) {
  const plantData = plantSpeciesData[species];
  
  if (plantData) {

    return {
      id : UUID.v4() as string,
      name: name,
      ...plantData,
    };

  } else {
    console.warn(`Espécie "${species}" não encontrada.`);
    return null;
  }
}
