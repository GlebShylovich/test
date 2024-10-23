import { useState } from "react";
import { executeCode } from "../api";

export default function Output({ validate, editorRef }) {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
      validate(sourceCode);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="output">
      <h1>Output</h1>
      <button onClick={runCode}>Run Code</button>
      <div>
        {output && output.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </div>
  );
}
