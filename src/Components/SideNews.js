import React, { Component } from "react";
import SingleSide from "./SingleSide";

class SideNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: [], //array that will store the sidenews articles
    };
  }
  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=9184888cb44640409bd004ca71a2ddb9`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          sidenews: data.articles,
        });
      })
      .catch((error) => console.log(error));
  }

  renderItems() {
    return this.state.sidenews.map((item) => (
      <SingleSide key={item.url} item={item} />
    ));
  }
  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}
export default SideNews;
