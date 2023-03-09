import LayoutHeader from "./LayoutHeader";
import LayoutSideNav from "./LayoutSideNav";
import LayoutFooter from "./LayoutFooter";

const Layout = (props) => {
  const userInfo = {};

  return (
    <div className="admin-layout-container">
      <LayoutHeader userInfo={userInfo} />
      <LayoutSideNav userInfo={userInfo} />
      {props.children(userInfo)}
      <LayoutFooter />
    </div>
  );
};

export default Layout;
