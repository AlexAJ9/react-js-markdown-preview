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
        input:`# Write some Markdown here :)
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
