import React from 'react';
import ReactDOM from 'react-dom';
import style from './styles.css';
const Navigator = (props) => {
    return (
        <nav className={style.element}>
            <ul>
                <li>
                    <div className={style.dropdown}>
                        <a href="#">Project</a>
                        <div className={style.dropdownContent}>
                            <a href="#">Java REPL</a>
                            <a href="#">Code Gen</a>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#">ABC</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigator;
