import styled from "styled-components";

export const EditorWrapper = styled.section`
  width: 40vw;
  color: #fff;
  background-color: #1A1B26;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`

export const EditorArea = styled.div`
  box-sizing: border-box;
  display: inline-block;
  height: 630px;
  margin: 0;
  background-color: transparent;
  overflow-y: scroll;
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