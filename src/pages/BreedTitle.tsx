import React from "react";
import { titleCase } from "../util/textUtil";

type BreedTitleType = {
  name: string;
}

export const BreedTitle = ({ name }: BreedTitleType) => {
  return (
    <h3 className="p-5">
      A random &#128054; {titleCase(name)} &#128054; has appeared &#x1f633;
    </h3>
  )
}

export default BreedTitle;