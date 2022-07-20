import Camisas from "../../../../assets/MockupCamisetas.png";

export const media = [Camisas, Camisas, Camisas,Camisas, Camisas, Camisas,Camisas, Camisas, Camisas];
export const mediaByIndex = index => media[index % media.length];


