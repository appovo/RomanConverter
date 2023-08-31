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
  const noteDigits = {
    color: "orange",
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
          numerals is actually <span style={noteDigits}>3,999</span>. This is
          written as <span style={noteDigits}>MMMCMXCIX</span>. This is because
          the number <span style={noteDigits}>4,000</span> would have to be
          written as <span style={noteDigits}>MMMM</span>, which goes against
          the principle of not having four consecutive letters of the same type
          together. The lowest Arabic number is{" "}
          <span style={noteDigits}>1</span>.
        </p>
      </Footer>
    </Layout>
  );
}

export default App;
