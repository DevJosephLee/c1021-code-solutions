import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {htmlDescOpen: false, cssDescOpen: false, jsDescOpen: false};
    this.htmlClick = this.htmlClick.bind(this);
    this.cssClick = this.cssClick.bind(this);
    this.jsClick = this.jsClick.bind(this);
  }
  htmlClick() {
    if (this.state.htmlDescOpen === true) {
      this.setState({ htmlDescOpen: false, cssDescOpen: false, jsDescOpen: false });
    } else {
      this.setState({ htmlDescOpen: true, cssDescOpen: false, jsDescOpen: false });
    }
  }
  cssClick() {
    if (this.state.cssDescOpen === true) {
      this.setState({ htmlDescOpen: false, cssDescOpen: false, jsDescOpen: false });
    } else {
      this.setState({ htmlDescOpen: false, cssDescOpen: true, jsDescOpen: false});
    }
  }
  jsClick() {
    if (this.state.jsDescOpen === true) {
      this.setState({ htmlDescOpen: false, cssDescOpen: false, jsDescOpen: false });
    } else {
      this.setState({ htmlDescOpen: false, cssDescOpen: false, jsDescOpen: true });
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.htmlClick}>Hypertext Markup Language</button>
        <p className={this.state.htmlDescOpen ? 'description' : 'hidden'}>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p>
        <div>
          <button onClick={this.cssClick}>Cascading Style Sheets</button>
          <p className={this.state.cssDescOpen ? 'description' : 'hidden'}>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
        </div>
        <button onClick={this.jsClick}>JavaScript</button>
        <p className={this.state.jsDescOpen ? 'description' : 'hidden'}>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use Javascript on the client side for web page behavior,often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on the user's device.</p>
      </div>
    )
  }
}

export default Accordion
