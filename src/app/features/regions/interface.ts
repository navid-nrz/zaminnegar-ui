import { IBlock } from "../blocks/interface";
import { IMultiPolygon } from "../parcels/interface";

export interface IRegion {
  id: string;
  name: string;
  description: string;
  territory: IMultiPolygon;
  createdAt: Date;
  updatedAt: Date;
  /** Only present when the relation is explicitly loaded. */
  blocks?: IBlock[];
}