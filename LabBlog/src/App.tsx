
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutSkeleton from './components/LayoutSkeleton';

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutSkeleton currentpage='About'/>}/>
        <Route path="/blog" element={<LayoutSkeleton currentpage='Blog'/>}/>
        <Route path="/api" element={<LayoutSkeleton currentpage='API'/>}/>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
