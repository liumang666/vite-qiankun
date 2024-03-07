import { useMatches } from "react-router-dom";

const BreadCrumbs = () => {
  let matches = useMatches();
  console.log(matches);
  let crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match: any) => Boolean(match.handle?.crumb))
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match: any) => {
      console.log(match);
      return match.handle.crumb(match.data);
    });
  return (
    <ol>
      {crumbs.map((crumb, index) => (
        <li key={index}>{crumb}</li>
      ))}
    </ol>
  );
};
export default BreadCrumbs;
