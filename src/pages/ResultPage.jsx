import { Link, useLocation } from "react-router-dom"
import { ROUTES } from "../const";
import Result from "../compornents/Result/Result";
import Loading from "../compornents/Loading/Loading";
import { useState, useEffect } from "react";

export default function ResultPage() {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen
  const correctNumLen = location.state.correctNumLen

  useEffect(() => {
    setTimeout(() => setActive(true), 3000);
  }, [])

  return (
    <>
      <Loading active={active} />
      <h1>Result</h1>
      <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen} />
      <br />
      <Link to={ROUTES.QUIZ}>もう一度チャレンジ</Link>
    </>
  )
}