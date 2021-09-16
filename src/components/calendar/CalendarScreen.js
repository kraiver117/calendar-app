import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import { Navbar } from '../ui/Navbar'
import { AddNewFab } from '../ui/AddNewFab'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal';
import { messages } from '../../helpers/calendar-messages-es'
import { uiOpenModal } from '../../redux/actions/ui';
import { eventSetActive } from '../../redux/actions/events';

import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es'

moment.locale('es')

const localizer = momentLocalizer(moment)

// const events = [{
//     title: 'Cumpleaños',
//     start: moment().toDate(),
//     end: moment().add(2, 'hours').toDate(),
//     user: {
//         _id: '123',
//         name: 'Angel'
//     }
// }]

export const CalendarScreen = () => {
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')
    const dispatch = useDispatch();
    const { events } = useSelector( state => state.calendar );

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal())
    }

    const onSelect = (e) => {
        dispatch(eventSetActive(e))
    }

    const onViewChange = (e) => {
        setLastView(e)
        localStorage.setItem('lastView', e)
    }

    //Custom CSS in React Big calendar events
    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    }

    return (
        <div className="calendar-screen">
            <Navbar />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChange}
                view={lastView}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent
                }}
            />
            <AddNewFab />
            <CalendarModal />
        </div>
    )
}
