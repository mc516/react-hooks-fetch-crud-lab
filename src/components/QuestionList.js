import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( {questions, setQuestions, onChangeAnswer } ) {

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(data => setQuestions(data))
  }, [])

  function handleDeleteQuestion(deletedQuestion) {
    const upDatedQuestions = questions.filter(q => q.id !== deletedQuestion.id)
    setQuestions(upDatedQuestions)
  }

  const questionsToDisplay = questions.filter(q => {return true})

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        { questionsToDisplay.map(question => {return <QuestionItem key={question.id} question={question} onDeleteQuestion={handleDeleteQuestion} onUpdateAnswer={onChangeAnswer}/> }) } 
        {/* /* display QuestionItem components here after fetching */}
      </ul>
    </section>
  );
}

export default QuestionList;
