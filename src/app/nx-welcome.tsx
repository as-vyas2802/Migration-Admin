export function NxWelcome({ title }: { title: string }) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          // gap: '80%',
          background: 'lightgray',
          height: '60px',
          alignItems: 'center',
          paddingLeft: '3%',
        }}
      >
        <div style={{ fontSize: '25px', textTransform: 'capitalize' }}>
          MyLogo
        </div>
        <div style={{ display: 'flex', gap: '50%', paddingLeft: '75%' }}>
          <div style={{ textTransform: 'capitalize', fontSize: '18px',cursor: "pointer" }}>
            HOME
          </div>
          <div style={{ textTransform: 'capitalize', fontSize: '18px',cursor: "pointer" }}>
            ABOUT
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '5%' }}>
        <div
          style={{
            width: '50%',
            height: '300px',
            background: 'BLUE',
            marginBottom: '10%',
            marginTop: '10%',
            borderRadius: '10px',
            backgroundColor: "#E0E2EC",
            marginLeft: "3%"
          }}
        >
        <h1 style={{fontStyle: "normal",
    fontSize: "25px",
    textDecoration: "underline",
    color: "blue",
    textAlign: "center",
    marginTop: "20%",
    cursor: "pointer"}}>
        HOME PAGE </h1> 
        </div>
        <div
          style={{
            width: '50%',
            height: '300px',
            background: 'brown',
            marginBottom: '10%',
            marginTop: '10%',
            borderRadius: '10px',
            backgroundColor: "#E0E2EC",
            marginRight: "3%"
          }}
        >
        <h1 style={{fontStyle: "normal",
    fontSize: "25px",
    textDecoration: "underline",
    color: "blue",
    textAlign: "center",
    marginTop: "20%",
    cursor: "pointer"}}>ABOUT PAGE </h1>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          background: 'black',
          height: '200px',
          alignItems: 'center',
          paddingLeft: '3%',
          color: 'white',
          fontSize: '25px',
        }}
      >
        <div> MyLogo</div>
        <div style={{ fontSize: '15px' }}>
          <div  style={{ fontSize: '15px',cursor: "pointer" }}>HOME</div>
          <div  style={{ fontSize: '15px',cursor: "pointer" }}>ABOUT</div>
        </div>
      </div>
    </div>
  );
}

export default NxWelcome;
