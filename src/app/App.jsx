import { useState } from "react";
import CodeEditor from "../components/CodeEditor.jsx";
import { tasks } from "../tasks.js";
import "./App.scss";

export default function App() {
  const [currentTask, setCurrentTask] = useState(0);
  const [correct, setCorrect] = useState(null);

  function taskValidate(isCorrect) {
    setCorrect(isCorrect);
  }

  const handleNextTask = () => {
    const lastTask = tasks.length - 1;
    if (currentTask < lastTask) {
      setCurrentTask(currentTask + 1);
      setCorrect(null);
    } else {
      setCurrentTask(0);
      alert(
        "Ура! Ты молодец! Практикум пройден, ты всегда к нему можешь вернуться и пройти еще раз"
      );
    }
  };

  return (
    <>
      <CodeEditor task={tasks[currentTask]} onClick={taskValidate} />
      {correct === null ? (
        <p>Напиши и проверь свой код</p>
      ) : correct ? (
        <>
          <p>
            Ура! Мы получили верный результат. Можешь приступать к следующему
            заданию.
          </p>
          <button onClick={handleNextTask}>Next Task</button>
        </>
      ) : (
        <p>
          К сожалению ответ не верный. Прочти еще раз внимательно задание, и
          попробуй снова.
        </p>
      )}
    </>
  );
}
