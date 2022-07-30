import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  const [upDateAnswer, setUpdatedAnswer] = useState([])

  function handleAddQuestion (newQuestion) {
    setQuestions([...questions, newQuestion])
  }

  function handleUpdateAnswer (newAnswer) {
    const upDatedQuestions = questions.map(answer => {
      if(answer.id === newAnswer.id) {
        return newAnswer
      } else {
        return answer
      }
    })
    setUpdatedAnswer(upDatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion}/> : <QuestionList questions={questions} setQuestions={setQuestions} onChangeAnswer={handleUpdateAnswer}/>}
    </main>
  );
}

export default App;
