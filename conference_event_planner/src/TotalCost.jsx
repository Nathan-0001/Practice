import React, { useState, useEffect } from 'react';
import "./TotalCost.css";

const TotalCost = ({ totalCosts, ItemsDisplay }) => {


    return (
        <div className="pricing-app">
            <div className="display_box">
                <div className="header">
                    <p className="preheading"><h3>Total cost for the event</h3></p>
                </div>
                <div>
                    <h2 id="pre_fee_cost_display" className="price">
                        {typeof totalCosts === 'number' ? `$${totalCosts.toFixed(2)}` : totalCosts}
                    </h2>

                    <div>
                        {ItemsDisplay ? <ItemsDisplay /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalCost;
