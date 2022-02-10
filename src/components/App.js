import '../styles/App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import * as api from '../utils/Api';
import SelectList from "./SelectList";
import RadioList from "./RadioList";
import TableList from "./TableList";
import GridList from "./GridList";
import InputAdd from "./InputAdd";

function App() {

    const [list, setList] = useState([]);
    const [selectedOrganization, setSelectedOrganization] = useState('');


    useEffect(() => {
        api.getOrganizations()
            .then((organizations) => {
                setList(sortList(organizations));
            })
            .catch((err) => {
                console.log(`${err}`);
            });
    }, []);

    function handleCheckSelected(organization) {
        setSelectedOrganization(organization);
    }


    function sortList(list) {
        return list
            .slice(0, -1)
            .sort(function (a, b) {
                let descriptionA = a.description.toLowerCase(),
                    descriptionB = b.description.toLowerCase()
                if (descriptionA < descriptionB)
                    return -1
                if (descriptionA > descriptionB)
                    return 1
                return 0
            }).concat(list.slice(-1));
    }

    //Функция добавления карточки
    function handleAddOrganizationSubmit(newOrg) {
        setList(sortList([newOrg, ...list]));
    }

    // console.log(selectedOrganization)

    return (
        <div className="page">
            <InputAdd onAddOrg={handleAddOrganizationSubmit}/>
            <SelectList list={list}
                        selectedOrganization={selectedOrganization}
                        onOrganizationClick={handleCheckSelected}/>
            <RadioList list={list}
                       selectedOrganization={selectedOrganization}
                       onOrganizationClick={handleCheckSelected}/>
            <TableList list={list}
                       selectedOrganization={selectedOrganization}
                       onOrganizationClick={handleCheckSelected}/>
            <GridList list={list}
                      selectedOrganization={selectedOrganization}
                      onOrganizationClick={handleCheckSelected}/>
        </div>
    );
}

export default App;
