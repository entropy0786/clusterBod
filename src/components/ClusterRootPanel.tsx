import WeaponSetupPanel from "./WeaponSetupPanel";
import TargetSetupPanel from "./TargetSetupPanel";
import ClusterSummaryPanel from "./ClusterSummaryPanel";
import { Fragment } from "react";

function ClusterRootPanel() {
  return (
    <Fragment>
      <WeaponSetupPanel />
      <TargetSetupPanel />
      <ClusterSummaryPanel />
    </Fragment>
  );
}

export default ClusterRootPanel;
