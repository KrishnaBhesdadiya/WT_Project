import { Link, useNavigate, useParams } from "react-router-dom";
import AddEditProduct from "./AddEditproduct";

export default function MAC(){
    const { id } = useParams();
    const navigate = useNavigate();

    return(
        <>
            <div className=" w-100 h-100 container">
                <div className="row mt-3 text-center">
                    <h2>2. M.A.C.</h2>
                    <div className="col ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzb85-lXFbSV4kGiGheCV1UCPpeNEykJAdu92r18tZXOgf_WUyggzD9qJ-Cwmv_2wLm4&usqp=CAU" className="img-thumbnail" />
                    </div>
                    <p>
                        <h3>Description :</h3>
                        M A C Cosmetics, stylized as M·A·C, is a Canadian cosmetics manufacturer founded in Toronto in 1984 by Frank Toskan and Frank Angelo. 
                        The company has been headquartered in London since becoming a subsidiary of Estée Lauder Companies in 1998.
                         MAC is an acronym for Make-Up Art Cosmetics.
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
                    <Link to={`/macProduct/edit/:id`} element={<AddEditProduct />} className="btn btn-outline-info w-25 mx-auto"> Edit Product</Link>
                    <Link to={`/home`} element={<AddEditProduct />} className="btn btn-outline-info w-25 mx-auto">Back</Link>
                </div>  
            </div>
        </>
    )
}