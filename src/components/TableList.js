import React from 'react';
import '../styles/TableList.css';

function TableList({list, selectedOrganization, onOrganizationClick}) {

    return (
        <div className="table-list page__item">
            <table>
                <caption className="table-list__header">Выберите организацию</caption>
                <thead>
                    <tr>
                        <th>Тип</th>
                        <th>Название</th>
                    </tr>
                </thead>
                <tbody>
                {list.map((organization) => (
                        <tr
                            className={`${selectedOrganization===organization.entryPointDocument ? 'row_checked' : ''}`}
                            key={organization.entryPointDocument}
                            onClick={() => onOrganizationClick(organization.entryPointDocument)}>
                            <td>{organization.nfoType}</td>
                            <td>{organization.description}</td>
                        </tr>
                    )
                )}
                </tbody>
            </table>

        </div>
    );
}

export default TableList;
