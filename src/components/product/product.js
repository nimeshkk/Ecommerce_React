import React, { useState } from 'react';
import './productCss.css';





const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Kids',
            title: 'KIDS SECTION',
            content: 'Our kids collection features a wide range of options for boys and girls of all ages. We understand that children clothing should be durable, practical, and, most importantly, reflect their vibrant personalities. Thats why we carefully curate our selection to include a variety of designs, colors, and patterns that will make your child stand out in the crowd.',
            
        },
        {
            id: 2,
            tabTitle: 'Gents ',
            title: 'GENTS SECTION',
            content: 'Our mens collection features a diverse range of clothing options designed to elevate your wardrobe. Whether you are dressing up for a formal occasion or looking for casual everyday wear, we have you covered. From tailored suits and dress shirts to relaxed jeans and stylish t-shirts, our collection offers versatility and style for every occasion.',
           
        },
        {
            id: 3,
            tabTitle: 'Ladies',
            title: 'LADIES SECTION',
            content: 'Our womens collection is thoughtfully curated to cater to diverse tastes and occasions. Whether you are dressing up for a glamorous night out or seeking comfortable and stylish everyday wear, we have a wide range of options to suit your needs. Our collection embraces the latest fashion trends while offering timeless classics, ensuring that you can stay fashionable while expressing your personal style.'
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
