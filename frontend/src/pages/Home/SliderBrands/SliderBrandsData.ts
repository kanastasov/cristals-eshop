import cristal from "../../../img/Crystals1.jpg";
import cristal2 from "../../../img/Crystals2.jpg";
import cristal3 from "../../../img/Crystals3.jpg";
import cristal4 from "../../../img/Crystals4.jpg";
import cristal5 from "../../../img/Crystals5.jpg";
import cristal6 from "../../../img/Crystals6.jpg";
import cristal7 from "../../../img/Crystals7.jpg";
import cristal8 from "../../../img/Crystals8.jpg";


export type BrandType = {
    name: string;
    url: string;
    description: string
};

export const brandsItem: Array<BrandType> = [
    { name: "Кристали", url: cristal, description: "Необработени Скъпоценни и Полускъпоценни Камън" },

    { name: "Минерали", url: cristal2, description: "Полирани Камъни" },
    { name: "Сувенири", url: cristal3, description: "Минерали и Кристали от България" },

    { name: "Кристали", url: cristal4, description: "Друзи и Геоди" },
    { name: "Минерали", url: cristal5, description: "Шипове и Обелиски" },
    { name: "Сувенири", url: cristal6, description: " Сфери и Яйца" },

    { name: "Кристали", url: cristal7, description: "Сърца" },
    { name: "Минерали", url: cristal8, description: "Дланни Камъни" },

    
    { name: "Кристали", url: cristal4, description: "Кристални Черепи" },
    { name: "Минерали", url: cristal5, description: "Плочки" },
    { name: "Сувенири", url: cristal6, description: "Радиестезични Махала" },

    { name: "Кристали", url: cristal7, description: "Пирамиди" },
    { name: "Минерали", url: cristal8, description: "За Дома и Офиса" },
    
    // { name: "Tom Ford", url: "https://i.ibb.co/s9MpxnG/o-139.jpg" },
    // { name: "Prada", url: "https://i.ibb.co/2Y5Lsvy/o-143.jpg" },
    // { name: "Dior", url: "https://i.ibb.co/wCkG15S/o-160.jpg" },
    // { name: "Versace", url: "https://i.ibb.co/0mFhYdV/o-97.jpg" },
    // { name: "Chanel", url: "https://i.ibb.co/QrNd9DL/o-30.jpg" },
    // { name: "Dolce&Gabbana", url: "https://i.ibb.co/Sycbcbv/o-56.jpg" },

    // { name: "Gucci", url: "https://i.ibb.co/z6gQzvg/o-67.jpg" },
    // { name: "Givenchy", url: "https://i.ibb.co/0hT49zf/o-66.jpg" },
    // { name: "Creed", url: "https://i.ibb.co/yR1mZP4/o-50.jpg" },
    // { name: "Jean Paul Gaultier", url: "https://i.ibb.co/tHFz6W2/o-72.jpg" },
    // { name: "Paco Rabanne", url: "https://i.ibb.co/k440VSk/o-88.jpg" },
    // { name: "Giorgio Armani", url: "https://i.ibb.co/qkkBXBT/o-65.jpg" },

    // { name: "Bvlgari", url: "https://i.ibb.co/58FfNSb/o-14.jpg" },
    // { name: "Calvin Klein", url: "https://i.ibb.co/98r6KXm/o-18.jpg" },
    // { name: "Hermes", url: "https://i.ibb.co/jL0gNjg/o-69.jpg" },
    // { name: "Hugo Boss", url: "https://i.ibb.co/RgY9GLG/o-70.jpg" },
    // { name: "Lancome", url: "https://i.ibb.co/Jkzsj7v/o-80.jpg" },
    // { name: "Burberry", url: "https://i.ibb.co/MRrJCgQ/o-104.jpg" },
];
