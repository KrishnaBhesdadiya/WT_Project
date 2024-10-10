import { Link, useNavigate, useParams } from "react-router-dom";
import AddEditProduct from "./AddEditproduct";

export default function Sephora(){
    const { id } = useParams();
    const navigate = useNavigate();

    return(
        <>
            <div className=" w-100 h-100 container">
                <div className="row mt-3 text-center">
                    <h2>5. Sephora</h2>
                    <div className="col ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8jDb7ijk2Q3urS7kzH5BU074KzjYNVJLIg&s" className="img-thumbnail" />
                    </div>
                    <p>
                        <h3>Description :</h3>
                        Sephora is a powerful beauty presence in countries around the world thanks to our unparalleled assortment of prestige products in every category, 
                        unbiased service from beauty experts, interactive shopping environment, and relentless innovation, including our expanding
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
                    <Link to={`/sephoraProduct/edit/:id`} element={<AddEditProduct />} className="btn btn-outline-info w-25 mx-auto"> Edit Product</Link>
                    <Link to={`/home`} element={<AddEditProduct />} className="btn btn-outline-info w-25 mx-auto">Back</Link>
                </div>  

            </div>
        </>
    )
}