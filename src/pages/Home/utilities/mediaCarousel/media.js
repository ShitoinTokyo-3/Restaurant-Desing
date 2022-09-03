import BrandIdentify from "../../../../assets/MainCarousel/BrandIdentity.png";
import SocialMedia from "../../../../assets/MainCarousel/SocialMedia.png";
import AdvertisementDesign from "../../../../assets/MainCarousel/AdvertisementDesign.png";
import MenuDesign from "../../../../assets/MainCarousel/MenuDesign.png";
import PrintingDesign from "../../../../assets/MainCarousel/PrintingDesign.png";
import PackingandLabel from "../../../../assets/MainCarousel/PackingandLabel.png";
import ClothingandMerch from "../../../../assets/MainCarousel/ClothingandMerch.png";
import WebsiteDesign from "../../../../assets/MainCarousel/WebsiteDesign.png";

export const media = [ 
    BrandIdentify,
    SocialMedia,
    AdvertisementDesign,
    MenuDesign,
    PrintingDesign,
    PackingandLabel,
    ClothingandMerch,
    WebsiteDesign
];
export const mediaByIndex = index => media[index % media.length];


