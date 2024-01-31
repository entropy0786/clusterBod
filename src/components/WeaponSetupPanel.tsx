// The the entire 'card' or panel that contains the list of available weapon configs and the currently configured one.
// This is what communicates with the other cards
import CurrentWeaponConfigPanel from "./CurrentWeaponConfigPanel";
import WeaponSelectionList from "./WeaponSelectionList";

function WeaponSetupPanel() {
  return (
    <>
      <CurrentWeaponConfigPanel />
      <WeaponSelectionList />
    </>
  );
}

export default WeaponSetupPanel;
