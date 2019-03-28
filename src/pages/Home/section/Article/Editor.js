import React, { Component, Fragment } from 'react';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';
import $ from 'jquery';
window.$ = $;

export default class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      model: ''
    }
    this.config = {
      placeholderText: 'Escribe o pega el contenido a analizar',
      charCounterCount: true,
      // documentReady: true`
    }
    this.model = ''
  }

  handleModelChange = (model) => {
    this.model = model;
  }

  saveModel = () => {
    this.props.set('textHtml', this.model)
    this.setState({
      model: this.model
    })
  }
  render() {
    return (
      <Fragment>
        <FroalaEditor
          model={this.state.model} 
          onModelChange={this.handleModelChange} 
          config={this.config}
        />
        <button onClick={() => this.saveModel()}>
          Guardar Texto
        </button>
      </Fragment>
    )
  }
}


