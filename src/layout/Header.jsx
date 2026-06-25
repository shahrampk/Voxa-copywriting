import Searchbar from "../features/search/Searchbar";
import { PrimaryBtn, SecondaryBtn } from "../shared/components/buttons/Buttons";

const Header = () => {
  return (
    <div className="flex justify-between">
      <Searchbar />
      <div>
        <SecondaryBtn value="Upgrade to pro" />
      </div>
    </div>
  );
};

export default Header;
