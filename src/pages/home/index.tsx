import React, {FC, ReactElement} from 'react'
import Carousel from '../../components/carousel'
import imgPath from '../../assets/images/png/a1.png'
import sImgPath from '../../assets/images/png/second.png'
import yImgPath from '../../assets/images/png/yoda.png'
import './style.scss'
import Card from "../../components/card";

const index: FC = (): ReactElement => {
   const cardList= [
       {
           title:"What is Star Wars ?",
           summary:` Star Wars is a science fiction media franchise created by George Lucas. It includes a series of
                        films, television shows, and other works set in a galaxy far, far away and featuring a diverse
                        cast
                        of characters, including humans, droids, and various alien species. The franchise centers around
                        a
                        group of rebels fighting against an evil empire, led by the Sith Lord Darth Vader, and includes
                        themes of redemption, family, and the struggle between good and evil. The original trilogy,
                        consisting of the films "Star Wars: A New Hope," "The Empire Strikes Back," and "Return of the
                        Jedi," was released between 1977 and 1983 and became a cultural phenomenon, influencing many
                        aspects
                        of popular culture and inspiring numerous spin-off works. The franchise has continued with
                        numerous
                        prequel, sequel, and anthology films, as well as television shows, video games, and other media.`,
           imgUrl:imgPath,
           imgDesc:"star wars",
           isTarget:true
       },
        {
            title:"who is dart wader ?",
            summary:`A dart wader is a type of wading bird that belongs to the family Scolopacidae. These birds are
            known for their long, thin legs and sharp, pointed bills, which they use to wade through shallow
            water in search of food. Dart waders are typically found near coastal areas, marshes, and
            wetlands, and they feed on a variety of small aquatic creatures, such as insects, crustaceans,
            and mollusks. They are often seen in large flocks, and they are known for their distinctive,
            high-pitched calls. Dart waders are important indicators of the health of wetland ecosystems,
            and they are often used in ecological research and conservation efforts.`,
            imgUrl:sImgPath,
            imgDesc:"dart wader",
        }
       ,
       {
           title:"who is yoda ?",
           summary:`Yoda is a fictional character in the Star Wars franchise, created by George Lucas. He is a
                        small, green, humanoid alien with pointed ears and a distinctive facial appearance. Yoda is a
                        highly skilled Jedi Master, known for his wisdom, knowledge of the Force, and combat abilities.
                        He has played a prominent role in the Star Wars series, serving as a mentor to many of the main
                        characters and leading the Jedi Order during times of crisis. Yoda is known for his use of
                        unconventional grammar and syntax, often speaking in incomplete sentences and using "the Force"
                        as a verb. Despite his small stature, Yoda is a formidable opponent, and he is considered one of
                        the most powerful and influential characters in the Star Wars universe.`,
           imgUrl:yImgPath,
           imgDesc:"yoda",
       }
    ]
    return (
        <div>
            <Carousel/>
            {
                cardList.map((item,index)=><Card key={index} isReverse={index%2!==0?true:false} {...item}/>
                )
            }
        </div>
    )
}

export default index
