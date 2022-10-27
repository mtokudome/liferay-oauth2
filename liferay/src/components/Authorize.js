function Authorize({handleCode}) {

  const urlParams = new URLSearchParams(window.location.search);

  function handleAuthorize(event) {
    event.preventDefault();

    try {
       window.location.replace('http://localhost:8080/o/oauth2/authorize?response_type=code&client_id=id-252408fa-51ab-d8b5-0872-a7183222c6');
    } catch (e) {
      throw new Error(e);
    }
  }

  const codeParams = urlParams.get('code');

  function getCode() {
    if(codeParams) {
      handleCode(codeParams);
    }
  }

 return (

   <div>
     <h2>Authorize</h2>
     <form onSubmit={handleAuthorize}>
       <button type='onSubmit'>Authorize</button>
     </form>
      <button onClick={getCode} disabled={!codeParams}>Get Authorization Code</button>
   </div>

 );
}

export default Authorize;
