import { Page, Text, Link, Spacer } from "@geist-ui/react";

function App() {
  return (
    <>
      <Page size="large">
        <Page.Content>
          <Text type="secondary">Tools for the modern defi degenerate</Text>
          <ul>
            <li><Link color href='https://esd.oca.wtf'>emptyset</Link></li>
            <li><Link color href='https://dsd.oca.wtf'>dynamicset</Link></li>
          </ul>
        </Page.Content>
        <Page.Footer>
          <div style={{ textAlign: "right" }}>
            <Text small>
              Made by{" "}
              <Link color href="htts://twitter.com/kendricktrh">
                @kendricktrh
              </Link>
            </Text>
          </div>
          <Spacer y={1} />
        </Page.Footer>
      </Page>
    </>
  );
}

export default App;
