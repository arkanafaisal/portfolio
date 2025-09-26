import './App.css'
import ContactSection from './components/contact-section'
import Header from './components/header'
import HeroSection from './components/hero-section'
import ProjectDetailsSection from './components/project-details-section'
import ProjectListSection from './components/project-list-section'

function App() {

  return (
    <>
      <Header></Header>
      <main className='bg-gradient-to-r from-neutral-950 via-zinc-900 to-zinc-700'>
        <HeroSection></HeroSection>
        <ProjectListSection></ProjectListSection>
        <ProjectDetailsSection></ProjectDetailsSection>
      </main>
      <footer>
        <ContactSection></ContactSection>
      </footer>
    </>
  )
}

export default App
