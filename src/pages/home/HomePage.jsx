import { Navbar, Hero, Features, HowItWorks, DashboardShowcase, Testimonials, Pricing} from  "../../components/index.jsx";



const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Features />
      <HowItWorks />
      <DashboardShowcase />
      <Testimonials />
      <Pricing/>
     

    </div>
  )
}

export default HomePage;
