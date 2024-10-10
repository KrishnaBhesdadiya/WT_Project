import { Link, useNavigate, useParams } from "react-router-dom";
import AddEditProduct from "./AddEditproduct";

export default function Lakme(){
    const { id } = useParams();
    const navigate = useNavigate();

    return(
        <>
            <div className=" w-100 h-100 container">
                <div className="row mt-3 text-center">
                    <h2>1.Lakmé</h2>
                    <div className="col ">
                        <img src="https://www.jagranimages.com/images/newimg/04072023/04_07_2023-best_lakme_products__23461161.jpg" className="img-thumbnail" />
                    </div>
                    <p>
                        <h3>Description :</h3>
                     Lakmé was launched in 1952, and was the first successful cosmetics brand in India. 
                    The brand was named after the French opera Lakmé, which is the French version of Lakshmi, the goddess of wealth and beauty.
                    </p>
                    <button
                        className="btn btn-outline-danger w-25 mx-auto"
                        onClick={() => {
                        const apiUrl =
                            "https://localhost:4320/products/" + id;

                        fetch(apiUrl, { method: "DELETE" })
                            .then((res) => res.json())
                            .then((res) => {
                            navigate("/home");
                            });
                        }}
                    >
                        Delete Product
                    </button>
                    <Link to={`/products/edit/:id`} element={<AddEditProduct />} className="btn btn-outline-info w-25 mx-auto"> Edit Product</Link>
                    <Link to={`/home`} className="btn btn-outline-info w-25 mx-auto">Back</Link>
                </div>  
            </div>
        </>
    )
}