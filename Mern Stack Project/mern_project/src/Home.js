import { Link } from "react-router-dom";
import Products from './Products'

export default function Home(){
  return(
    <>
      <div className="row mt-3" >
        <img className="img-thumbnail" src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-06/240610-beauty-awards-2024-face-makeup-winners-vl-social-74fb90.jpg" />
      </div>
      <div className="row text-center">
        <Link to={`/products`} element={<Products />} className="btn btn-outline-secondary w-25 mt-2 mx-auto" >
        Go to Products
        </Link>
      </div>
    </>
  );
}