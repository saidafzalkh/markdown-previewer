import { FiletypeMd } from "react-bootstrap-icons";
import { EditorArea, EditorDownload, EditorHeader, EditorWrapper } from "../styled/Editor.styled";
import { saveAs } from "file-saver";


const Editor = (props) => {

  const handleChange = (e) => {
    props.setMarkdown(e.target.value)
  }
  const handleDownload = () => {
    const blob = new Blob([props.markdown], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "README.md");
  }

  return (
    <EditorWrapper>
      <EditorArea
        value={props.markdown}
        onChange={handleChange}
        placeholder="Enter You Markdown Here"
      ></EditorArea>
      <EditorHeader>
        <EditorDownload onClick={handleDownload}>
          <FiletypeMd size="1.5rem" />
          Download
        </EditorDownload>
      </EditorHeader>
    </EditorWrapper>
  );
}

export default Editor;