import React from 'react'

export const CalendarEvent = ({event}) => {
    const { title, user } = event

    return (
        <div>
            <string>{ title }</string>
            <small>- {user.name}</small>
        </div>
    )
}
