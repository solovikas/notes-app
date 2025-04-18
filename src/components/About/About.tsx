import Index from "./components/Index"
import Analytics from "./components/Analytics"
import Features from "./components/Features"

const About: React.FC = () => {
  return (
    <section id="about" className="flex flex-col justify-start items-center w-full h-fit gap-[10vh]">
      <Index />
      <Analytics />
      <Features />
    </section>
  )
}

export default About
