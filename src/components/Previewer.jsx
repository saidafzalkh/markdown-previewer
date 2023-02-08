import { marked } from "marked";
import { PreviewerWrapper } from "../styled/Previewer.styled";


const Previewer = (props) => {
  marked.use(
    { breaks: true }
  )
  return (
    <PreviewerWrapper
      className="markdown-body"
      dangerouslySetInnerHTML={{
        '__html': marked.parse(props.markdown) || `<h1>Hello There 👋</h1>
      <p>
        Here You can write your README.md file with preview and download
      </p>
      <h4>Features</h4>
      <ul>
        <li>All your text will be saved on local storage</li>
        <li>Preview style similar with github markdown</li>
        <li>Support auto-detecting and highlighting programming languages</li>
      </ul>` }}
    >
    </PreviewerWrapper>
  );
}

export default Previewer;