import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddEditProduct(){
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
  
    useEffect(() => {
        if (id != undefined) {
          const apiUrl = "https://localhost:4320/products/" + id;
          fetch(apiUrl)
            .then((res) => res.json())
            .then((res) => setData(res));
        }
      }, []);
    
    return(
        <>
            <div class="form-group row">
                <div className="row mt-2">
                    <label for="text2" class="col-5 col-form-label">Product ID :</label> 
                    <div class="col">
                    <input type="text" value={data.id}
                        onChange={(e) => {
                            setData({ ...data, id: e.target.value });
                        }} />
                    </div>
               </div>

               <div className="row mt-2">
                    <label for="text2" class="col-5 col-form-label">Product Name :</label> 
                    <div class="col">
                    <input type="text" value={data.name}
                        onChange={(e) => {
                            setData({ ...data, name: e.target.value });
                        }} />
                    </div>
               </div>
               <div className="row mt-2">
                    <label for="text2" class="col-5 col-form-label">Product Company Image :</label> 
                    <div class="col">
                    <input type="text" value={data.frountImage}
                        onChange={(e) => {
                            setData({ ...data, frountImage: e.target.value });
                        }} />
                    </div>
               </div>

               <div className="row mt-2">
                    <label for="text2" class="col-5 col-form-label">product Image</label> 
                    <div class="col">
                    <input type="text" value={data.image}
                        onChange={(e) => {
                            setData({ ...data, image: e.target.value });
                        }} />
                    </div>
               </div>

               <div className="row mt-2">
                    <label for="text2" class="col-5 col-form-label">Product Description : </label> 
                    <div class="col">
                    <input type="text" value={data.description}
                        onChange={(e) => {
                            setData({ ...data, description: e.target.value });
                        }} />
                    </div>
               </div>
            </div>

            <button
                onClick={() => {
                    if(id !== undefined){
                        const apiUrl =
                        "https://localhost:4320/products/" +id;
                        fetch(
                        apiUrl,
                        {
                            method: "PUT",
                            body: JSON.stringify(data),
                            headers: { "Content-Type": "application/json" },
                        },
                        []
                        )
                        .then((res) => res.json())
                        .then((res) => {
                            navigate("/home");
                        });
                    }
                    else{
                        const apiUrl =
                        "https://localhost:4320/products";
                        fetch(
                        apiUrl,
                        {
                            method: "POST",
                            body: JSON.stringify(data),
                            headers: { "Content-Type": "application/json" },
                        },
                        []
                        )
                        .then((res) => res.json())
                        .then((res) => {
                            navigate("/home");
                        });
                    }
                }}
                name="submit"
                className="btn btn-outline-primary mt-2"
            >
                {id != undefined && "Edit  "}
                {id == undefined && "Add  "}
                
                Product
            </button>

        </>
    );
}