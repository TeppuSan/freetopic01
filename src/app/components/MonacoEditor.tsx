"use client";

import { Editor } from "@monaco-editor/react";
import type * as monaco from "monaco-editor";


import "./Monaco.css";
import { useRef, useState, useCallback } from "react";

// デバウンス関数
function debounce(func: Function, delay: number) {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

export default function MonacoEditor() {
  // エディタ本体のDOM参照用ref。高さを直接操作するために使う。
  const editorDivRef = useRef<HTMLDivElement>(null);


  const themes = ["vs-dark", "light", "hc-black"];
  const [editorTheme, setEditorTheme] = useState(themes[0]);

  const changetheme = () => {
    setEditorTheme(prev => {
      const currentIndex = themes.indexOf(prev);
      const nextIndex = (currentIndex + 1) % themes.length;
      return themes[nextIndex];
    });
  };

  function generateTimestamp() {
    return new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  }


  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  //useStateの基本構文
  const [code, setCode] = useState(//UseStateにて変更反映
    `<main>これはサンプルです</main>`);


  // デバウンス付きのchangeCode
  const debouncedChangeCode = useCallback(
    debounce((value: string | undefined) => {
      setCode(value || "");
    }, 300),
    []
  );


  const [csscode, setcssCode] = useState(//UseStateにて変更反映
    `main{
background-color:silver;
}`);


  // デバウンス付きのchangecssCode
  const debouncedChangecssCode = useCallback(
    debounce((value: string | undefined) => {
      setcssCode(value || "");
    }, 300),
    []
  );


  const [jscode, setjsCode] = useState(//UseStateにて変更反映
    `console.log("hello")`);

  //ここで入力の待機時間を設定
  // デバウンス付きのchangejsCode
  const debouncedChangejsCode = useCallback(
    debounce((value: string | undefined) => {
      setjsCode(value || "");
    }, 400),
    []
  );

  // //ここで変更を反映
  // const changecssCode = (value: string | undefined) => {
  //   setcssCode(value || "");
  // };
  // const changeCode = (value: string | undefined) => {
  //   setCode(value || "");
  // };
  // const changejsCode = (value: string | undefined) => {
  //   setjsCode(value || "");
  // };


  function handleEditorDidMount(editor: monaco.editor.IStandaloneCodeEditor) {
    editorRef.current = editor;
  }


  function htmldownload() {
    if (editorRef.current) {
      const timestamp = generateTimestamp();
      //const blob = new Blob(データ, ファイルタイプ);
      const blob = new Blob([code], { type: "text/plain" });
      const dl = URL.createObjectURL(blob);//ダウンロードリンクの作成
      const a = document.createElement("a");
      a.href = dl;
      a.download = `index_${timestamp}.html`;//ここでダウンロードの指定
      a.click()
      URL.revokeObjectURL(dl);
    }
  }
  //上の使いまわし
  function cssdownload() {
    const timestamp = generateTimestamp();
    if (editorRef.current) {
      //const blob = new Blob(データ, ファイルタイプ);
      const blob = new Blob([csscode], { type: "text/plain" });
      const dl = URL.createObjectURL(blob);//ダウンロードリンクの作成
      const a = document.createElement("a");
      a.href = dl;
      a.download = `style_${timestamp}.css`;//ここでダウンロードの指定
      a.click();
      URL.revokeObjectURL(dl);
    }
  }
  function jsdownload() {
    const timestamp = generateTimestamp();
    if (editorRef.current) {
      //const blob = new Blob(データ, ファイルタイプ);
      const blob = new Blob([jscode], { type: "text/plain" });
      const dl = URL.createObjectURL(blob);//ダウンロードリンクの作成
      const a = document.createElement("a");
      a.href = dl;
      a.download = `script_${timestamp}.js`;//ここでダウンロードの指定
      a.click();
      URL.revokeObjectURL(dl);
    }
  }

  function alldownload() {
    const timestamp = generateTimestamp();
    if (editorRef.current) {
      //const blob = new Blob(データ, ファイルタイプ);
      const blob = new Blob([`<html>
  <head>
    <style>
      ${csscode}
    </style>
  </head>
  <body>
    ${code}
  </body>
  <script>
    ${jscode}
  </script>
</html>`], { type: "text/plain" });
      const dl = URL.createObjectURL(blob);//ダウンロードリンクの作成
      const a = document.createElement("a");
      a.href = dl;
      a.download = `all_${timestamp}.html`;//ここでダウンロードの指定
      a.click();
      URL.revokeObjectURL(dl);
    }
  }


  return (
    <div className="box">
      <div className="Editorbox">
        <div
          ref={editorDivRef} // エディタ本体のDOM参照
          className="Editor"
          id="Edit"
        >

          <div className="Name">
            <div className="edithead">
              <p className="html">html</p>
              <button onClick=
                {htmldownload}
                title="htmlファイルのダウンロードをします"
              >download
              </button>
              <button onClick=
                {alldownload}
                title="html,css,jsを統合したファイルのダウンロードをします"
              >alldownload
              </button>
            </div>
            <Editor
              height="100%"
              defaultLanguage="html"
              value={code}
              onChange={debouncedChangeCode}//デバウンス付きに変更
              theme={editorTheme}
              onMount={handleEditorDidMount}//読み込まれた際に実行される
            />
          </div>

          <div className="Name">
            <div className="edithead">
              <p className="css">css</p>
              <button onClick=
                {cssdownload}
                title="cssファイルのダウンロードをします"
              >download
              </button>
            </div>
            <Editor
              height="100%"
              defaultLanguage="css"
              value={csscode}
              onChange={debouncedChangecssCode}//デバウンス付きに変更
              theme={editorTheme}
              onMount={handleEditorDidMount}//読み込まれた際に実行される
            />
          </div>

          <div className="Name">
            <div className="edithead">
              <p className="js">js</p>
              <button onClick=
                {jsdownload}
                title="javascriptファイルのダウンロードをします"
              >download
              </button>
              <div className="editor-controls">
                <button
                  title="エディタの高さを最大化します"
                  className="open" onClick={() => {
                    if (editorDivRef.current) {
                      // 99vhにする（最大化）
                      editorDivRef.current.style.height = "100vh";
                    }
                  }}>▼

                </button>
                <button
                  title="エディタの高さを最小化します"
                  className="close" onClick={() => {
                    if (editorDivRef.current) {
                      editorDivRef.current.style.height = "25px";
                    }
                  }}>▲

                </button>
                <button
                  className="theme-button"
                  onClick={changetheme}
                  title="editorのテーマを変更できます"
                >{editorTheme}
                </button>
              </div>
            </div>
            <Editor
              height="100%"
              defaultLanguage="javascript"
              value={jscode}
              onChange={debouncedChangejsCode}//デバウンス付きに変更
              theme={editorTheme}
              onMount={handleEditorDidMount}//読み込まれた際に実行される
            />
          </div>

        </div>
      </div>
      <div className="result">
        <iframe
          height="100%"
          width="100%"
          srcDoc={`<html><head><style>${csscode}</style></head><body>${code}</body><script>${jscode}</script></html>`}//srcDocだと埋め込むhtmlを直接入れれる
          title="now"
        // sandbox=""//内容の制限
        />
      </div>
    </div>
  )
}