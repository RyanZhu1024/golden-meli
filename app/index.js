import React from 'react';
import ReactDOM from 'react-dom';

import Navigator from './components/navigator';

const App = () => {
    return (
        <div>
            <Navigator />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));
