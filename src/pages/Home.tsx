import React from "react";
import { Intro } from "../components/Intro";
import { CoffeeList } from "../components/CoffeeList";
import { useContext } from "react";
import { Context } from "../App";

interface ICoffee {
  name: string;
  desc: string;
  type: typeCoffee;
  tags: string[];
}

  type typeCoffee = "Coffee_Americano" | "Coffee_Arabe" | "Coffee_Capuccino" | "Coffee_Chocolate_Quente" | "Coffee_Com_Leite" | "Coffee_Cubano" | "Coffee_Expresso_Cremoso" | "Coffee_Expresso" | "Coffee_Gelado"| "Coffee_Havaiano" | "Coffee_Irlandes" | "Coffee_Latte" | "Coffee_Macchiato" |"Coffee_Mochaccino"


const coffeeList: ICoffee[] = [
  {
    name: "Expresso Tradicional",
    desc: "O tradicional café feito com água quente e grãos moídos",
    type: "Coffee_Expresso",
    tags: ["Tradicional"],
  },
  {
    name: "Expresso Americano",
    desc: "Expresso diluído, menos intenso que o tradicional",
    type: "Coffee_Americano",
    tags: ["Tradicional"],
  },
  {
    name: "Expresso Cremoso",
    desc: "Café expresso tradicional com espuma cremosa",
    type: "Coffee_Expresso_Cremoso",
    tags: ["Tradicional"],
  },
  {
    name: "Expresso Gelado",
    desc: "Bebida preparada com café expresso e cubos de gelo",
    type: "Coffee_Gelado",
    tags: ["Tradicional", "Gelado"],
  },
  {
    name: "Café com leite",
    desc: "Meio a meio de expresso tradicional com leite vaporizado",
    type: "Coffee_Com_Leite",
    tags: ["Tradicional", "Com leite"],
  },
  {
    name: "Latte",
    desc: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    type: "Coffee_Latte",
    tags: ["Tradicional", "Com leite"],
  },
  {
    name: "Capuccino",
    desc: "Bebida com canela feita de doses iguais de café, leite e espuma",
    type: "Coffee_Capuccino",
    tags: ["Tradicional", "Com leite"],
  },
  {
    name: "Macchiato",
    desc: "Café expresso misturado com um pouco de leite quente e espuma",
    type: "Coffee_Macchiato",
    tags: ["Tradicional", "Com leite"],
  },
  {
    name: "Mocaccino",
    desc: "Café expresso com calda de chocolate, pouco leite e espuma",
    type: "Coffee_Mochaccino",
    tags: ["Tradicional", "Com leite"],
  },
  {
    name: "Chocolate Quente",
    desc: "Bebida feita com chocolate dissolvido no leite quente e café",
    type: "Coffee_Chocolate_Quente",
    tags: ["Especial", "Com leite"],
  },
  {
    name: "Cubano",
    desc: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    type: "Coffee_Cubano",
    tags: ["Especial", "Alcoólico", "Gelado"],
  },
  {
    name: "Havaiano",
    desc: "Bebida adocicada preparada com café e leite de coco",
    type: "Coffee_Havaiano",
    tags: ["Especial"],
  },
  {
    name: "Árabe",
    desc: "Bebida preparada com grãos de café árabe e especiarias",
    type: "Coffee_Arabe",
    tags: ["Especial"],
  },
  {
    name: "Irlandês",
    desc: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    type: "Coffee_Irlandes",
    tags: ["Especial", "Alcoólico"],
  },
];

export function Home() {
  return (
    <div className="bg-background min-h-screen">
      <div className="py-20 mx-[12%]">
        <Intro />
        <div>
          <h1 className="text-[32px] text-base-subtitle font-extrabold mt-20">
            Nossos cafés
          </h1>
          <CoffeeList coffeeList={coffeeList} />
        </div>
      </div>
    </div>
  );
}
