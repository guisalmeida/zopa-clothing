import { Key } from "react";
import CategoryItem from "../directoryItem";
import { DirectoryContainer } from "./styled";

const categories = [
  {
    "id": 1,
    "title": "vestidos",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
    "route": "shop/vestidos"
  },
  {
    "id": 2,
    "title": "blusas",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
    "route": "shop/blusas"
  },
  {
    "id": 3,
    "title": "calças",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
    "route": "shop/calças"
  },
  {
    "id": 4,
    "title": "casacos",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
    "route": "shop/casacos"
  },
  {
    "id": 5,
    "title": "acessórios",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
    "route": "shop/acessórios"
  }
]

//@ts-ignore
const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category: { id: Key }) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </DirectoryContainer>
  );
};

export default Directory;
