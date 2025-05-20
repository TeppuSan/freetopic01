"use client";

import { Editor } from "@monaco-editor/react";

import "./Monaco.css";
import { useEffect,useRef } from "react";
useEffect
useRef

Editor





export default function MonacoEditor(){
    const editorRef=useRef<any>(null);
 
  function handleEditorDidMount(editor: any) {
    editorRef.current = editor;
  }

  function handleClick() {
    if (editorRef.current) {
      const code = editorRef.current.getValue(); // エディタの内容を取得
      window.alert(code);
    }
  }
    
    return(
        <div className="box">
        <div className="Editor" id="Edit">
            <Editor
            height="500px"
            defaultLanguage="html"
            defaultValue='console.log("Helloweed")'
            theme="vs-dark"
            onMount={handleEditorDidMount}

            />
        </div>
        <button onClick=
        {handleClick}
        >これはボタンです</button>
        
        <div className="result">
            <Editor
            height="500px"
            defaultLanguage="javascript"
            defaultValue='console.log("Helloword")'
            theme="vs-dark"
            />
        </div>
        </div>
    )
}