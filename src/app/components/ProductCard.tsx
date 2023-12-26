import Image from "next/image";
import car from "../../assets/car.jpg";
export default function ProductCard() {
  return (
    <div className="w-80 px-5 pt-3 hover:scale-110 duration-300 rounded-xl h-64 bg-slate-400 ">
      <Image className="rounded-lg " src={car} alt="product image" />
      <p>subaru</p>
      <p>$20,000</p>
    </div>
  );
}
