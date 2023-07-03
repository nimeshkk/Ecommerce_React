import React, { useState } from 'react';
import './productCss.css';





const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Kids',
            title: 'Title 1',
            content: 'Las t a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.',
            
        },
        {
            id: 2,
            tabTitle: 'Gents',
            title: 'Title 2',
            content: 'Contenido de tab 2.',
           
        },
        {
            id: 3,
            tabTitle: 'Ladies',
            title: 'Title 3',
            content: 'Contenido de tab 3.'
        },
        
        
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
       <div className='tab_body'>
        <div className='tab_container'>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div><p className='title'>{tab.title}</p><p>{tab.content}</p></div>}
                    </div>
                )}
            </div>
        </div>
        </div>
    );
}

export default Tabs;
