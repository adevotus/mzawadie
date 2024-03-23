import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)
  const queryClient = new QueryClient();

  return (

<QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Portifolia" element={<Portifolia />}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/exibihation" element={<Exibihation/>}></Route> */}


        </Routes>
      </Router>
    </QueryClientProvider>

  
  )
}

export default App
