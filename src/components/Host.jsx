function Host({ data }) {
  return (
    <div className="host-profil">
      <div className="host">
        <h3>{data.name}</h3>
      </div>
      <div className="badge">
        <img src={data.picture} alt="host face" />
      </div>
    </div>
  );
}

export default Host;
