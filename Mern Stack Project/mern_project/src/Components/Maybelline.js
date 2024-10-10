import { Link, useNavigate, useParams } from "react-router-dom";
import AddEditProduct from "./AddEditproduct";

export default function Maybelline(){
    const { id } = useParams();
    const navigate = useNavigate();

    return(
        <>
            <div className=" w-100 h-100 container">
                <div className="row mt-3 text-center">
                    <h2>3.Maybelline</h2>
                    <div className="col ">
                        <img src="data:image/jpeg;base64,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" className="img-thumbnail" />
                    </div>
                    <p>
                        <h3>Description :</h3>
                        Maybelline New York is the number one cosmetic brand in the world, available in over 120 countries. By combining technologically advanced formulations with on-trend expertise and New York edge,
                         Maybelline New York's mission is to offer innovative, accessible and effortless cosmetics for every woman.
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
                    <Link to={`/lakmeProduct/edit/:id`} element={<AddEditProduct />} className="btn btn-outline-info w-25 mx-auto"> Edit Product</Link>
                    <Link to={`/home`} element={<AddEditProduct />} className="btn btn-outline-info w-25 mx-auto">Back</Link>
                </div>  
            </div>
        </>
    )
}