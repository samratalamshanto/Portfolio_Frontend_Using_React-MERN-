import React from "react";

const CardResume = (props) => {
  const { title, year, gpa, desc, img } = props;
  return (
    <>
      <section>
        <div className="box box_shadow">
          <div className="title_content">
            <div className="image">
              <img src={img} />
            </div>
            <div className="title">
              <h2>{title}</h2>
              <span>{year}</span>
              <h5>GPA : {gpa}</h5>
            </div>

          </div>
          <hr />
        </div>
      </section>
    </>
  );
};

export default CardResume;
