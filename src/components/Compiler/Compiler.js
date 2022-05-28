import React, { Component } from "react";
import "./Compiler.css";
import "./highlight.css";



export default class Compiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: localStorage.getItem('input')||``,
      output: ``,
      language_id:localStorage.getItem('language_Id')|| 2,
      user_input: ``,
    };
  }
  input = (event) => {
 
    event.preventDefault();
  
    this.setState({ input: event.target.value });
    localStorage.setItem('input', event.target.value)
 
  };
  userInput = (event) => {
    event.preventDefault();
    this.setState({ user_input: event.target.value });
  };
  language = (event) => {
   
    event.preventDefault();
   
    this.setState({ language_id: event.target.value });
    localStorage.setItem('language_Id',event.target.value)
   
  };

  submit = async (e) => {
    e.preventDefault();

    let outputText = document.getElementById("output");
    outputText.innerHTML = "";
    outputText.innerHTML += "Creating Submission ...\n";
    const response = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions",
      {

        method: "POST",
        headers: {
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
          'X-RapidAPI-Key': '2878dd92bfmsh324e7926113101ep1e0d42jsn1974acd536ca',
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          source_code: this.state.input,
          stdin: this.state.user_input,
          language_id: this.state.language_id,
        }),
      }
    );
    outputText.innerHTML += "Submission Created ...\n";
    const jsonResponse = await response.json();

    let jsonGetSolution = {
      status: { description: "Queue" },
      stderr: null,
      compile_output: null,
    };

    while (
      jsonGetSolution.status.description !== "Accepted" &&
      jsonGetSolution.stderr == null &&
      jsonGetSolution.compile_output == null
    ) {
      outputText.innerHTML = `Execution start... \nShowing output ...\nCheckig status\nstatus : ${jsonGetSolution.status.description}`;
      if (jsonResponse.token) {
        let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;

        const getSolution = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": "2878dd92bfmsh324e7926113101ep1e0d42jsn1974acd536ca", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
            "content-type": "application/json",
          },
        });

        jsonGetSolution = await getSolution.json();
      }
    }
    if (jsonGetSolution.stdout) {
      const output = atob(jsonGetSolution.stdout);

      outputText.innerHTML = "";

      outputText.innerHTML += `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
    } else if (jsonGetSolution.stderr) {
      const error = atob(jsonGetSolution.stderr);

      outputText.innerHTML = "";

      outputText.innerHTML += `\n Error :${error}`;
    } else {
      const compilation_error = atob(jsonGetSolution.compile_output);

      outputText.innerHTML = "";

      outputText.innerHTML += `\n Error :${compilation_error}`;
    }
  };
  render() {
 
    return (
      <>
      <head>
     
      <script src="https://unpkg.com/monaco-editor/min/vs/loader.js"></script>
    <script src="https://unpkg.com/monaco-editor@0.32.1/min/vs/editor/editor.main.nls.js"></script>
    <script src="https://unpkg.com/monaco-editor@0.32.1/min/vs/editor/editor.main.js"></script>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
      </head>
     <div class="control-panel navbars">
      
     <a href="#file" class="subnavbtn  burger"><label for="secret_checkbox">File</label><i class="fa fa-caret-down"></i></a>
    <input type="checkbox" id="secret_checkbox" />
    <div class="subnav-content secret_checkbox v-class-resp er" id="menu">
        <ul class="subnav-content secret_checkbox v-class-resp er" id="menuu">
            <li><a href="ide.html" target="_blank">New Tab</a></li>
            <li><a href="js/access.js">Open</a>  </li>
            <li><a href="js/save.js">Save</a></li>
            <li><a href="js/saveas.js">Save as</a></li>
            <li><a href="#print">Print</a></li>
            <li><a href="#export">Export</a></li>
        </ul>
     </div>
     {/* <select
     class="languages"
              value={this.state.language_id}
              onChange={this.language}
              id="languages"
              className="form-control form-inline mb-2 language"
            >
              <option value="54">C++</option>
              <option value="50">C</option>
              <option value="62">Java</option>
              <option value="71">Python</option>
            </select>
             */}
    <a href="/menu/view.js">View</a>
    <a href="/menu/help.html">Help</a>
    <a href="https://www.codewithmaurya.com/contact-us/" target="">Contact</a>
    <div class="header">Online Code Editor</div>
    <div class="header1">IDE</div>
     </div>

        <div className=" container-fluid">
          <div class=" editor ">
            <div class="ctrl">
            <label htmlFor="solution ">
             
            </label>
            <textarea placeholder="Enter Code Here " spellcheck="false"  
            class="editor" 
                 
              className="editor-status-line TextModelResolvedOptions source editor"
              required
              name="solution"
              id="source"
              onChange={this.input}
              value={this.state.input}
            
            ></textarea>
          
            </div>
<div class="hhaa">
            

            <label htmlFor="tags" className="mr-1">
              <b className="heading">Languages:</b>
            </label>
            <select
              value={this.state.language_id}
              onChange={this.language}
              id="tags"
              className="form-control form-inline mb-2 language"
            >
              <option value="54">C++</option>
              <option value="50">C</option>
              <option value="62">Java</option>
              <option value="71">Python</option>
            </select>
            <button
              type="submit"
              className="btn btn-danger ml-2 mr-2 "
              onClick={this.submit}
            >
              <i className="fas fa-cog fa-fw"></i> Run
            </button>
            </div>
          </div>
          
        </div>
        <div class="resp">
            
          
        <div class="input" >
          {/* <span className="badge badge-primary heading my-2 ">
            <i className="fas fa-user fa-fw fa-md"></i> User Input
          </span> */}
          {/* <br /> */}
          <textarea id="input" placeholder="Enter Input if requied! : Before execute "  onChange={this.userInput}></textarea>
        </div>
        <div class="output" >
              {/* <span className="badge badge-info heading my-2 ">
                <i className="fas fa-exclamation fa-fw fa-md"></i> Output
              </span> */}
              <textarea id="output" placeholder="output" ></textarea>
            </div>
        </div>
      </>
    );
  }
}