export class WeaponObject {
  constructor(
    shortLabel: string,
    projectileName: string,
    defaultSalvoSize: number,
    presetSalvoSizes: number[],
    clusterSize: number
  ) {
    this.shortLabel = shortLabel;
    this.projectileName = projectileName;
    this.defaultSalvoSize = defaultSalvoSize;
    this.presetSalvoSizes = presetSalvoSizes;
    this.clusterSize = clusterSize;
  }

  shortLabel: string; // label of the weapon
  projectileName: string; // what the projectiles are called, singular.
  defaultSalvoSize: number;
  presetSalvoSizes: number[];
  clusterSize: number;
}

export class Weapons {
  lrm = () => new WeaponObject("LRM", "Missile", 10, [5, 10, 15, 20], 5);
  srm = () => new WeaponObject("SRM", "Missile", 4, [2, 4, 6, 8], 1);
  mml = () => new WeaponObject("MML", "Missile", 5, [3, 5, 7, 9], 1);
  lbx = () => new WeaponObject("LB-X", "Pellet", 10, [2, 5, 10, 20], 1);
  rac = () => new WeaponObject("Rotary AC", "Pellet", 5, [2, 5, 10, 20], 1);
}