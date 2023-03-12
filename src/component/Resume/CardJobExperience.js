import React from "react";

const CardJobExperience = (props) => {
  const { title, year, skills, desc, img } = props;
  return (
    <>
      <section>
        <div className="box box_shadow">
          <div className="title_content">
            <div className="image1">
              <img src={img} />
            </div>
            <div className="title">
              <h2>{title}</h2>
              <span>{year}</span>
              <h4><b>Skills :</b> {skills}</h4>
            </div>
          </div>
          <hr />
        </div>
      </section>
    </>
  );
};

export default CardJobExperience;
