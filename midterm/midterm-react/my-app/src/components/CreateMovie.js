import React from "react";

const CreateMovies = ({ onChangeForm, createMovie }) => {
  return (
    <div className="container">
      <div className="row">
        <div
          style={{
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            border: "3px solid rgba(0, 0, 0, 0.2)",
          }}
          className="p-3 mb-2 bg-secondary text-white col-md-7 mrgnbtm"
        >
          <h2>Create Movies</h2>
          <form>
            <div className="row">
              <div className="form-group col-md-10">
                <label htmlFor="exampleInputEmail1">Title</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="title"
                  id="title"
                  aria-describedby="emailHelp"
                  placeholder="Movie Title"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-10">
                <label htmlFor="exampleInputPassword1">Genre</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="genre"
                  id="genre"
                  placeholder="Movie Genre"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-10">
                <label htmlFor="exampleInputEmail1">Director</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="director"
                  id="director"
                  aria-describedby="emailHelp"
                  placeholder="Director Name"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-5">
                <label htmlFor="exampleInputEmail1">Release</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="release_year"
                  id="release_year"
                  aria-describedby="emailHelp"
                  placeholder="Release Year"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => createMovie()}
              className="btn btn-warning"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateMovies;
