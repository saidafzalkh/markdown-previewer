import hljs from "highlight.js";
import { useEffect, useState } from "react";
import { Container } from "./styled/Container.styled";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import "../node_modules/github-markdown-css/github-markdown.css";
import "../node_modules/highlight.js/styles/atom-one-dark.css";

const App = () => {
  const [markdown, setMarkdown] = useState(() => {
    const saved = localStorage.getItem("savedMarkdown");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  useEffect(
    function () {
      document.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el);
      });
      localStorage.setItem("savedMarkdown", JSON.stringify(markdown));
    },
    [markdown]
  );
  console.log(markdown);
  return (
    <Container>
      <Editor setMarkdown={setMarkdown} markdown={markdown} />
      <Previewer markdown={markdown} />
    </Container>
  );
};

export default App;
