import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./views/Blog";
import Home from "./views/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogContent from "./views/BlogContent";
import AboutUs from "./views/AboutUs";
import News from "./views/News";
import NewsContent from "./views/NewsContent";
import Projects from "./views/Projects";
import ProjectsContent from "./views/ProjectsContent";
import Events from "./views/Events";
import EventContent from "./views/EventContent";

function App() {
  return (
    <Router>
      <div className="App" id="app">
        <Header />
        <Switch>
          
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/:id" component={BlogContent} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/news" component={News} />
            <Route exact path="/news/:id" component={NewsContent} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/:id" component={ProjectsContent} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/events/:id" component={EventContent} />


        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
