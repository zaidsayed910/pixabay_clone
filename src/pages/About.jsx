import React from "react";

const About = () => {
  return (
    <>
      <div className="conatiner my-5 mx-5">
        <div className="card text-center">
          <div className="card-header">About </div>
          <div className="card-body">
            <h5 className="card-title">Pixabay Clone</h5>
            <p className="card-text">
              This is a pixabay Clone Created in Reactjs project <br />
            </p>
                That Includes all topic
            
            <div className="">
              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      UseState
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    class="accordion-collapse collapse show"
                  >
                    <div class="accordion-body">
                        {/* <iframe src="https://react.dev/reference/react/useState#adding-state-to-a-component" frameborder="0" width="100%"></iframe> */}
                        <code>useEffect</code>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      UseEffect
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    class="accordion-collapse collapse"
                  >
                    <div class="accordion-body">
                    <code>UseEffect</code>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTen"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTen"
                    >
                      Map
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTen"
                    class="accordion-collapse collapse"
                  >
                    <div class="accordion-body">
                      <code>Map</code>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      props
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    class="accordion-collapse collapse"
                  >
                    <div class="accordion-body">
                      <code>props</code>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFour"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFour"
                    >
                      Components
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFour"
                    class="accordion-collapse collapse"
                  >
                    <div class="accordion-body">
                      <code>Components</code>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFive"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFive"
                    >
                      Context
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFive"
                    class="accordion-collapse collapse"
                  >
                    <div class="accordion-body">
                      <code>Context</code>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseSix"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseSix"
                    >
                      Pages with Navigations
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseSix"
                    class="accordion-collapse collapse"
                  >
                    <div class="accordion-body">
                      <code>Pages with Navigations</code>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseSeven"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseSeven"
                    >
                      Routing with react router dom
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseSeven"
                    class="accordion-collapse collapse"
                  >
                    <div class="accordion-body">
                      <code>Routing with react router dom</code>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseEight"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseEight"
                    >
                      Fetch Api using Pixabay Api
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseEight"
                    class="accordion-collapse collapse"
                  >
                    <div class="accordion-body">
                      <code>Fetch Api using Pixabay Api</code>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseNine"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseNine"
                    >
                      Conditional Rendering
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseNine"
                    class="accordion-collapse collapse"
                  >
                    <div class="accordion-body">
                      <code>Conditional Rendering</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="https://zaidsayed.netlify.app/" target="_blank" className="btn btn-primary mt-4">
              Check Portfolio
              <i class="bi bi-box-arrow-up-right p-2"></i>
            </a>
          </div>
          <div className="card-footer text-body-secondary">2 days ago</div>
        </div>
      </div>
    </>
  );
};

export default About;
