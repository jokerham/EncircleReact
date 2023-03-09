import LayoutHeader from "./LayoutHeader";
import LayoutMain from "./LayoutMain";
import LayoutSideNav from "./LayoutSideNav";

const Layout = () => {
  return (
    <div className="admin-layout-container">
      <LayoutHeader />
      <LayoutSideNav />
      <LayoutMain />
    </div>
  );
};
