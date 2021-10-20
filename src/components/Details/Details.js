import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/details.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const foundDetail = details.find((detail) => detail.id === id);
  console.log(foundDetail);

  return (
    <div>
      {/* <h2>id {foundDetail?.id}</h2> */}
      <div className="m-2">
        <div class="card single-card">
          <img className="img-service w-50" src={foundDetail?.img} className="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{foundDetail?.name}</h5>
            <p class="card-text">{foundDetail?.description}</p>
            <br />

          </div>

        </div>
      </div>
    </div>
  );
};

export default Details;
