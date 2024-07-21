import React, { Component } from "react";
import NewSingle from "./NewSingle";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [], //array that will store the articles
    };
  }
  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=9184888cb44640409bd004ca71a2ddb9`;
    //I could hide my API key using the env file storage https://newsapi.org/v2/everything?domains=wsj.com&apiKey={REACT_API_KEY}
    // https://newsapi.org/v2/top-headlines?country=us&apiKey=9184888cb44640409bd004ca71a2ddb9
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles,
        });
      })
      .catch((error) => console.log(error));
  }

  renderItems() {
    return this.state.news.map((item) => (
      <NewSingle key={item.url} item={item} />
    ));
  }
  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}
export default News;
//news file that loops to fetch each new:single news and loopstrough the API to display it.
//we are trying to add the item to a new array which  dont kmow if ive declared yet bit ill do it. Update: the array is new
