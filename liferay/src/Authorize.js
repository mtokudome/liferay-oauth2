
function Authorize() {

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
       window.location.replace('http://localhost:8080/o/oauth2/authorize?response_type=code&client_id=id-865d87c6-481d-6318-39a9-4f22b65822');

    } catch (error) {
    }
  }

 return (

   <div className='Authorize'>
     <h2>Authorize</h2>
     <form onSubmit={handleLogin}>

       <button type="submit">Authorize</button>
     </form>

   </div>

 );
}

export default Authorize;
