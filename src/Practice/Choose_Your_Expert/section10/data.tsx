export const data = {
  title: "Choose Date & Time",
  dates: [
    { label: "Today", active: true },
    { label: "Tomorrow", active: false },
    { label: "Thu, 15 Oct", active: false },
    { label: "Fri, 16 Oct", active: false },
    { label: "Sat, 17 Oct", active: false }
  ],
  timeSlots: [
    {
      period: "Morning",
      slots: ["10:00 AM", "11:00 AM"]
    },
    {
      period: "Afternoon",
      slots: ["2:00 PM", "3:30 PM"]
    },
    {
      period: "Evening",
      slots: ["5:30 PM", "6:30 PM", "7:30 PM"]
    }
  ],
  cta: "Continue to Booking"
};
