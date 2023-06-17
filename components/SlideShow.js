import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "500px",
  borderRadius: "1.1rem",
  border: "1px solid #BEC3C7",
};

const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
};

const slideImages = [
  {
    url: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/343446617_612696297424692_5203837334127317068_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=2arPlty8MMEAX_E7Xse&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBc25Lm7Isrvrny0GayRE7-h-zySrDegTpfUrYdJcp1iQ&oe=6490ABBC",
    caption: "Slide 1",
  },
  {
    url: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/307582336_625741105573016_1732719262551639524_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=19026a&_nc_ohc=mXBm-9ffsuEAX9t8Y-D&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfDgx17QQmPQ8QSBw7i18Vi7Jk9GTh94c4w2u4qj5SFTqA&oe=648F960C",
    caption: "Slide 2",
  },
  {
    url: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/344344333_183240687944006_4719060222219809450_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=bMZDK_zxO_sAX8AmHu1&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfC0JnFxkcTpVHou9L-IFNUlsup2DrpQlOSUv6-J3-wGKA&oe=649016D7",
    caption: "Slide 3",
  },
  {
    url: "/slide6.jpg",
    caption: "Slide 6",
  },
];

export default function SlideShow() {
  return (
    <div className="slide-container shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-2xl">
      <Slide className="rounded-xl">
        {slideImages.map((slideImage, index) => (
          <div key={index} className="">
            <div
              className="object-cover"
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
