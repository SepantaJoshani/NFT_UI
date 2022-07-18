import { uuid } from "./uuid";
import {
  MustachGuy,
  OldSherlock,
  CigaretteGuy,
  CoolGuy,
  GirlWithGlasses,
  MathGuy,
  GirlWithHat,
  BlondeGuy,
  Cyborg,
  ElfGuy,
  GrayGuy,
  GreenBaseBall,
  HelmetGuy,
} from "../src/assets";

export const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi,Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. ";
export const timelineData = [
  {
    id: 1,
    text: lorem,
  },
  {
    id: 2,
    text: lorem,
  },
  {
    id: 3,
    text: lorem,
  },
  {
    id: 4,
    text: lorem,
  },
  {
    id: 5,
    text: lorem,
  },
  {
    id: 6,
    text: lorem,
  },
  {
    id: 7,
    text: lorem,
  },
];

export const teamData = [
  { id: uuid(), name: "Raizer", image: MustachGuy },
  { id: uuid(), name: "Great Apple", image: OldSherlock },
  { id: uuid(), name: "Marina", image: GirlWithHat },
  { id: uuid(), name: "Telma", image: GirlWithGlasses },
  { id: uuid(), name: "Mogimog", image: CigaretteGuy },
  { id: uuid(), name: "Last Satoshi", image: MathGuy },
  { id: uuid(), name: "Mr Nobody", image: CoolGuy },
];
export const nftData = [
  { id: uuid(), name: "Brother Hood #985", eth: 0, image: HelmetGuy },
  { id: uuid(), name: "Brother Hood #985", eth: 0, image: Cyborg },
  { id: uuid(), name: "Brother Hood #985", eth: 0, image: ElfGuy },
  { id: uuid(), name: "Brother Hood #985", eth: 0, image: GrayGuy },
  { id: uuid(), name: "Brother Hood #985", eth: 0, image: GreenBaseBall },
  { id: uuid(), name: "Brother Hood #985", eth: 0, image: BlondeGuy },
];
