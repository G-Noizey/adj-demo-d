import TestController from "./modules/test/test.controller";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ADJDemo</a>
        </div>
      </nav>

      <div className="container mt-5">
        <h1>Welcome to ADJDemo</h1>
        <hr />
        <button
          onClick={() => TestController.callToAPI()}
          className="btn btn-success"
        >
          Llamar a mi API
        </button>
      </div>
    </>
  );
}

export default App;
