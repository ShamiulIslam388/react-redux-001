const UserCard = (props) => {
  const { url, profession, likes, name, email, location } = props.user;
  return (
    <div
      style={{
        width: "300px",
        height: "500px",
        margin: "0 auto",
        border: "1px solid #ccc",
        padding: "10px 20px",
        textAlign: "left"
      }}
    >
      <img src={url} alt={name} style={{ width: "100%" }} />
      <p>
        I am <b>{profession.map((p) => p + ", ")}</b>{" "}
      </p>
      <p>
        I like <b>{likes.map((l) => l + ", ")}</b>{" "}
      </p>
      <hr />
      <p>
        Name: <b style={{ textTransform: "uppercase" }}>{name}</b>
      </p>
      <p>
        Email: <b>{email}</b>
      </p>
      <p>
        Location: <b>{location}</b>
      </p>
    </div>
  );
};

export default UserCard;
