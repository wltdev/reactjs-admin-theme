import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    // fonts
    --font-size-heading: 1.5rem;
    --font-size-body: 1rem;

    // structure
    --padding-base: 1rem;
    --padding-small: 0.5rem;
    --border-radius: 8px;
    --max-width: 600px;
    --navbar-height: 65px;
    --transition: 0.5s ease-in-out;
    --box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
    --rightSidebar-width: 325px;

    // colors
    --color-background: #ebefed;
    --color-background-hover: #c9d8d0;
    --color-primary: #3A6647;
    --color-primary-dark: #294732;
    --color-secondary: #6B9D4A;
    --color-tertiary: #87A851;
    --color-text: #464646;
    --color-gray: #A1A1A7;
    --color-black: #373848;
    --color-background-secondary: #ebefed;
    --color-background-dairy: #ece2d7;
    --color-light: #E2EBE3;
    --color-error: #D35E4B;

    --filter-black: invert(0%) sepia(0%) saturate(0%) hue-rotate(324deg) brightness(96%) contrast(104%);
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  input, textarea, select, a, div {
    -webkit-tap-highlight-color: transparent;
  }


  ul {
    list-style: none;
  }

  body, input, button {
    font: 14px 'Myriad Pro', sans-serif;
    font-family: "Myriad Pro", Myriad, "Liberation Sans", "Nimbus Sans L", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  html, body, #root {
    margin: 0;
    background-color: #f8f8fd;
    height: 100%;
    scroll-behavior: smooth;
  }

  button {
    cursor: pointer;
  }

  .MuiInputBase-adornedStart {
    gap: 10px !important;
  }

  .MuiLoadingButton-root {
    text-transform: none !important;
  }

  /* .Mui-checked {
      border: 2px solid var(--color-primary) !important;
  } */

  /* Full Calendar customization */

  .fc .fc-button {
    background-color: unset !important;
    border: unset !important;
    border-radius: unset !important;
    color: var(--color-primary) !important;

    &.active {

    }
  }

  .fc-scrollgrid .fc-scrollgrid-liquid {
    border-left: unset !important;
    border-bottom: unset !important;
    border-right: unset !important;
  }

  .fc .fc-scrollgrid-section-header .fc-theme-standard th {
    border: unset !important;
  }

  .fc .fc-daygrid-day-frame {
    padding: 0.5rem;
  }

  .fc .fc-daygrid-day-top {
    font-size: 1rem;
    height: 21px;
    color: #9BA1A9;
    justify-content: center;
    align-items: center;
  }

  .fc .fc-daygrid-day.fc-day-today {
    background-color: unset !important;

    > .fc-daygrid-day-top {
      color: red !important;
    }
  }

  .fc .fc-daygrid-day.fc-day-today .fc-daygrid-day-top {
    /* background: #F0F1F3; */
    background: #EBEFED;
    border-radius: 4px;
    color: #194727 !important;
    font-weight: 700;
  }

  .fc .fc-timegrid-col.fc-day-today:has(.timeGridWeek) {
    background-color: transparent !important;
  }

  .fc .fc-daygrid-day-number {
    height: 100% !important;
    /* align-items: center !important; */
  }


  .fc-theme-standard .fc-scrollgrid {
    /* border: unset !important; */
    border-top: 1px solid #F0F1F3;
    border-bottom: unset !important;
    border-right: unset !important;
    border-left: unset;
  }

  .fc-theme-standard th {
    border-bottom: unset !important;
    border-top: 1px solid #F0F1F3;
    border-right: unset !important;
    border-left: unset !important;

    .fc-day-today .fc-scrollgrid-sync-inner {
      border-bottom: 2px solid var(--color-primary) !important;
      padding: 0 5px !important;

      > span {
        color: var(--color-primary) !important;
      }
    }
  }

  .fc-theme-standard td {
    border-right: unset !important;
    border-top: unset !important;
    border-left: 1px solid #F0F1F3;
    border-bottom: 1px solid #F0F1F3;

    > .fc-timegrid-slot {
      border-left: unset !important;
    }

    .fc-timegrid-slot {
      /* border-left: unset !important; */
    }
  }

  .fc-timegrid-slot {
    border: none !important;
  }

  .fc-timegrid-col {
    border-bottom: 1px solid #F0F1F3;
  }

  /* .fc-theme-standard td:has(.fc-timegrid-slot) {
      border-right: unset !important;
      border-top: unset !important;
      border-left: unset !important;
      border-bottom: 1px solid #F0F1F3;
  } */

  .fc .fc-timegrid-slot-label {
    color: #9BA1A9;
    font-weight: 600;
    font-size: 14px;
  }

  .fc-event {
    &:hover {
      background-color: unset !important;
    }
  }

  /* End Full Calendar customization */

  /** Custom time grid calendar */
  .fc .fc-daygrid-day {
    padding: 8px;
  }

  .fc .fc-daygrid-day-frame {
    padding: 0 !important;
  }

  .fc .fc-daygrid-day.fc-day-today {
    > .fc-scrollgrid-sync-inner {
      padding: 0 5px !important;
      background-color: #EBEFED !important;
    }
  }

  .fc .fc-timegrid-col.fc-day-today {
    background-color: transparent !important;
  }

  .fc-direction-ltr .fc-daygrid-event.fc-event-end {
    margin-right: unset !important;
  }

  .fc-direction-ltr .fc-daygrid-event.fc-event-start {
    margin-left: unset !important;
  }


  .fc-v-event .fc-event-main {
    color: unset !important;
  }

  .fc-event-title {
    font-size: 0.75rem !important;
    font-weight: 400 !important;
    word-wrap: break-word;

    &.holiday {
      font-size: 600;
    }
  }



  .fc-v-event {
    /* background-color: transparent !important; */
    border: unset !important;
  }

  .fc-v-event:has(.timeGridWeek) {
    .timeGridWeek {
      height: 100%;
      display: flex;
      align-items: start;
      border-radius: unset !important;
    }

    background-color: #e5e5e570;

    &:hover {
      background-color: #e5e5e570 !important;
    }

    .fc-daygrid-event-dot {
      height: 95% !important;
      border-radius: 100px !important;
    }
  }

  .fc-v-event:has(.aqua) {
    background-color: #00ffff1f !important;

    &:hover {
      background-color: #00ffff1f !important;
    }
  }

  .fc-v-event:has(.pink) {
    background-color: #ffc0cb3d !important;

    &:hover {
      background-color: #ffc0cb3d !important;
    }
  }

  .fc-v-event:has(.blue) {
    background-color: #0000ff2e !important;

    &:hover {
      background-color: #0000ff2e !important;
    }
  }

  .fc-v-event:has(.red) {
    background-color: #ff000033 !important;

    &:hover {
      background-color: #ff000033 !important;
    }
  }

  .fc-v-event:has(.darkOrange) {
    background-color: #ff8c002e !important;

    &:hover {
      background-color: #ff8c002e !important;
    }
  }

  .fc-v-event:has(.green) {
    background-color: #0080002b !important;

    &:hover {
      background-color: #0080002b !important;
    }
  }

  .fc-v-event:has(.purple) {
    background-color: #8000802e !important;

    &:hover {
      background-color: #8000802e !important;
    }
  }

  .fc .fc-daygrid-day-frame:has(.holiday) { 
    background-color: #ff000033 !important;
  }

  .fc .fc-timegrid-col-frame:has(.holiday) { 
    background-color: #ff000033 !important;
  }
`;
