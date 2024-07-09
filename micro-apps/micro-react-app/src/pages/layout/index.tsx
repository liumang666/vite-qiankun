import { useEffect } from "react";
import { Outlet, useNavigation, Form, NavLink } from "react-router-dom";
import BreadCrumbs from "../breadcrumbs";

const Layout = () => {
  const navigation = useNavigation();

  useEffect(() => {
    console.log(navigation.state);
  }, [navigation]);

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink
                to={`/other`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                other
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink to={`/about`}>about</NavLink>
            </li>
            <li>
              <NavLink to={`/contacts/1`}>Your name</NavLink>
            </li>
            <li>
              <NavLink to={`/contacts/2`}>Your Friend</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <BreadCrumbs />
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
