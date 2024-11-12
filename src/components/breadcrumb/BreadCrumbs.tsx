import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/BreadCrumbs.scss";

const BreadCrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const routeNames: { [key: string]: string } = {
    board: "Board",
    ads: "Ads",
    stores: "Stores",
    charity: "Charity",
    service: "Services",
    "services-addresses": "Service Addresses",
    "what-we-repair": "What We Repair",
    phones: "Phones",
    animals: "Animals",
    notebooks: "Notebooks",
    techniques: "Techniques",
    "home-and-yard": "Home & Yard",
    toys: "Toys",
    auth: "Authentication",
    "login-with-pass": "Login with Password",
    "restore-password": "Restore Password",
    "message-sent": "Message Sent",
    "login-form": "Login Form",
    "confirm-code": "Confirm Code"
  };

  return (
    <nav aria-label='breadcrumb'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item'>
          <Link to='/'>Board</Link>
        </li>
        {pathnames.map((path, index) => {
          const routePath = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const name = routeNames[path] || path;

          return isLast ? (
            <li
              key={path}
              className='breadcrumb-item active'
              aria-current='page'
            >
              {name}
            </li>
          ) : (
            <li key={path} className='breadcrumb-item'>
              <Link to={routePath}>{name}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
