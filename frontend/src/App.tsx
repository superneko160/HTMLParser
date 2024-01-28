import './App.css'
import parseHtml from './utils/parser';

function App() {

  const strHtml = '<h1><a href="example.com">Hello</a></h1><h2>subtitle</h2>';

  return (
    <>
      <h1>HTMLParser2</h1>
      <div className="card">
        <button onClick={ () => console.log(parseHtml(strHtml))}>PARSER RUN</button>
      </div>
    </>
  )
}

export default App
