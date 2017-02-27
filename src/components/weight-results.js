import React, { Component } from 'react';

export default class WeightForm extends Component {
    calcGoals = () => {
        let weightToday = this.props.weightResults.currentWeight;
        let goalsWeight = this.props.weightResults.goalWeight;
        let startingWeight = this.props.weightResults.startWeight;
        let daysToGoal = this.props.weightResults.daysLeft;
        let startDate = this.props.weightResults.startDay;
        let endDate = this.props.weightResults.selectedDay;
        startDate = startDate.getTime();
        endDate = endDate.getTime();
        let startDays = (endDate - startDate) / (1000*60*60*24);

        if(weightToday !== '' && goalsWeight !== '' && startingWeight !== '' && daysToGoal !== '') {
            //console.log(weightToday + " " +  goalsWeight + " " + startingWeight + " " + daysToGoal);
            if (isNaN(weightToday) || isNaN(goalsWeight) || isNaN(startingWeight) || isNaN(daysToGoal)) {
                console.log("Please try again");
            }
            else {
                let totalLost = (startingWeight - weightToday).toFixed(1);
                let toGoal = (weightToday - goalsWeight).toFixed(1);
                let perWeekGoal = ((toGoal / daysToGoal) * 7).toFixed(2);
                let percentComplete = ((totalLost / (startingWeight - goalsWeight)) * 100).toFixed(2);
                let initPerWeekGoal = ((startingWeight - goalsWeight) / startDays * 7).toFixed(2);

                $(".remaining-days").html(daysToGoal);
                $(".init-per-week-goal").html(initPerWeekGoal + " lbs");
                $(".total-lost").html(totalLost + " lbs");
                $(".to-goal").html(toGoal + " lbs");
                $(".per-week-goal").html(perWeekGoal + " lbs");
                $(".percent-complete").html(percentComplete + "%");

                if(initPerWeekGoal < perWeekGoal) {
                    $(".per-week-goal").addClass("under-goal");
                }
                else if (initPerWeekGoal >= perWeekGoal) {
                    $(".per-week-goal").addClass("over-goal");
                }
            }
        }
        else {
            $('.init-per-week-goal').html(' ');
            $(".total-lost").html(" ");
            $(".to-goal").html(" ");
            $(".per-week-goal").html(" ");
            $(".percent-complete").html(" ");
        }


    }

    render() {
        return(
            <div className="row">
                <div className="text-center col-xs-12 col-sm-6">
                    <button className="calculate-button btn btn-primary" onClick={this.calcGoals}>Calculate</button>
                    <div className="">
                        <h2>Days Left</h2>
                        <p><span className="remaining-days">___</span></p>
                    </div>
                </div>

                <div className="results-section col-xs-12 col-sm-6">
                    <h3>Total Weight Lost</h3>
                    <p className="total-lost">___</p>
                    <h3>Pounds to lose to your goal</h3>
                    <p className="to-goal">___</p>
                    <h3>Pounds per week to get to your goal: </h3>
                    <table className="per-week-table">
                        <thead>
                            <tr>
                                <th>Original Goal</th>
                                <th>New Goal</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="init-per-week-goal">___</td>
                            <td className="per-week-goal">___</td>
                        </tr>
                        </tbody>
                    </table>
                    <h3>Percent Complete</h3>
                    <p className="percent-complete">___</p>
                </div>
            </div>
        );
    }
}