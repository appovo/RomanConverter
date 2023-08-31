import ArabicConverter from "./ArabicConverter";
import RomanConverter from "./RomanConverter";
import { Layout } from "antd";

function App() {
  const { Header, Footer, Content } = Layout;
  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "orangered",
    height: "20vh",
    lineHeight: "30px",
  };
  const contentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    backgroundColor: "#108ee9",
    lineHeight: "20px",
    height: "60vh",
  };

  const footerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "20vh",
    color: "#fff",
    backgroundColor: "black",
  };
  return (
    <Layout>
      <Header style={headerStyle}>
        <h1>Arabic &lt;-&gt; Roman number converter</h1>
      </Header>
      <Content style={contentStyle}>
        <ArabicConverter />
        <RomanConverter />
      </Content>
      <Footer style={footerStyle}>
        <p>
          NOTE: The highest Arabic number that can be expressed in Roman
          numerals is actually 3,999. This is written as MMMCMXCIX. This is
          because the number 4,000 would have to be written as MMMM, which goes
          against the principle of not having four consecutive letters of the
          same type together. The lowest Arabic number is 1.
        </p>
      </Footer>
    </Layout>
  );
}

export default App;
