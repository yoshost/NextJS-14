import { NavLink } from "./navbar-links";
import { NavSearch } from "./navbar-search";

export const Navbar = () => {
  console.log("This is navbar");
  return (
    <>
      <h1>This is navbar</h1>
      <NavLink></NavLink>
      <NavSearch></NavSearch>
    </>
  );
};
