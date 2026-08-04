import HeaderList from "./components/HeaderList";
import HeaderListItem from "./components/HeaderListItem";
import Logo from "../logo/Index";
import HeadersLinks from "./components/HeadersLinks";
import HeaderFormFilters from "./components/HeaderFormFilters";
import HeaderActions from "./components/HeaderActions";

function Header() {
  return (
    <header>
      <HeaderList>
        <HeaderListItem>
          <Logo src="/Logo-azul.png" />
        </HeaderListItem>
        <HeaderListItem>
          <HeadersLinks />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderFormFilters />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderActions />
        </HeaderListItem>
      </HeaderList>
    </header>
  );
}

export default Header;
