import Form from "./Form";
import { useState } from "react";

const Details = ({
  movieDetails,
  bookingDetails,
  setBookingDetails,
  bookingObj,
}) => {
  //   console.log(movieDetails.show.name);
  const [showForm, setShowForm] = useState(false);

  let regEx = /(<([^>]+)>)/gi;
  function onBookShowClick() {
    console.log(movieDetails.show.id);
    setShowForm(!showForm);
  }
  return (
    <>
      {movieDetails.show ? (
        <div className="details fixed overflow-scroll md:fixed w-3/5 right-0 h-full ">
          <h1 className="text-center text-teal-900 text-3xl">
            {movieDetails.show.name}
          </h1>
          {/* <span className="m-auto">Rating {movieDetails.show.rating.average}</span> */}
          <img
            className="m-auto"
            src={`${movieDetails.show.image.medium}`}
            alt="poster"
          />
          <p className="text-center">
            {movieDetails.show.summary
              ? movieDetails.show.summary.replace(regEx, "")
              : "No Summary Found"}
          </p>
          <button
            onClick={onBookShowClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex m-auto my-2 mb-20 "
          >
            Book Show
          </button>
          {showForm ? (
            <Form
              movieDetails={movieDetails}
              showForm={showForm}
              setShowForm={setShowForm}
              bookingDetails={bookingDetails}
              setBookingDetails={setBookingDetails}
              bookingObj = {bookingObj}
            />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default Details;
