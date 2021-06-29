import { useState, useEffect } from "react";
import Axios from "axios"; // to make API calls

//export function Projects() {
export const Projects = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  delete process.env["http_proxy"];
  delete process.env["HTTP_PROXY"];
  delete process.env["https_proxy"];
  delete process.env["HTTPS_PROXY"];

  useEffect(() => {
    Axios.get("http://localhost:8080/api/get").then((res) => {
      console.log(res);
    });
  }, []); // Axios is not working

  const submitProject = () => {
    // POST REQ
    Axios.post("http://localhost:8080/api/insert", {
      project_name: name,
      email_id: email,
    })
      .then(() => {
        alert("Successful insert!");
      })
      .catch(function (error) {
        throw error;
      });
  };

  return (
    <div id="projects" className="App">
      {/* <h1> IAJES React CRUD App</h1> */}
      <div className="add_project_div container">
        <div className="col-md-8">
          <div className="row">
            <div
              className="section-title"
              style={{ margin: 150, paddingLeft: 350 }}
            >
              <h2>Projects</h2>
              <button
                type="button"
                className="btn btn-custom btn-lg"
                data-toggle="modal"
                data-target="#exampleModal"
                data-whatever="@getbootstrap"
              >
                Add Project
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Update begining */}
      <div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  * Required Fields
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">


                {/*Adding Form start*/}
                <form className="add_project_form">
                  <div className="in_container form-group">
                    <label /*htmlFor="p_name"*/ style={{ fontSize: 15 }}>
                      Project Name*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="ProjectName"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      required
                    />
                  </div>

                  <div className="in_container form-group">
                    <label /*htmlFor="p_email"*/ style={{ fontSize: 15 }}>
                      Email of point of contact*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>

                  <div className="in_container form-group">
                    <label htmlFor="university" style={{ fontSize: 15 }}>
                      University*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="University"
                      id="university"
                      required
                    />
                  </div>

                  <div className="in_container form-group">
                    <label htmlFor="faculty" style={{ fontSize: 15 }}>
                      Principal investigator/Faculty member (Give full name)*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="faculty"
                      name="Faculty"
                      required
                    />
                  </div>

                  <div className="in_container form-group">
                    <label htmlFor="summary" style={{ fontSize: 15 }}>
                      Project Executive Summary (250 Characters)*{" "}
                    </label>
                    <div className="">
                      <textarea
                        className="form-control"
                        id="summary"
                        name="Summary"
                        rows="8"
                        cols="80"
                        maxLength="250"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="in_container form-group">
                    <label
                      className="noFloat"
                      htmlFor="region"
                      style={{ fontSize: 15 }}
                    >
                      Project Region* :
                    </label>
                    <div>
                      <select
                        className="form-select form-select-lg mb-3"
                        id="region"
                        name="Region"
                        style={{ fontSize: 15 }}
                      >
                        <option value="Asia">Asia</option>
                        <option value="Latin America">Latin America</option>
                        <option value="Europe">Europe</option>
                        <option value="Africa">Africa</option>
                        <option value="North America">North America</option>
                      </select>
                    </div>
                  </div>
                  <div className="in_container form-group">
                    <label
                      className="noFloat"
                      htmlFor="countryId"
                      style={{ fontSize: 15 }}
                    >
                      Project Country* :
                    </label>
                    <select
                      className="form-select form-select-lg mb-3 countries"
                      name="country"
                      id="countryId"
                      style={{ fontSize: 15 }}
                    >
                      <option>Select Country</option>
                    </select>
                  </div>
                  <div className="in_container form-group">
                    <label
                      className="noFloat"
                      htmlFor="stateId"
                      style={{ fontSize: 15 }}
                    >
                      Project State/Province* :
                    </label>
                    <select
                      className="form-select form-select-lg mb-3 states"
                      name="state"
                      id="stateId"
                      style={{ fontSize: 15 }}
                    >
                      <option>Select State</option>
                    </select>
                  </div>
                  <div className="in_container form-group">
                    <label
                      className="noFloat"
                      htmlFor="cityId"
                      style={{ fontSize: 15 }}
                    >
                      Project City* :
                    </label>
                    <select
                      className="form-select form-select-lg mb-3 cities"
                      name="city"
                      id="cityId"
                      style={{ fontSize: 15 }}
                    >
                      <option>Select City</option>
                    </select>
                  </div>
                  <div className="in_container form-group rb_container">
                    <label
                      htmlFor="isContinue"
                      className="noFloat"
                      style={{ fontSize: 15 }}
                    >
                      Status of the project* :
                    </label>
                    <div
                      id="isContinue"
                      className="form-check"
                      style={{ fontSize: 15 }}
                    >
                      <div>
                        {" "}
                        <input
                          type="radio"
                          id="isContinueYes"
                          className="form-check-input"
                          name="isContinue"
                          value="Yes"
                          required
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="isContinueYes"
                        >
                          Ongoing
                        </label>{" "}
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="isContinueNo"
                          className="form-check-input"
                          name="isContinue"
                          value="No"
                          required
                        />
                        <label
                          className="form-check-label noFloat"
                          htmlFor="isContinueNo"
                        >
                          Completed
                        </label>{" "}
                      </div>
                    </div>
                  </div>

                  <div
                    className="in_container form-group hide"
                    id="p_year_container"
                  >
                    <label htmlFor="p_year">Year of project conclusion* </label>
                    <input
                      type="number"
                      className="form-control"
                      id="p_year"
                      name="Year"
                      min={1900}
                      placeholder="YYYY"
                    />
                  </div>

                  <div className="in_container form-group">
                    <label htmlFor="partner" style={{ fontSize: 15 }}>
                      Partner Organizations involved with the project :
                    </label>
                    <input
                      id="partner"
                      className="form-control"
                      type="text"
                      name="Partner"
                    />
                  </div>

                  <div
                    className="in_container form-group checkHighlight"
                    style={{ fontSize: 25 }}
                  >
                    <div style={{ fontSize: 15 }}>
                      Choose Project Category :{" "}
                    </div>
                    <div className="cb_container form-check">
                      <input
                        type="checkbox"
                        id="Poverty"
                        value="Poverty"
                        name="Poverty"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="Poverty"
                      >
                        {" "}
                        Poverty
                      </label>
                    </div>

                    <div className="cb_container form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Hunger"
                        value="Hunger"
                        name="Hunger"
                      />
                      <label
                        htmlFor="Hunger"
                        className="form-check-label noFloat"
                      >
                        Hunger
                      </label>
                    </div>
                    <div className="cb_container form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="HealthWellbeing"
                        value="HealthWellbeing"
                        name="HealthWellbeing"
                      />
                      <label
                        htmlFor="HealthWellbeing"
                        className="form-check-label noFloat"
                      >
                        Health and well being
                      </label>
                    </div>
                    <div className="cb_container form-check">
                      <input
                        type="checkbox"
                        id="Education"
                        value="Education"
                        name="Education"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="Education"
                      >
                        Education
                      </label>
                    </div>
                    <div className="cb_container form-check">
                      <input
                        type="checkbox"
                        id="GenderEquality"
                        value="GenderEquality"
                        name="GenderEquality"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="GenderEquality"
                      >
                        Gender Equality
                      </label>
                    </div>
                    <div className="cb_container form-check">
                      <input
                        type="checkbox"
                        id="CleanWaterSanitation"
                        value="CleanWaterSanitation"
                        name="CleanWaterSanitation"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="CleanWaterSanitation"
                      >
                        Clean Water and Sanitation
                      </label>
                    </div>
                    <div className="cb_container form-check">
                      <input
                        type="checkbox"
                        id="AfhtmlFordableCleanEnergy"
                        value="AfhtmlFordableCleanEnergy"
                        name="AfhtmlFordableCleanEnergy"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="AfhtmlFordableCleanEnergy"
                      >
                        Affordable and Clean Energy
                      </label>
                    </div>
                    <div className="cb_container form-check">
                      <input
                        type="checkbox"
                        id="DecentWorkEconomicGrowth"
                        value="DecentWorkEconomicGrowth"
                        name=" DecentWorkEconomicGrowth"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="DecentWorkEconomicGrowth"
                      >
                        {" "}
                        Decent Work and Economic Growth
                      </label>
                    </div>
                    <div className="cb_container form-check">
                      <input
                        type="checkbox"
                        id="IndustryInnovationInfrastructure"
                        value=" IndustryInnovationInfrastructure"
                        name=" IndustryInnovationInfrastructure"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="IndustryInnovationInfrastructure"
                      >
                        {" "}
                        Industry, Innovation, and Infrastructure
                      </label>
                    </div>
                    <div className="cb_container form-check">
                      <input
                        type="checkbox"
                        id="ReducedInequality"
                        value=" ReducedInequality"
                        name=" ReducedInequality"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="ReducedInequality"
                      >
                        {" "}
                        Reduced Inequality
                      </label>
                    </div>
                    <div className="cb_container form-check">
                      <input
                        type="checkbox"
                        id="SustainableCitiesCommunities"
                        value=" SustainableCitiesCommunities"
                        name=" SustainableCitiesCommunities"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="SustainableCitiesCommunities"
                      >
                        {" "}
                        Sustainable Cities and Communities
                      </label>
                    </div>
                    <div className="cb_container form-check">
                      <input
                        type="checkbox"
                        id="ResponsibleConsumptionProduction"
                        value=" ResponsibleConsumptionProduction"
                        name=" ResponsibleConsumptionProduction"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="ResponsibleConsumptionProduction"
                      >
                        {" "}
                        Responsible Consumption and Production
                      </label>
                    </div>
                    <div className="cb_container form-check">
                      <input
                        type="checkbox"
                        id="ClimateAction"
                        value="ClimateAction"
                        name="ClimateAction"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="ClimateAction"
                      >
                        Climate Action
                      </label>
                    </div>
                    <div className="cb_container form-check">
                      <input
                        type="checkbox"
                        id="EnvironmentUnderwater"
                        value="EnvironmentUnderwater"
                        name="EnvironmentUnderwater"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="EnvironmentUnderwater"
                      >
                        Environment (Underwater
                      </label>
                    </div>
                    <div className="cb_container form-check">
                      <input
                        type="checkbox"
                        id="EnvironmentOnLand"
                        value="EnvironmentOnLand"
                        name="EnvironmentOnLand"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="EnvironmentOnLand"
                      >
                        Environment (On Land
                      </label>
                    </div>
                    <div className="cb_container form-check">
                      <input
                        type="checkbox"
                        id="PeaceJustice"
                        value="PeaceJustice"
                        name="PeaceJustice"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="PeaceJustice"
                      >
                        Peace and Justice
                      </label>
                    </div>
                  </div>

                  <div
                    className="in_container form-group checkHighlight"
                    style={{ fontSize: 25 }}
                  >
                    <div style={{ fontSize: 15 }}>
                      Choose Project's Task force(s) :
                    </div>
                    <div className="cb_container">
                      <input
                        type="checkbox"
                        id="EngineeringSocialJustice"
                        value="EngineeringSocialJustice"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="EngineeringSocialJustice"
                      >
                        Engineering and Social Justice{" "}
                      </label>
                    </div>
                    <div className="cb_container">
                      <input
                        type="checkbox"
                        id="HumanitarianEngineering"
                        value="HumanitarianEngineering"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="HumanitarianEngineering"
                      >
                        Humanitarian Engineering{" "}
                      </label>
                    </div>
                    <div className="cb_container">
                      <input
                        type="checkbox"
                        id="EngineeringScienceReligionSpirituality"
                        value="EngineeringScienceReligionSpirituality"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="EngineeringScienceReligionSpirituality"
                      >
                        Engineering-Science & Religion-Spirituality{" "}
                      </label>
                    </div>
                    <div className="cb_container">
                      <input
                        type="checkbox"
                        id="HealthCare"
                        value="HealthCare"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="HealthCare"
                      >
                        Health Care{" "}
                      </label>
                    </div>
                    <div className="cb_container">
                      <input type="checkbox" id="Energy" value="Energy" />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="Energy"
                      >
                        Energy{" "}
                      </label>
                    </div>
                    <div className="cb_container">
                      <input
                        type="checkbox"
                        id="ArtificialIntelligenceHumanity"
                        value="ArtificialIntelligenceHumanity"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="ArtificialIntelligenceHumanity"
                      >
                        Artificial Intelligence & Humanity{" "}
                      </label>
                    </div>
                    <div className="cb_container">
                      <input
                        type="checkbox"
                        id="Infrastructure"
                        value="Infrastructure"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="Infrastructure"
                      >
                        {" "}
                        Infrastructure{" "}
                      </label>
                    </div>
                    <div className="cb_container">
                      <input
                        type="checkbox"
                        id="ResearchAcademicCooperation"
                        value="ResearchAcademicCooperation"
                      />
                      <label
                        className="form-check-label noFloat"
                        htmlFor="ResearchAcademicCooperation"
                      >
                        {" "}
                        Research and Academic Co-operation{" "}
                      </label>
                    </div>
                  </div>

                  <div style={{ fontSize: 15, paddingBottom: 10 }}>
                    Upload Photo :
                  </div>

                  <div className="in_container form-group">
                    <label htmlFor="p_photos"></label>
                    <input id="p_photos" type="file" name="Photos" />
                  </div>

                  <div className="in_container form-group">
                    <label htmlFor="more_link" style={{ fontSize: 15 }}>
                      Share Link for more Project information (Videos /
                      Documents) :
                    </label>
                    <input
                      type="link"
                      id="more_link"
                      name="MoreLink"
                      className="form-control"
                    />
                  </div>

                  <div className="in_container form-group cb_container">
                    <button
                      className="btn btn-custom btn-lg"
                      onClick={submitProject}
                      style={{ marginRight: 4 }}
                    >
                      Submit to Review Committee*
                    </button>
                    <button
                      type="button"
                      className="btn btn-custom btn-lg"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    {/* <button type="reset" id="p_reset" name="Resetbutton">Reset Form</button> */}
                  </div>
                </form>

                {/*Form code end*/}
              </div>
              <div class="modal-footer"></div>
            </div>
          </div>
        </div>
      </div>
      {/* update end*/}



      {/*Show all projects Start*/}
      {/*Show all projects End*/}

    </div>
  );
};
