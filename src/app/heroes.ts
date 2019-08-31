export interface Heroes{
    response: string,
    "response-for": string,
    
    id: number,
    name: string,
    powerstats: Powerstats,
    biography: Biography,
    appearance: Appearance,
    work: Work,
    connections: Connections,
    image: Image
  }
  
  
  export interface Powerstats{
    intelligence: number,
    strength: number,
    speed: number,
    durability: number,
    power: number,
    combat: number
  }
  
  export interface Biography{
    'full-name' : string,
    "alter-egos": string,
    aliases: string[],
    "place-of-birth": string,
    "first_appearance": string,
    publisher: string,
    alignment: string
  }
  
  export interface Appearance{
    gender: string,
    race: string,
    height: string[],
    weight: string[],
    "eye-color": string,
    "hair-color": string
  }
  
  export interface Work{
    occupation: string,
    base: string
  }
  
  export interface Connections{
    "group-affiliation": string;
    relatives: string
  }
  
  export interface Image{
    url: string;
  }