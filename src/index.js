import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/cssComponents/questionnaire.css';
import './components/cssComponents/multipleChoiceQuestion.css';
import './components/cssComponents/textInputQuestion.css';
import App from './App';
import {StateProvider} from './state-management/stores/store'

ReactDOM.render(
  <StateProvider><App /></StateProvider>, document.getElementById('root'));
