import axios from "axios";
import { useForm } from "react-hook-form";

const AddBlogs = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios.post("http://localhost:5000/blogs", data).then((res) => {
      if (res.data.insertedId) {
        alert("Added SuccessFully");
        reset();
      }
    });
  };
  
  return (
    <div className="my-5">
      <h3 style={{ color: "#262339" }} className="fw-bold">
        Add Blog
      </h3>
      <hr />
      <div style={{ marginLeft: "1px", marginRight: "1px" }} className="row">
        <div className="top">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row text-start justify-content-center mx-0">

              <div className="col-lg-4">
                <label className="form-label">Image URL </label>
                <input
                  className="mb-4 form-control"
                  {...register("img")}
                  placeholder="Maximum (900 x 600)px"
                />
              </div>
              <div className="col-lg-4">
                <label className="form-label">Title*</label>
                <input
                  required
                  type="text"
                  className="mb-4 form-control"
                  {...register("title")}
                  placeholder="Title"
                />
              </div>

              <div className="col-lg-7">
                <label className="form-label">Details *</label>
                <textarea
                  type="text"
                  rows="6"
                  maxLength='200'
                  required
                  className="mb-4 form-control"
                  {...register("details")}
                  placeholder="Maximum Length 200 characters...."
                />
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

export default AddBlogs;
