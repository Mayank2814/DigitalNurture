import image from "./assets/360.png";
export default function RentalShowCase() {
  const name = "Max";
  const price = 10000;
  const location = "Bihar";

  return (
    <>
      <h1>Rental Homes</h1>
      <img src={image} alt="360" />
      <h2>{name}</h2>
      <h3 className={price > 10000 ? "font-red" : ""}>{price}</h3>
      <h4>{location}</h4>
    </>
  );
}
