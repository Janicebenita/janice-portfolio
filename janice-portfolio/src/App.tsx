import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage, CaseStudyPage, HomePage, NotFoundPage, ResearchPage, ResumePage, WorkPage } from './pages'

export default function App() {
  return <BrowserRouter><Layout><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/work" element={<WorkPage />} />
    <Route path="/work/:slug" element={<CaseStudyPage />} />
    <Route path="/research" element={<ResearchPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/resume" element={<ResumePage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes></Layout></BrowserRouter>
}
