import { useState } from "react";

const Form = ({
  movieDetails,
  setShowForm,
  bookingDetails,
  setBookingDetails,
}) => {
  const [username, setUsername] = useState("");
  const [pNum, setPNum] = useState("");
  let bookingObj = [];

  function onFormClose() {
    setShowForm(false);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    if (!username || !pNum) {
      alert("Please fill all details");
    } else {
      setBookingDetails(
        bookingDetails.concat({
          username,
          pNum,
          date: new Date(),
          movie: movieDetails.show.name,
        })
      );

      localStorage.setItem("booking-details", JSON.stringify(bookingDetails));
      alert(`${movieDetails.show.name} booked for ${username}`);
      setUsername("");
      setPNum("");
    }
  }

  return (
    <>
      <form
        onSubmit={(e) => onFormSubmit(e)}
        className="detail-form bg-gray-100 absolute w-fit h-fit md: fixed top-32 right-44 h-3/5 flex flex-col w-4/5 left-20 text-center "
      >
        <button
          onClick={onFormClose}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-1 rounded w-fit absolute right-0"
        >
          close
        </button>
        <h1 className="text-2xl text-center py-2">
          Booking for show{" "}
          <span className="text-teal-600">{movieDetails.show.name}</span>{" "}
        </h1>
        <label htmlFor="name"> Name</label>{" "}
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username || ""}
          className="w-fit self-center mb-2 border-black border-2"
          type="text"
          placeholder="name"
        />
        <label htmlFor="number">Phone Number</label>{" "}
        <input
          onChange={(e) => {
            setPNum(e.target.value);
          }}
          value={pNum || ""}
          className="w-fit self-center border-black border-2"
          type="number"
          placeholder="number"
        />
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-1 rounded w-fit mt-4 self-center"
        >
          Book Now
        </button>
      </form>
    </>
  );
};
export default Form;
