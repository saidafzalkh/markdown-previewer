import styled from "styled-components";

export const EditorWrapper = styled.section`
  width: 40vw;
  background-color: #222;
  color: #fff;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`

export const EditorArea = styled.textarea`
  box-sizing: border-box;
  display: inline-block;
  resize: none;
  outline: none;
  border: none;
  height: 90%;
  margin: 0;
  padding: 2rem;
  background-color: transparent;
  color: #fff;
`

export const EditorHeader = styled.header`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 2rem;
`

export const EditorDownload = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  cursor: pointer;
`