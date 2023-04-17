import axios from "axios";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios.post("http://localhost:5000/doctor", data).then((res) => {
      if (res.data.insertedId) {
        alert("Added SuccessFully");
        reset();
      }
    });
  };
  
  return (
    <div className="my-5">
      <h3 style={{ color: "#262339" }} className="fw-bold">
        Add a Doctor
      </h3>
      <hr />
      <div style={{ marginLeft: "1px", marginRight: "1px" }} className="row">
        <div className="top">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row text-start">

              <div className="col-lg-6">
                <label className="form-label">Image URL </label>
                <input
                  className="mb-4 form-control"
                  {...register("img")}
                  placeholder="Image URL.."
                />
              </div>
              <div className="col-lg-6">
                <label className="form-label">Full Name *</label>
                <input
                  required
                  type="text"
                  className="mb-4 form-control"
                  {...register("name")}
                  placeholder="Doctor Name"
                />
              </div>

              <div className="col-lg-6">
                <label className="form-label">Department *</label>
                <input
                  type="text"
                  required
                  className="mb-4 form-control"
                  {...register("department")}
                  placeholder="Department Name"
                />
              </div>
              <div className="col-lg-6 mb-4">
                <label for="class">Price *</label>
                <input
                  required
                  className="form-control"
                  {...register("price")}
                  type="number"
                  placeholder="$"
                />
              </div>
              <div className="col-lg-6 mb-4">
                <label for="class">Start *</label>
                <input required {...register("From")} type="time" className="form-control"></input>
              </div>
              <div className="col-lg-6 mb-4">
                <label for="class">End *</label>
                <input required {...register("To")} type="time" className="form-control"></input>
              </div>
            </div>

            <input
              className="btn btn-outline-success"
              value="Submit"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
