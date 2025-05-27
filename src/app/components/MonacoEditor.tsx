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
`<main>これはサンプルです</main>`);

  const changeCode = (value: string | undefined) => {
    setCode(value || "");
  };


    const [csscode,setcssCode]=useState(//UseStateにて変更反映
`main{
background-color:silver;
}`);

  const changecssCode = (value: string | undefined) => {
    setcssCode(value || "");
  };


  
    const [jscode,setjsCode]=useState(//UseStateにて変更反映
    `console.log("hello")`);

  const changejsCode = (value: string | undefined) => {
    setjsCode(value || "");
  };

 
  function handleEditorDidMount(editor: any) {
    editorRef.current = editor;
  }

  function handleClick() {
    if (editorRef.current) {
      window.alert(code);
    }
  }
    
  function htmldownload() {
    if (editorRef.current) {
      //const blob = new Blob(データ, ファイルタイプ);
      const blob = new Blob([code],{type:"text/plain"});
      const dl = URL.createObjectURL(blob);//ダウンロードリンクの作成
      const a =document.createElement("a");
      a.href=dl;
      a.download="sample.html";//ここでダウンロードの指定
      a.click();
      URL.revokeObjectURL(dl);
    }
  }
  //上の使いまわし
  function cssdownload() {
    if (editorRef.current) {
      //const blob = new Blob(データ, ファイルタイプ);
      const blob = new Blob([csscode],{type:"text/plain"});
      const dl = URL.createObjectURL(blob);//ダウンロードリンクの作成
      const a =document.createElement("a");
      a.href=dl;
      a.download="sample.css";//ここでダウンロードの指定
      a.click();
      URL.revokeObjectURL(dl);
    }
  }
  function jsdownload() {
    if (editorRef.current) {
      //const blob = new Blob(データ, ファイルタイプ);
      const blob = new Blob([code],{type:"text/plain"});
      const dl = URL.createObjectURL(blob);//ダウンロードリンクの作成
      const a =document.createElement("a");
      a.href=dl;
      a.download="sample.js";//ここでダウンロードの指定
      a.click();
      URL.revokeObjectURL(dl);
    }
  }
    
    return(
        <div className="box">
          <div className="Editorbox">
            <div className="Editor" id="Edit">

              <div className="Name">
                <div className="edithead">
                  <p>html</p>
                  <button onClick=
                  {htmldownload}
                  >download
                  </button>
                </div>
                <Editor
                height="100%"
                defaultLanguage="html"
                value={code}
                onChange={changeCode}//入力が変わるごとに実行
                theme="vs-dark"
                onMount={handleEditorDidMount}//読み込まれた際に実行される
                />
              </div>
              
              <div className="Name">
                <div className="edithead">
                  <p>css</p>
                  <button onClick=
                  {cssdownload}
                  >download
                  </button>
                </div>
                <Editor
                height="100%"
                defaultLanguage="css"
                value={csscode}
                onChange={changecssCode}//入力が変わるごとに実行
                theme="vs-dark"
                onMount={handleEditorDidMount}//読み込まれた際に実行される
                />
              </div>
              
              <div className="Name">
                <div className="edithead">
                  <p>js</p>
                  <button onClick=
                  {jsdownload}
                  >download
                  </button>
                </div>
                <Editor
                height="100%"
                defaultLanguage="javascript"
                value={jscode}
                onChange={changejsCode}//入力が変わるごとに実行
                theme="vs-dark"
                onMount={handleEditorDidMount}//読み込まれた際に実行される
                />
              </div>

            </div>
          </div>
            <div className="result">
                <iframe
                height="500px"
                width="100%"
                srcDoc={`<html><head><style>${csscode}</style></head><body>${code}</body><script>${jscode}</script></html>`}//srcDocだと埋め込むhtmlを直接入れれる
                title="now"
                // sandbox=""//内容の制限
                />
            </div>
            {/* <div className="buttonbox">
                <button onClick=
                {handleClick}
                >これはalertボタンです
                </button>
                <button onClick=
                {txtdownload}
                >これはtxt保存ボタンです
                </button>
            </div> */}
        </div>
    )
}