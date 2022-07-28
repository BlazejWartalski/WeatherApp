var container = document.createElement("div")
container.setAttribute("id","container")
document.body.appendChild(container)

import _ from 'lodash';
import createHeader from './elements/header.js'
import createMain from './elements/main.js'
import createFooter from './elements/footer.js'
import './style.css';
import initializeButton from './script/weatherRequest.js'

createHeader();
createMain();
createFooter();
initializeButton();