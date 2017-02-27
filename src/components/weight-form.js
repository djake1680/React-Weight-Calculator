import React, { Component } from 'react';
import WeightResults from './weight-results';
import DayPicker from 'react-day-picker';



export default class WeightForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startWeight: '',
            goalWeight: '',
            currentWeight: '',
            daysLeft: '',
            selectedDay: new Date(),
            startDay: '',
            data: []
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
        //console.log(this.state);
    };

    handleSubmit = (event) => {
        event.preventDefault();
    };

    handleDayClick = (day) => {
        this.setState({ selectedDay: day });
        let todayDate = new Date();
        todayDate = todayDate.getTime();
        let endDate = day;
        endDate = endDate.getTime();
        let totalTime = endDate - todayDate;
        let one_day=1000*60*60*24;
        let totalDays = Math.round(totalTime / one_day);

        if(totalDays < 1) {
            $(".days-left-error").html("Invalid date");
        }
        else {
            $(".days-left-error").html('');
            this.setState({daysLeft: totalDays});
        }
    };

    startDayClick = (day) => {
        this.setState({ startDay: day});
        let todayDate = new Date();
        todayDate = todayDate.getTime();
        let startDate  = day;
        startDate = startDate.getTime();
        let correctTime = todayDate - startDate;
        let one_day = 1000*60*60*24;
        let totalDays = Math.round(correctTime / one_day);

        if(totalDays < 1) {
            $(".start-date-error").html("Invalid date");
        }
        else {
            $(".start-date-error").html("");
        }

    };


    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-4">
                        <h3>Enter Your Data Below</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <label>Starting Weight:</label>
                                        <input type="text" name="startWeight" onChange={this.handleChange} value={this.state.startWeight} className="form-control"/>
                                    </div>
                                    <div className="col-xs-6">
                                        <label>Current Weight:</label>
                                        <input type="text" name="currentWeight" onChange={this.handleChange} value={this.state.currentWeight} className="form-control"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <label>Goal Weight:</label>
                                        <input type="text" name="goalWeight" onChange={this.handleChange} value={this.state.goalWeight} className="form-control"/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="datepicker-col col-xs-12 col-lg-6">
                                        <label>Start Date: <span className="start-date-error" ></span></label>
                                        <div>
                                            <DayPicker onDayClick={ this.startDayClick }/>
                                        </div>
                                    </div>
                                    <div className="datepicker-col col-xs-12 col-lg-6">
                                        <label>Goal Date: <span className="days-left-error"></span> </label>
                                        <div>
                                            <DayPicker onDayClick={ this.handleDayClick }/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="weight-results col-xs-12 col-sm-8">
                        <WeightResults weightResults={this.state}/>
                    </div>
                </div>

            </div>
        );
    }
}