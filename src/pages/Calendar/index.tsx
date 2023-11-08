import { useState } from 'react';

import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';

import { Header } from '@/components/Header';
import { CalendarEvent } from '@/domain/interfaces/CalendarEvent';
import { tokens } from '@/theme';
import { formatDate } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

export const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected: any) => {
        const title = prompt('Please enter a new title for your event');
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        }
    };

    const handleEventClick = (selected: any) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
            selected.event.remove();
        }
    };

    return (
        <Box m="50px 20px">
            <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

            <Box display="flex" justifyContent="space-between">
                {/* CALENDAR */}
                <Box flex="1 1 20%" sx={{ backgroundColor: colors.primary[400] }} p="15px" borderRadius="4px">
                    <List>
                        {currentEvents.map((event: CalendarEvent) => (
                            <ListItem
                                key={event.id}
                                sx={{ backgroundColor: colors.blueAccent[400], margin: '10px 0', borderRadius: '2px' }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box flex={'1 1 100%'} ml="15px">
                    <FullCalendar
                        height="75vh"
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                        }}
                        initialView="dayGridMonth"
                        editable
                        selectable
                        selectMirror
                        dayMaxEvents
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events: any) => setCurrentEvents(events)}
                        initialEvents={[
                            {
                                id: '12315',
                                title: 'All-day event',
                                date: '2023-11-02'
                            },
                            {
                                id: '12313',
                                title: 'Timed event',
                                date: '2023-11-01'
                            }
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
};
