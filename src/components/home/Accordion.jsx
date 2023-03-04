import React from 'react';

const Accordion = ({title, active, setActive}) => {
    console.log(active)
    console.log(title)
    return (
        <>
            <div className="accordion">
                <div className="accordionHeading">
                    <div className="accordionHeading--containers" onClick={() => setActive(title)}>
                        <p>{title}</p>
                        <span>{title === title ? "<" : ">"}</span>
                    </div>
                </div>
                <div className={(active === title ? "show" : "")  + "accordionContent"}>
                    <div className="containers">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, obcaecati.</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Accordion;