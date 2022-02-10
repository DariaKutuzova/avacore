import React from 'react';
import {useState} from 'react';
import '../styles/InputAdd.css';

function InputAdd({onAddOrg}) {

    const [inputValue, setInputValue] = useState('');

    const defaultType = 'Какая-то организация';

    function handleChangeName(evt) {
        setInputValue(evt.target.value);
    }

    function cleanInput() {
        setInputValue('')
    }

    function handleSubmit(e) {
        e.preventDefault();

        onAddOrg({
            description: inputValue,
            entryPointDocument: 'http://www.cbr.ru/xbrl/nso/ins/rep/2021-09-30/ep/' + Math.floor(Math.random()*Math.pow(10, 12)),
            nfoType: defaultType});

        cleanInput();

    }

    return (
            <form action="#" className='input-add page__item'
                  onSubmit={handleSubmit}>
                <input type="text"
                       className="input-add__input"
                       placeholder="Введите название здесь..."
                       value={inputValue || ''}
                       onChange={handleChangeName}
                       required
                />
                <button className="input-add__button" type="submit">Добавить</button>
            </form>

    );
}

export default InputAdd;
