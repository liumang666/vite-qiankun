import { useEffect } from "react";
import { Outlet, useNavigation, Form, NavLink } from "react-router-dom";

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
                to={`/`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                主应用-home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/other`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                主应用-other
              </NavLink>
            </li>
            <li>
              <NavLink to={`/about`}> 主应用-about</NavLink>
            </li>
            <li>
              <NavLink to={`/contacts/1`}>主应用-contacts</NavLink>
            </li>
            <li>
              <NavLink to={`/microReactApp`}>微应用-microReactApp</NavLink>
            </li>
            <li>
              <NavLink to={`/microVueApp`}>微应用-microVueApp</NavLink>
            </li>
            <li>
              <NavLink to={`/micro-test`}>微应用-microTestApp</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
