import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/main'

// 부모 컴포넌트(루트 컴포넌트)
// 모든 자식 컴포넌트를 포함하는 최상위 컴포넌트입니다.
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App