import { FiletypeMd } from "react-bootstrap-icons";
import {
  EditorArea,
  EditorDownload,
  EditorHeader,
  EditorWrapper,
} from "../styled/Editor.styled";
import { saveAs } from "file-saver";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";

const Editor = (props) => {
  const handleChange = (value) => {
    props.setMarkdown(value);
  };
  const handleDownload = () => {
    const blob = new Blob([props.markdown], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "README.md");
  };

  console.log(props.markdown);

  return (
    <EditorWrapper>
      <EditorArea>
        <CodeMirror
          height="500"
          theme={tokyoNight}
          value={props.markdown}
          onChange={handleChange}
          extensions={[
            markdown({
              defaultCodeLanguage: markdownLanguage,
              codeLanguages: languages,
            }),
          ]}
        />
      </EditorArea>
      <EditorHeader>
        <EditorDownload onClick={handleDownload}>
          <FiletypeMd size="1.5rem" />
          Download
        </EditorDownload>
      </EditorHeader>
    </EditorWrapper>
  );
};

export default Editor;
