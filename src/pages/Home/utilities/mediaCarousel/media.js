import media_01 from "../../../../assets/MainCarousel/media_01.png"
import media_02 from "../../../../assets/MainCarousel/media_02.png"
import media_05 from "../../../../assets/MainCarousel/media_05.png"
import media_06 from "../../../../assets/MainCarousel/media_06.png"
import media_09 from "../../../../assets/MainCarousel/media_09.png"

export const media = [ media_01, media_02, media_05, media_06, media_09, media_09, media_09, media_09 ];
export const mediaByIndex = index => media[index % media.length];


