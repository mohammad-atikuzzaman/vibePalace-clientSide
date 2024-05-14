const BookedRoom = ({ room, handleDisplay, handleDisplayReview }) => {
  // console.log(handleDisplay);
  // console.log(room.date);

  return (
    <tr>
      <td>
        <img src={room.picture} alt="" className="w-44" />
      </td>
      <td>
        <button
          onClick={() => handleDisplay(room._id, room.date)}
          className="btn btn-info">
          Update Date
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDisplayReview(room._id)}
          className="btn btn-outline btn-warning">
          Give Review
        </button>
      </td>
      <td>
        <button className="btn btn-error">Cancel</button>
      </td>
    </tr>
  );
};

export default BookedRoom;
