import React, { useRef } from 'react'
import "./style.scss"
import useScrollTriggeredCountUp from '../../hooks/useCounterHook';

function CountSection() {
    const YourComponentTrips = () => {
        const refTrips = useRef(null);
        const countTrips = useScrollTriggeredCountUp(refTrips, 15425);


        return <div ref={refTrips} className='increasingNumber'>{countTrips}</div>;
    };
    const YourComponentCustomers = () => {
        const refCustomers = useRef(null);
        const countCustomers = useScrollTriggeredCountUp(refCustomers, 8745);


        return <div ref={refCustomers} className='increasingNumber'>{countCustomers}</div>;
    };
    const YourComponentFleets = () => {
        const refFleets = useRef(null);
        const countFleets = useScrollTriggeredCountUp(refFleets, 235);

        return <div ref={refFleets} className='increasingNumber'>{countFleets}</div>;
    };
    const YourComponentYears = () => {
        const refYears = useRef(null);
        const countYears = useScrollTriggeredCountUp(refYears, 15);

        return <div ref={refYears} className='increasingNumber'>{countYears}</div>;
    };
    return (
        <div className='countSection'>
            <div className="cardCont">
                <div className="card">
                    <div className="count">{YourComponentTrips()}</div>
                    <h4>Trips Powered</h4>
                    <div className="text">Lorem, ipsum dolor sit. Adipisci aut voluptate quisquam pariatur ipsum! Repellendus?</div>
                </div>
                <div className="card">
                    <div className="count">{YourComponentCustomers()}</div>
                    <h4>Happy Customers</h4>
                    <div className="text">Lorem, ipsum dolor sit. Adipisci aut voluptate quisquam pariatur ipsum! Repellendus?</div>
                </div>
                <div className="card">
                    <div className="count">{YourComponentFleets()}</div>
                    <h4>Fleets Vehicle</h4>
                    <div className="text">Lorem, ipsum dolor sit. Adipisci aut voluptate quisquam pariatur ipsum! Repellendus?</div>
                </div>
                <div className="card">
                    <div className="count">{YourComponentYears()}</div>
                    <h4>Years Experience</h4>
                    <div className="text">Lorem, ipsum dolor sit. Adipisci aut voluptate quisquam pariatur ipsum! Repellendus?</div>
                </div>
            </div>
        </div>
    )
}

export default CountSection