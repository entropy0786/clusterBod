import { ChangeEvent, useState } from "react";
import { WeaponObject } from "../utils/WeaponData";

// This is the individual list object we'll be showing.
function WeaponListObject(weaponObject: WeaponObject) {
  // Constants and defaults
  const [shortLabel] = useState(weaponObject.shortLabel);
  const [defaultSalvoSize] = useState(weaponObject.defaultSalvoSize);
  const [presetSalvoSizes] = useState(weaponObject.presetSalvoSizes);
  // ID- probably not the best since you can get duplicate keys
  const [id] = useState(shortLabel);

  const [salvoSize, setSalvoSize] = useState(defaultSalvoSize);

  ///////////////
  // Event Handlers
  ///////////////
  // user changes the value on the salvo
  function handleSalvoButtonSelected(value: number) {
    setSalvoSize(value);
  }

  // when the salvo number has changed!
  function handleSalvoSizeChange(event: ChangeEvent, value: number) {
    console.log(event);
    setSalvoSize(value);
  }

  ///////////////
  // Subcomponent Builders
  ///////////////
  function buildWeaponLabel(sLabel: string, salvoSize: number) {
    var fullLabel = sLabel + "-" + salvoSize;
    return (
      <label
        className="weaponLabel"
        style={{
          fontSize: "larger",
          width: "5em",
        }}
      >
        {fullLabel}
      </label>
    );
  }

  function buildSalvoSizeInput(salvoSize: number) {
    return (
      <input
        className="salvoSizeInput"
        type="number"
        value={salvoSize}
        onChange={(e) => handleSalvoSizeChange(e, e.target.valueAsNumber)}
        style={{
          width: "5em",
        }}
      ></input>
    );
  }

  function buildSalvoButton(salvo: number) {
    const [buttonValue] = useState(salvo);
    return (
      <button
        key={salvo.toString()}
        onClick={() => handleSalvoButtonSelected(buttonValue)}
        style={{
          minWidth: "2em",
          backgroundColor: salvoSize == salvo ? "yellow" : "lightgray",
        }}
      >
        {buttonValue.toString()}
      </button>
    );
  }

  function buildSalvoButtons(salvos: number[]) {
    return salvos.map((salvo) => buildSalvoButton(salvo));
  }
  ///////////////
  ///////////////

  // Compose the list item
  return (
    <div
      className="weaponListObject"
      style={{
        minHeight: "2em",
        fontSize: "medium",
      }}
    >
      {buildWeaponLabel(shortLabel, salvoSize)}
      {buildSalvoSizeInput(salvoSize)}
      {buildSalvoButtons(presetSalvoSizes)}
    </div>
  );
}

export default WeaponListObject;
