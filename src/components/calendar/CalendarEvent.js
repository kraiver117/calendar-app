import React from 'react'

export const CalendarEvent = ({event}) => {
    const { title, user } = event

    return (
        <div>
            <p>{ title }</p>
            <small>- {user.name}</small>
        </div>
    )
}
