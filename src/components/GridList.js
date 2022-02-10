import React from 'react';
import '../styles/GridList.css';

function GridList({list, selectedOrganization, onOrganizationClick}) {

    return (
        <div className="grid-list page__item">
            <div className="grid-list__header">
                <p>Тип</p>
                <p>Название</p>
            </div>
            {list.map((organization) => (
                    <div className={`grid-list__table
                    ${selectedOrganization === organization.entryPointDocument ? 'row_checked' : ''}`}
                         key={organization.entryPointDocument}
                         onClick={() => onOrganizationClick(organization.entryPointDocument)}>
                        <p className='grid-list__table-cell'>{organization.nfoType}</p>
                        <p className='grid-list__table-cell'>{organization.description}</p>
                    </div>
                )
            )}
        </div>
    );
}

export default GridList;
