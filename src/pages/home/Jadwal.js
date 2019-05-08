import React, { Component } from 'react'
// import './main'
// import './util'
// import './style.css'
// import './style.scss'

export default class Jadwal extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: 'white'
            }}>
                <div className="card-body">
                    <div className="d-flex justify-content-center mb-4">
                        <h2>Jadwal Meetup</h2>
                    </div>
                    {/* <div class="cd-schedule cd-schedule--loading margin-top--lg margin-bottom--lg js-cd-schedule">
                            <div class="cd-schedule__timeline">
                                <ul>
                                    <li><span>09:00</span></li>
                                    <li><span>09:30</span></li>
                                    <li><span>10:00</span></li>
                                    <li><span>10:30</span></li>
                                    <li><span>11:00</span></li>
                                    <li><span>11:30</span></li>
                                    <li><span>12:00</span></li>
                                    <li><span>12:30</span></li>
                                    <li><span>13:00</span></li>
                                    <li><span>13:30</span></li>
                                    <li><span>14:00</span></li>
                                    <li><span>14:30</span></li>
                                    <li><span>15:00</span></li>
                                    <li><span>15:30</span></li>
                                    <li><span>16:00</span></li>
                                    <li><span>16:30</span></li>
                                    <li><span>17:00</span></li>
                                    <li><span>17:30</span></li>
                                    <li><span>18:00</span></li>
                                </ul>
                            </div>

                            <div class="cd-schedule__events">
                                <ul>
                                    <li class="cd-schedule__group">
                                        <div class="cd-schedule__top-info"><span>Monday</span></div>

                                        <ul>
                                            <li class="cd-schedule__event">
                                                <a data-start="09:30" data-end="10:30" data-content="event-abs-circuit" data-event="event-1" href="#0">
                                                    <em class="cd-schedule__name">Abs Circuit</em>
                                                </a>
                                            </li>

                                            <li class="cd-schedule__event">
                                                <a data-start="11:00" data-end="12:30" data-content="event-rowing-workout" data-event="event-2" href="#0">
                                                    <em class="cd-schedule__name">Rowing Workout</em>
                                                </a>
                                            </li>

                                            <li class="cd-schedule__event">
                                                <a data-start="14:00" data-end="15:15" data-content="event-yoga-1" data-event="event-3" href="#0">
                                                    <em class="cd-schedule__name">Yoga Level 1</em>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="cd-schedule__group">
                                        <div class="cd-schedule__top-info"><span>Tuesday</span></div>

                                        <ul>
                                            <li class="cd-schedule__event">
                                                <a data-start="10:00" data-end="11:00" data-content="event-rowing-workout" data-event="event-2" href="#0">
                                                    <em class="cd-schedule__name">Rowing Workout</em>
                                                </a>
                                            </li>

                                            <li class="cd-schedule__event">
                                                <a data-start="11:30" data-end="13:00" data-content="event-restorative-yoga" data-event="event-4" href="#0">
                                                    <em class="cd-schedule__name">Restorative Yoga</em>
                                                </a>
                                            </li>

                                            <li class="cd-schedule__event">
                                                <a data-start="13:30" data-end="15:00" data-content="event-abs-circuit" data-event="event-1" href="#0">
                                                    <em class="cd-schedule__name">Abs Circuit</em>
                                                </a>
                                            </li>

                                            <li class="cd-schedule__event">
                                                <a data-start="15:45" data-end="16:45" data-content="event-yoga-1" data-event="event-3" href="#0">
                                                    <em class="cd-schedule__name">Yoga Level 1</em>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="cd-schedule__group">
                                        <div class="cd-schedule__top-info"><span>Wednesday</span></div>

                                        <ul>
                                            <li class="cd-schedule__event">
                                                <a data-start="09:00" data-end="10:15" data-content="event-restorative-yoga" data-event="event-4" href="#0">
                                                    <em class="cd-schedule__name">Restorative Yoga</em>
                                                </a>
                                            </li>

                                            <li class="cd-schedule__event">
                                                <a data-start="10:45" data-end="11:45" data-content="event-yoga-1" data-event="event-3" href="#0">
                                                    <em class="cd-schedule__name">Yoga Level 1</em>
                                                </a>
                                            </li>

                                            <li class="cd-schedule__event">
                                                <a data-start="12:00" data-end="13:45" data-content="event-rowing-workout" data-event="event-2" href="#0">
                                                    <em class="cd-schedule__name">Rowing Workout</em>
                                                </a>
                                            </li>

                                            <li class="cd-schedule__event">
                                                <a data-start="13:45" data-end="15:00" data-content="event-yoga-1" data-event="event-3" href="#0">
                                                    <em class="cd-schedule__name">Yoga Level 1</em>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="cd-schedule__group">
                                        <div class="cd-schedule__top-info"><span>Thursday</span></div>

                                        <ul>
                                            <li class="cd-schedule__event">
                                                <a data-start="09:30" data-end="10:30" data-content="event-abs-circuit" data-event="event-1" href="#0">
                                                    <em class="cd-schedule__name">Abs Circuit</em>
                                                </a>
                                            </li>

                                            <li class="cd-schedule__event">
                                                <a data-start="12:00" data-end="13:45" data-content="event-restorative-yoga" data-event="event-4" href="#0">
                                                    <em class="cd-schedule__name">Restorative Yoga</em>
                                                </a>
                                            </li>

                                            <li class="cd-schedule__event">
                                                <a data-start="15:30" data-end="16:30" data-content="event-abs-circuit" data-event="event-1" href="#0">
                                                    <em class="cd-schedule__name">Abs Circuit</em>
                                                </a>
                                            </li>

                                            <li class="cd-schedule__event">
                                                <a data-start="17:00" data-end="18:30" data-content="event-rowing-workout" data-event="event-2" href="#0">
                                                    <em class="cd-schedule__name">Rowing Workout</em>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="cd-schedule__group">
                                        <div class="cd-schedule__top-info"><span>Friday</span></div>

                                        <ul>
                                            <li class="cd-schedule__event">
                                                <a data-start="10:00" data-end="11:00" data-content="event-rowing-workout" data-event="event-2" href="#0">
                                                    <em class="cd-schedule__name">Rowing Workout</em>
                                                </a>
                                            </li>

                                            <li class="cd-schedule__event">
                                                <a data-start="12:30" data-end="14:00" data-content="event-abs-circuit" data-event="event-1" href="#0">
                                                    <em class="cd-schedule__name">Abs Circuit</em>
                                                </a>
                                            </li>

                                            <li class="cd-schedule__event">
                                                <a data-start="15:45" data-end="16:45" data-content="event-yoga-1" data-event="event-3" href="#0">
                                                    <em class="cd-schedule__name">Yoga Level 1</em>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div class="cd-schedule-modal">
                                <header class="cd-schedule-modal__header">
                                    <div class="cd-schedule-modal__content">
                                        <span class="cd-schedule-modal__date"></span>
                                        <h3 class="cd-schedule-modal__name"></h3>
                                    </div>

                                    <div class="cd-schedule-modal__header-bg"></div>
                                </header>

                                <div class="cd-schedule-modal__body">
                                    <div class="cd-schedule-modal__event-info"></div>
                                    <div class="cd-schedule-modal__body-bg"></div>
                                </div>

                                <a href="#0" class="cd-schedule-modal__close text--replace">Close</a>
                            </div>

                            <div class="cd-schedule__cover-layer"></div>
                        </div> */}
                    <div>
                        <h4>Minggu, 02 September</h4>
                        <hr />
                        <div className="row my-2">
                            <div className="card mx-3 my-2" style={{
                                width: "47%"
                            }}>
                                <div className="card-body row">
                                    <div className="col-3 text-center">
                                        <img src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" className="rounded-circle" width="80" height="80" alt="" />

                                    </div>
                                    <div className="col">
                                        <h5 className="card-title">Muhammad Fakhryan Zul</h5>
                                        <p className="card-text"><i className="fas fa-map-marker-alt"></i> Polinema</p>
                                        <p className="card-text"><i className="far fa-clock"></i> 7 PM</p>
                                        <p className="card-text"><i className="fas fa-graduation-cap"></i> Sebagai Mentor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card mx-3 my-2" style={{
                                width: "47%"
                            }}>
                                <div className="card-body row">
                                    <div className="col-3 text-center">
                                        <img src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" className="rounded-circle" width="80" height="80" alt="" />

                                    </div>
                                    <div className="col">
                                        <h5 className="card-title">Muhammad Fakhryan Zul</h5>
                                        <p className="card-text"><i className="fas fa-map-marker-alt"></i> Polinema</p>
                                        <p className="card-text"><i className="far fa-clock"></i> 7 PM</p>
                                        <p className="card-text"><i className="fas fa-graduation-cap"></i> Sebagai Mentor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4>Jum'at, 07 September</h4>
                        <hr />
                        <div className="row my-2">
                            <div className="card mx-3 my-2" style={{
                                width: "47%"
                            }}>
                                <div className="card-body row">
                                    <div className="col-3 text-center">
                                        <img src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" className="rounded-circle" width="80" height="80" alt="" />

                                    </div>
                                    <div className="col">
                                        <h5 className="card-title">Muhammad Fakhryan Zul</h5>
                                        <p className="card-text"><i className="fas fa-map-marker-alt"></i> Polinema</p>
                                        <p className="card-text"><i className="far fa-clock"></i> 7 PM</p>
                                        <p className="card-text"><i className="fas fa-graduation-cap"></i> Sebagai Mentor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
