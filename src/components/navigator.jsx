import React from 'react'

export default(props) => {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center">Golden Meli</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="#">Java Shell</a>
                        </li>
                        <li>
                            <a href="#">Java To C Code Generator</a>
                        </li>
                        <li>
                            <a href="#">Small Talk VM</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
