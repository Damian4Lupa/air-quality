import React from 'react';
import health from '../images/health.png'
import economic from '../images/economic.png'
import environmental from '../images/environmental.png'

const Information = () => {
    return (

        <div class="container marketing">

            <div class='hr'>
                <span class='hr-title'>Why Is Air Quality Important?</span>
            </div>

            <div class="row featurette middle">
                <div class="col-md-7">
                    <h2 class="featurette-heading">Health Effects of Air Pollution<span class="text-muted"></span></h2>
                    <p class="lead">Air pollution causes many negative health effects. It is associated with the respiratory system, cardiovascular system and premature death.</p>
                    <p class="lead">SHORT-TERM EFFECTS: eye, nose, and throat irritation, upper respiratory infections, headaches, nausea, allergic reactions, worsen asthma and emphysema, aggravate exiting heart disease.</p>
                    <p class="lead">LONG-TERM EFFECTS: chronic respiratory disease, lung cancer, heart disease, damage to lungs, brain, and nerves, birth defects, skin cancer, cataracts.</p>

                </div>
                <div class="col-md-5">
                    <img src={health} alt="health" width="400" />
                </div>
            </div>

            <hr class="featurette-divider" />

            <div class="row featurette middle">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading">The economic effects of air pollution <span class="text-muted"></span></h2>
                    <p class="lead">Air pollution has a negative impact on human health, it also affects our economy by ill people, absenteeism at work and school, and expenses on medicines. Agricultural crops, crops and forests are damaged, which results in a loss of income for these sectors of the economy and an increase in prices for consumers. Air pollution reduces visibility and even disrupts air transport. Air pollution can also damage buildings.</p>
                </div>
                <div class="col-md-5 order-md-1">
                    <img src={economic} alt="health" width="400" />
                </div>
            </div>


            <hr class="featurette-divider" />

            <div class="row featurette middle">
                <div class="col-md-7">
                    <h2 class="featurette-heading">Environmental effects of air pollution. <span class="text-muted"></span></h2>
                    <p class="lead">Too much ozone in the atmosphere can have a detrimental effect on plants and ecosystems. These effects include:</p>
                    <p class="lead">
                        <ul>
                            <li>interfering with the ability of plants to produce and store food, making them more susceptible to certain diseases, insects, other pollutants, competition and harsh weather</li>
                            <li>damage to the leaves of trees and other plants</li>
                            <li>reducing the growth of forests and yields, potentially affecting the diversity of species in ecosystems</li>
                        </ul>
                    </p>
                </div>
                <div class="col-md-5">
                    <img src={environmental} alt="health" width="600" />
                </div>


            </div>
        </div>

    );
}

export default Information;