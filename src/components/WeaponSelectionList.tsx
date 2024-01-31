import { WeaponObject } from "../utils/WeaponData";
import WeaponListObject from "./WeaponListObject";

import { MouseEvent, useState } from "react";

let weaponsList = [
  new WeaponObject("LRM", "Missile", 10, [5, 10, 15, 20], 5),
  new WeaponObject("SRM", "Missile", 4, [2, 4, 6, 8], 1),
  new WeaponObject("MML", "Missile", 5, [3, 5, 7, 9], 1),
  new WeaponObject("LB-X", "Pellet", 10, [2, 5, 10, 20], 1),
  new WeaponObject("RAC", "Pellet", 5, [2, 5, 10, 20], 1),
];

// a listgroup with a bunch of weaponConfigPanels, and it also keeps track of what's selected.
function WeaponSelectionList(/*props: Props*/) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  ////////
  // broadcast that this object was selected to parent
  function handleObjectSelection(me: MouseEvent, index: number) {
    console.log(me);
    console.log(">WeaponSelectionList, selected: " + index);
    if (index != selectedIndex) {
      setSelectedIndex(index);
    }
  }

  ////////

  function buildWeaponListObject(wo: WeaponObject, index: number) {
    var className =
      selectedIndex === index ? "list-group-item active" : "list-group-item";
    return (
      <li
        className={className}
        key={wo.shortLabel}
        onClick={(event) => handleObjectSelection(event, index)}
      >
        {WeaponListObject(wo)}
      </li>
    );
  }

  return (
    <ul
      className="list-group"
      style={{
        fontSize: "medium",
        width: "70%",
        minWidth: "500px",
      }}
    >
      {weaponsList.map((wo: WeaponObject, index: number) =>
        buildWeaponListObject(wo, index)
      )}
    </ul>
  );
}

export default WeaponSelectionList;
