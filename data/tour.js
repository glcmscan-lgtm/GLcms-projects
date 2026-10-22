// Book a Tour page (glcm.net/tour). Every Book a Tour button on the site links here.
// Tours are booked on the school's Google Calendar booking page (contact@glcm.net).
// To switch the calendar on, paste the booking page link into bookingUrl. In Google Calendar:
// open the tour booking page, Share, Website embed, Inline booking page, and copy the
// address inside src="...". While bookingUrl is empty, the page asks families to call instead.
export const tour = {
  bookingUrl: '',
  eyebrow: 'Book a Tour',
  title: 'Come see Guiding Light in person',
  text: 'Pick a time that works for your family. Tours take about an hour, so you can see the classrooms, meet our team, and ask every question you have.',
  hours: 'Tours start on the hour, Monday to Friday 9 am to 5 pm and Saturday 10 am to 4 pm.',
  expect: [
    { icon: 'clock', title: 'About an hour', text: 'Time to see the classrooms and ask your questions.' },
    { icon: 'smile', title: 'Nothing to bring', text: 'Just come as you are.' },
    { icon: 'door', title: 'One entrance', text: 'There is one door into the building.' },
    { icon: 'parking', title: 'Plenty of parking', text: 'Park anywhere around the building.' },
  ],
}
