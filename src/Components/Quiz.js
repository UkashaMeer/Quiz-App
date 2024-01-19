import React , {useState} from 'react'
import Question from './Question'
import questions from "../Data/QuestionData";


export default function Quiz() {
  const [currentQuestion , setCurrentQuestion] = useState(0);
  const [score , setScore] = useState(0);
  const [wrong , setWrong] = useState(0);
  const [themeMode , setThemeMode] = useState("bg-white");

  const HandleAnswerClick = (selectedAnswer) => {
    const currentQuestionData = questions[currentQuestion].correctAnswer;
      if (selectedAnswer === currentQuestionData) {
        setScore(score + 1);
      }else{
        setWrong(wrong + 1);
      }
  
    setCurrentQuestion(currentQuestion + 1);
  }
  const isLastQuestion = currentQuestion === questions.length;
  
  return (
    <main className='w-full h-[100vh] relative overflow-hidden bg-green-600 flex items-center justify-center'>
      <div className={`w-[400px] h-fit ${themeMode === "bg-white" ? "bg-black text-white" : "bg-white text-black"} p-6 relative rounded-xl m-2 shadow-lg duration-200 font-sans`}>
        <div className='w-full flex justify-between items-center'>
            <h1 className='text-[40px] mb-1 font-semibold'>Quiz App</h1>
            <i  onClick={() => setThemeMode(prev => (prev === "bg-white" ? "bg-black" : "bg-white"))}  className={`duration-100 ${themeMode === "bg-white" ? "ri-sun-line" : "ri-moon-line"} text-3xl cursor-pointer`}></i>
        </div>
      <div className='w-full h-[1px] bg-gray-300 relative mb-4'></div>
        {isLastQuestion ? (
              <div className='w-full text-center'> 
                 <div className='font-medium'>{score > wrong ? "Excellent!" : "Good"}  <br/> Total Questions : {questions.length}</div>
                 <div className='flex justify-between items-center mt-4'>
                  <span className='font-medium'>Right Answer ✅: {score}</span>
                  <span className='font-medium'>Wrong Answer ❌: {wrong}</span>
                </div>
              </div>
        ) : (
          <div>
          <Question question={questions[currentQuestion].question} options={questions[currentQuestion].options} clickedOption={HandleAnswerClick} borderColor={themeMode === "bg-white" ? "border-white" : "border-black"} />
            <div className='flex justify-between items-center mt-4'>
              <span className='font-medium'>Right Answer ✅: {score}</span>
              <span className='font-medium'>Wrong Answer ❌: {wrong}</span>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
