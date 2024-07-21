import "./App.css";
import News from "./News";
import { Component } from "react";
import SideNews from "./SideNews";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: "top-headlines",
        query: "country=us",
      },

      news2: {
        type: "everything",
        query: "q=apple&from=2024-07-19&to=2024-07-19&sortBy=popularity",
      },
      news3: {
        type: "everything",
        query: "q=bitcoin",
      },
      news4: {
        type: "top-headlines",
        query: "sources=bbc-news",
      },
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">
                My Feed
              </a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <News news={this.state.news1} />
            <News news={this.state.news2} />
            <News news={this.state.news3} />
          </div>
          <div className="col s4">
            <SideNews news={this.state.news4} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
