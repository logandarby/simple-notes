import "./SearchBar.scss";
import Input, { InputProps } from "../../components/Input";

export interface SearchBarProps extends InputProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({ searchQuery, setSearchQuery, ...props }: SearchBarProps) {
  return (
    <div className={`SearchBar ${props.className}`}>
      <img className="SearchBar__Icon" src="searchIcon.svg" alt="" />
      <Input
        {...props}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.currentTarget.value)}
        placeholder="search for notes"
        className={`SearchBar__Input`}
      />
    </div>
  );
}

export default SearchBar;
