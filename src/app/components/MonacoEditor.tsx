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
    //useStateの基本構文
    const [code,setCode]=useState(//UseStateにて変更反映
`<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <main>これはサンプルです</main>
    </body>
</html>`);

  const changeCode = (value: string | undefined) => {
    setCode(value || "");
  };
 
  function handleEditorDidMount(editor: any) {
    editorRef.current = editor;
  }

  function handleClick() {
    if (editorRef.current) {
      window.alert(code);
    }
  }
    
  function txtdownload() {
    if (editorRef.current) {
      //const blob = new Blob(データ, ファイルタイプ);
      const blob = new Blob([code],{type:"text/plain"});
      const dl = URL.createObjectURL(blob);//ダウンロードリンクの作成
      const a =document.createElement("a");
      a.href=dl;
      a.download="sample.txt";//ここでダウンロードの指定
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
                value={code}
                onChange={changeCode}//入力が変わるごとに実行
                theme="vs-dark"
                onMount={handleEditorDidMount}//読み込まれた際に実行される
                />
            </div>
            <div className="buttonbox">
                <button onClick=
                {handleClick}
                >これはalertボタンです
                </button>
                <button onClick=
                {txtdownload}
                >これはtxt保存ボタンです
                </button>
            </div>  
            <div className="result">
                <iframe
                height="500px"
                width="100%"
                srcDoc={code}//srcDocだと埋め込むhtmlを直接入れれる
                title="now"
                sandbox=""//内容の制限
                />
            </div>
        </div>
    )
}