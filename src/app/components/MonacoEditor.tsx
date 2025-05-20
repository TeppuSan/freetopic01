"use client";

import { Editor } from "@monaco-editor/react";

import "./Monaco.css";
import { useEffect,useRef,useState } from "react";
useEffect
useRef
useState

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
    
  function txtdownload() {
    if (editorRef.current) {
      const code = editorRef.current.getValue(); // エディタの内容を取得
      const blob = new Blob([code],{type:"text/plain"});
      const dl = URL.createObjectURL(blob);
      const a =document.createElement("a");
      a.href=dl;
      a.download="sample.html";//ここでダウンロードの指定
      a.click();
      URL.revokeObjectURL(dl);
    }
  }
    
    return(
        <div className="box">
            <div className="Editor" id="Edit">
                <Editor
                height="500px"
                defaultLanguage="html"
                defaultValue=
{`<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <main>これはサンプルです</main>
    </body>
</html>`}
                value={code}
                onChange={}
                theme="vs-dark"
                onMount={handleEditorDidMount}

                />
            </div>
            <div className="buttonbox">
                <button onClick=
                {handleClick}
                >これはalertボタンです</button>
                <button onClick=
                {txtdownload}
                >これはtxt保存ボタンです</button>
            </div>  
            <div className="result">
                <iframe
                srcDoc={code}
                title="now"
                sandbox=""
                />
                {/* <Editor
                height="500px"
                defaultLanguage="javascript"
                defaultValue='console.log("Helloword")'
                theme="vs-dark"
                /> */}
            </div>
        </div>
    )
}