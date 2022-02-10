import React from 'react';
import '../styles/RadioList.css';

function RadioList({list, selectedOrganization, onOrganizationClick}) {

    return (
        <div className="radio-list page__item">
            {list.map((organization) => (
                    <div key={organization.entryPointDocument}
                         className="radio-list__item">
                        <input className="radio-list__radio"
                               type="radio"
                               id={organization.entryPointDocument}
                               name="organizationRadio"
                               value={organization.description}
                               checked={selectedOrganization===organization.entryPointDocument}
                               onChange={() => onOrganizationClick(organization.entryPointDocument)}/>
                        <label htmlFor={organization.entryPointDocument}>{organization.description}</label>
                    </div>
                )
            )}
        </div>
    );
}

export default RadioList;
