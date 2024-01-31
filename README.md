# Cluster BOD for React

This is a React App, all JS, to resolve cluster hits for BATTLETECH.

Proposed Component Tree

- ClusterRootPanel
  - WeaponSetupPanel // The top card to set up what you're firing
    - CurrentWeaponConfigPanel // Displayed on the right of the card. current config
  - WeaponSelectionList // list of weapon cards available
    - WeaponConfigPanel // }
    - WeaponConfigPanel // }-> Each is a different weapon.
    - WeaponConfigPanel // }
      - Weapon Button
      - Spinbox
      - Cluster Buttons
  - TargetSetupPanel // overview of what's being fired, and what the target is.
    - TargetingPanel // LHS, displays weapon and target dropdown.
    - ClusterHitPanel // Displays the results of the to hit roll and cluster rolls.
  - ClusterSummaryPanel // The overall panel where all of the cluster results are.
