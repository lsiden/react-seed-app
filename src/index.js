import React from 'react';
import ReactDOM from 'react-dom';

const AppContent = React.createClass({ render: function () {
	return React.createElement('div', null, 'React Seed App Here')
}})

ReactDOM.render(React.createElement(AppContent), document.querySelector('#react-mount'))