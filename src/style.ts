import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  grid-template-columns: 20rem 1fr 20rem;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  height: 100vh;
  grid-gap: 10rem;
`;

export const Header = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderRight = styled.div``;

export const Main = styled.main`
  grid-area: main;
`;

export const Nav = styled.nav`
  grid-area: nav;
`;

export const Aside = styled.aside`
  grid-area: aside;
`;

export const Footer = styled.footer`
  grid-area: footer;
`;
