//main.js 将Greeter中的模板插入节点
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import './main.css';

render(<Greeter />, document.getElementById('root'));
