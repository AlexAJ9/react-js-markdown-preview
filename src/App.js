import marked  from 'marked';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";



  const textarea={
    width: "100%",
    backgroundColor:"black",
    color:"white",
  height: window.innerHeight, 
  border:"none",
  overflow:"hidden"
  };
  const preview={
    height: window.innerHeight ,
    overflow: "scroll",
    backgroundColor:"black",
    color:"white"
  }
  marked.setOptions({
    breaks: true
  });
  const renderMarkdown = new marked.Renderer();

  class Preview extends  React.Component{
  constructor(props)
    {
      super(props)
      this.state={
        text:""
  }
    }
    
    render(){
      
      return <div class ="row"style={preview}  dangerouslySetInnerHTML={{ __html: marked(this.props.text, { renderer: renderMarkdown }) }} ></div>;
      
  
    }

                                                                      
  }
  class App extends React.Component {
    constructor(props){
      super(props);
      this.state={
        input:`# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
    
  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine ==  '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
    
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | ------------- 
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
      - With different indentation levels.
          - That look like this.


  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:

  ![React Logo w/ Text](https://goo.gl/Umyytc)

  `,
          text:[]
      }
    }
    handleChange(event){
      this.setState({
            input:event.target.value    
      })
  }
  
    render(){
      
      return (
      
        
      <div class="flex-box">
          
         <div class="row"> <textarea style={textarea}  onChange={this.handleChange.bind(this)} value={this.state.input} ></textarea></div>
          <Preview text={this.state.input} />
          
        </div>
      );
        
      
    }
  }


 

export default App;
