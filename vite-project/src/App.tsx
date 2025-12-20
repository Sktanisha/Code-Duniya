import Banner from "./components/banner/Banner"
import Category from "./components/category/Category"
import Courses from "./components/courses/Courses"
import Header from "./components/header/Header"

const App = () => {
  return (
    <main>
      <Header />
      <section className="relative">
      <Banner/>
      <Category/> 
      </section>
      <Courses/>
    </main>
  )
}

export default App
