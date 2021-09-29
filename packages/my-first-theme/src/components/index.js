import React from "react";
import { connect, Global, css , styled } from "frontity"
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";
import Page from "./page"

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
          <Global
        styles={css`
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
            a{
                color:black;
            }
          }
        `}
      />   <Header>
      <h1>Frontity Workshop</h1>
      <p>Current URL: {state.router.link}</p>
      <nav>
        <Link link="/">Home</Link>
        <br />
        <Link link="/page/2">More posts</Link>
        <br />
        <Link link="/about-us">About Us</Link>d
      </nav>
      </Header>
      <main>
        <Switch>
          <List when={data.isArchive}>This is a list</List>
          <Post when={data.isPost} />
          <Page when={data.isPage} />
        </Switch>
      </main>
    </>
  );
};

export default connect(Root);
const Header = styled.header`
   background-color: #e5edee;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: maroon;

  h1 {
    color: #4a4a4a;
  }
`