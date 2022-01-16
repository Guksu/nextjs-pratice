import NavBar from "./NavBar";

interface Children {
  children: any;
}

function Layout({ children }: Children) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}

export default Layout;
