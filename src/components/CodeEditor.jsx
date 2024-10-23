import { useRef, useState, useEffect } from "react";
import { Editor } from "@monaco-editor/react";
import Output from "./Output";

export default function CodeEditor({ task, onClick }) {
  const editorRef = useRef();
  const [value, setValue] = useState(task.code);

  useEffect(() => {
    setValue(task.code);
  }, [task]);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const validate = () => {
    const isCorrect = task.validation(value);
    onClick(isCorrect);
  };

  return (
    <>
      <div className="task">
        <h1>Задание {task.id}</h1>
        <p>{task.description}</p>
      </div>
      <div>
        <div>
          <Editor
            height="50vh"
            width="50vw"
            theme="vs-dark"
            language="javascript"
            defaultValue={task.code}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </div>
        <Output validate={validate} editorRef={editorRef} task={task} />
      </div>
    </>
  );
}
