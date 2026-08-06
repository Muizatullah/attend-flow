import { Navbar, Hero, Features, HowItWorks, DashboardShowcase, SecureCheck ,Testimonials, WhyChoose, CTA, Footer,} from  "../../components/index.jsx";
// import SecureCheck from "../../components/secureCheck/secureCheck.jsx";



const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <DashboardShowcase />
      <SecureCheck />
      <Testimonials />
      <WhyChoose />
      <CTA />
      <Footer />
      
     

    </div>
  )
}

export default HomePage;
