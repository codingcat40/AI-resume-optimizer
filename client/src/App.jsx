import ResumeUploader from './components/ResumeUploader'
import JobDescription from './components/JobDescription'



function App() {

  return (
    <div className='max-w-6xl mx-auto'>
        <h2 className='text-center text-3xl font-semibold py-20'>AI Resume Optimizer</h2>
        <ResumeUploader/>
        <JobDescription />
    </div>
  )
}

export default App
