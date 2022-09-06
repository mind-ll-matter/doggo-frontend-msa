import React from "react";
import { titleCase } from "../util/textUtil";
import "./Dashboard.css"

type BreedTitleType = {
  name: string;
}

export const BreedTitle = ({ name }: BreedTitleType) => {
  return (
    <h3 className="breedTitle">
      A random <br/>&#128054; {titleCase(name)} &#128054;<br/>has appeared!</h3>
  )
}

export default BreedTitle;