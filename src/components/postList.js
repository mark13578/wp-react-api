import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost/wordpress/wp-json/wp/v2/posts")
      .then((posts) => {
        this.setState({
          posts: posts.data,
        });
      });
  }

  createMarkup(html) {
    return { _html: html };
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post) => (
          <Link to={`/${post.slug}`} key={post.id}>
            <div className="card" key={post.id}>
              <div className="card-content">
                <h3>{post.title.rendered}</h3>
                <div
                  dangerouslySetInnerHTML={this.createMarkup(
                    post.excerpt.rendered
                  )}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default PostList;
