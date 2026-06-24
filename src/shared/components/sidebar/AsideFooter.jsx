import { Settings } from "lucide-react";
import { NavLink } from "react-router";
import { AsideProfileBox } from "../../../features/UserProfile/components";

const AsideFooter = () => {
  return (
    <div id="account-setting" className="flex flex-col gap-3">
      <div>
        <NavLink
          to="/settings"
          className="text-md px-3 py-2 flex items-center gap-2 hover:font-semibold rounded-lg transition-colors duration-200"
        >
          <Settings /> Setting
        </NavLink>
      </div>
      <AsideProfileBox />
    </div>
  );
};

export default AsideFooter;
