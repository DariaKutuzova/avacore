import React from 'react';
import '../styles/SelectList.css';

function SelectList({list, selectedOrganization, onOrganizationClick}) {

    function handleClick(e) {
        onOrganizationClick(e.target.value)
    }

    return (
        <div className="c page__item">
            <select size="1"
                    value={selectedOrganization}
                    onChange={handleClick}
                    className="select-list__select">
                <option disabled value='' className="select-list__option">Выберите организацию</option>
                {list.map((organization) => (
                        <option value={organization.entryPointDocument}
                                key={organization.entryPointDocument}
                                className="select-list__option"
                        >{organization.description}</option>
                    )
                )}
            </select>

        </div>
    );
}

export default SelectList;
