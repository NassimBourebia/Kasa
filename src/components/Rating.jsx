function Rating({ data }) {
  const array = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {array.map((star, index) => (
        <i
          key={index}
          className={`star ${data.rating >= star ? "star-red" : "star-grey"}`}
        ></i>
      ))}
    </div>
  );
}

export default Rating;
