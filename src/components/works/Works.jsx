import "./works.scss";

const Works = ({img, link}) => {
  return (
    <div className="works" id="works">
       <div className="w">
         <h3 className="card-title">Title</h3>
         <p className="card-text">Text</p>
       </div>
       <a href={link} target="_blank" rel="noreferrer">
         <img src={img} alt="" className="w-img" />
       </a>
    </div>
  );
};


export default Works;
