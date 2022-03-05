

const Booking = ({bookingObj, bookingDetails}) => {

    let bookings = bookingDetails.map(bookings => <li>{bookings.name}</li>)
    console.log(bookings,bookingDetails)
    
    return(
        <ul >
            {bookings}
        </ul>
    )
}
export default Booking;