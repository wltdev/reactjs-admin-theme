import { ViewApi } from '@fullcalendar/core/index.js';

export interface CalendarEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
}

export interface CalendarSelectedEvent {
    dateStr: string;
    startStr: string;
    endStr: string;
    allDay: boolean;

    view: ViewApi;
}
