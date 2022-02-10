import React from 'react';
import App from '../components/App';
import {render, fireEvent, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'


test('app changes the text after add', async () => {
    // Arrange
    const {container} = render(<App />)
    const input = container.querySelector('.input-add__input')
    const button = container.querySelector('button')

    const select = container.querySelector('select')
    const optionsCount = select.querySelectorAll('option').length

    // const radio = container.querySelector('.radio-list')
    // const radioCount = radio.querySelectorAll('.radio-list__item').length

    // Act
    fireEvent.change(input, {target: {value: 'hello'}})
    expect(input.value).toBe('hello')

    userEvent.click(button)

    // Assert
    await waitFor(() => {
        expect(input.value).toBe('');
        const options = select.querySelectorAll('option');
        expect(options.length).toEqual(optionsCount + 1)
        expect(options[options.length-1]).toHaveTextContent('hello');
        expect(options[options.length-1].value).toMatch(new RegExp('http://www.cbr.ru/xbrl/nso/ins/rep/2021-09-30/ep/[0-9]*'));
        //
        // const radioButtons = radio.querySelectorAll('input');
        // const radioLabels = radio.querySelectorAll('label');
        // expect(radioButtons.length).toEqual(radioCount + 1)
        // expect(radioLabels[radioLabels.length-1]).toHaveTextContent('hello');
        // expect(radioButtons[radioButtons.length-1].id).toMatch(new RegExp('http://www.cbr.ru/xbrl/nso/ins/rep/2021-09-30/ep/[0-9]*'));
    })

})
