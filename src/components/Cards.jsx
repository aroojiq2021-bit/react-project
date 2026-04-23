function Card({title,desc,btn,img}) {
  return (
    <div className="card">
        <img  className="w-full overflow-hidden h-40"
        src={img} alt="" />
      <h2>{title}</h2>
      <p>{desc}</p>
      <button>{btn}</button>
    </div>
  );

}

export default Card;