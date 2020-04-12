import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './cssComponents/questionnaire.css';
import './cssComponents/multipleChoiceQuestion.css';
import './cssComponents/textInputQuestion.css';
import App from './App';
import {StateProvider} from './state-management/stores/store'

ReactDOM.render(
  <StateProvider><App /></StateProvider>, document.getElementById('root'));
