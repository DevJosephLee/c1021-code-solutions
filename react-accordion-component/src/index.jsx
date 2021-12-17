import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const topics = [
  { title: 'Hypertext Markup Language', description: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.' },
  { title: 'Cascading Style Sheets', description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.' },
  { title: 'JavaScript', description: "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use Javascript on the client side for web page behavior,often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on the user's device." }
]

ReactDOM.render(
  <Accordion topics={topics} />,
  document.querySelector('#root')
)
