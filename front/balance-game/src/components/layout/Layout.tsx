import tw from "twin.macro";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <MobileContainer>{children}</MobileContainer>
    </Container>
  );
};

const Container = tw.div`flex justify-center w-full`;
const MobileContainer = tw.div`max-w-[500px] overflow-hidden w-full min-h-screen p-7 relative`;

export default Layout;
