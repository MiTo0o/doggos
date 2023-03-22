import { Lucky } from "./Lucky";
import { Brownie } from "./Brownie";
import { Leo } from "./Leo";
import { Elvis } from "./Elvis";

export const allGalleriesData = {
  Lucky,
  Brownie,
  Leo,
  Elvis,
};

export interface galleryDataInterface {
  title: string;
  imgList: {
    src: string;
    width: number;
    height: number;
  }[]
}
