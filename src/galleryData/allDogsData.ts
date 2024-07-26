import { Lucky } from "./Lucky";
import { Brownie } from "./Brownie";
import { Leo } from "./Leo";
import { Elvis } from "./Elvis";
import { Rufus } from "./Rufus";
import { Sesame } from "./Sesame";
import { Assorted } from "./Assorted";

export const allGalleriesData = {
  Lucky,
  Brownie,
  Leo,
  Elvis,
  Rufus,
  Sesame,
  "Assorted Doggos": Assorted
};

export interface galleryDataInterface {
  title: string;
  imgList: {
    src: string;
    width: number;
    height: number;
  }[];
}
