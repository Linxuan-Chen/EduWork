import React from "react";

export default function Goals(props) {
  return (
    <div className="row">
      {props.goalsData.titles.map((title, index) => {
        return (
          <div className="col-12 col-md-6 my-3">
            <div className="shadow-lg">
              {/* header starts */}
              <header
                className="d-flex flex-row pb-2 pt-3 px-4"
                style={{
                  backgroundColor: props.goalsData.bg[index],
                }}
              >
                <h5>
                  <a
                    href={props.goalsData.urls[index]}
                    className="text-white text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {title}
                  </a>
                </h5>
                <div className="ml-auto pr-2 pb-1">
                  <a
                    href={props.goalsData.urls[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none d-inline-block border border-white p-1"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    More
                  </a>
                </div>
                <div>
                  <a
                    href={props.goalsData.urls[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none d-inline-block border border-white p-1"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    Apply
                  </a>
                </div>
              </header>
              {/* header ends */}

              {/* body starts */}
              <section className="d-flex flex-row row">
                {/* left column starts*/}
                <section className="col">
                  <div className="d-flex align-items-center flex-column text-center px-3 py-4">
                    {/* the first element */}
                    <a
                      href={props.goalsData.urls[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <figure className="figure">
                        <img
                          src={props.goalsData.leftImgs[index][0]}
                          alt="left-img-01"
                          className="figure-img img-fluid"
                          style={{
                            maxWidth: "80px",
                          }}
                        />
                        <figcaption
                          className="figure-caption"
                          style={{
                            color: props.goalsData.bg[index],
                          }}
                        >
                          {props.goalsData.leftTexts[index][0]}
                        </figcaption>
                      </figure>
                    </a>
                    {/* the second element */}
                    <a
                      href={props.goalsData.urls[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <figure className="figure">
                        <img
                          src={props.goalsData.leftImgs[index][1]}
                          alt="left-img-02"
                          className="figure-img img-fluid"
                          style={{
                            maxWidth: "150px",
                          }}
                        />
                        <figcaption
                          className="figure-caption"
                          style={{
                            color: props.goalsData.bg[index],
                          }}
                        >
                          {props.goalsData.leftTexts[index][1]}
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                </section>
                {/* left column ends */}

                {/* middle column starts */}
                <section className="col">
                  <div className="d-flex align-items-center flex-column text-center my-2 py-2">
                    {/* the first element */}
                    <div className="media px-3 py-4 ">
                      <img
                        src={props.goalsData.middleImgs[index][0]}
                        alt="middle-img-01"
                        style={{
                          maxWidth: "64px",
                        }}
                      />
                      <a
                        href={props.goalsData.urls[index]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-inline-block text-decoration-none media-body pt-2 py-2"
                        style={{
                          color: props.goalsData.bg[index],
                        }}
                      >
                        {props.goalsData.middleTexts[index][0]}
                      </a>
                    </div>
                    {/* the second element */}
                    <div className="media px-3 py-4 ">
                      <img
                        src={props.goalsData.middleImgs[index][1]}
                        alt="middle-img-02"
                        style={{
                          maxWidth: "64px",
                        }}
                      />
                      <a
                        href={props.goalsData.urls[index]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-inline-block text-decoration-none media-body pt-2 py-2"
                        style={{
                          color: props.goalsData.bg[index],
                        }}
                      >
                        {props.goalsData.middleTexts[index][1]}
                      </a>
                    </div>
                    {/* the third element */}
                    <div className="media px-3 py-4 ">
                      <img
                        src={props.goalsData.middleImgs[index][2]}
                        alt="middle-img-03"
                        style={{
                          maxWidth: "64px",
                        }}
                      />
                      <a
                        href={props.goalsData.urls[index]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-inline-block text-decoration-none media-body pt-2"
                        style={{
                          color: props.goalsData.bg[index],
                        }}
                      >
                        {props.goalsData.middleTexts[index][2]}
                      </a>
                    </div>
                  </div>
                </section>
                {/* middle column ends */}

                {/* right column starts */}
                <section className="col d-none d-lg-block">
                  <div className="d-flex flex-column text-center text-white px-3 pt-4 align-items-center">
                    {/* the first element */}
                    <div
                      className="border rounded-circle px-2"
                      style={{
                        width: "100px",
                        backgroundColor: props.goalsData.bg[index],
                      }}
                    >
                      {props.goalsData.rightTexts[index][0]}
                    </div>
                    <img
                      src={props.goalsData.rightImgs[index][1]}
                      alt="arrow"
                      className="img-fluid py-2"
                    />
                    {/* the seconde element */}
                    <div
                      className="border rounded"
                      style={{
                        width: "100px",
                        backgroundColor: props.goalsData.bg[index],
                      }}
                    >
                      {props.goalsData.rightTexts[index][1]}
                    </div>
                    <img
                      src={props.goalsData.rightImgs[index][1]}
                      alt="arrow"
                      className="img-fluid py-2"
                    />
                    {/* the third element */}
                    <a
                      href={props.goalsData.urls[index]}
                      className="text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: props.goalsData.bg[index],
                      }}
                    >
                      <figure className="figure">
                        <img src={props.goalsData.rightImgs[index][0]} alt="" />
                        <figcaption
                          className="figure-caption"
                          style={{
                            color: props.goalsData.bg[index],
                          }}
                        >
                          {props.goalsData.rightTexts[index][2]}
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                </section>
                {/* right column ends */}
              </section>

              {/* body ends */}

              {/* footer starts */}
                <footer className="col">
                  <img src={props.goalsData.bgImgs[index]} alt="" className="img-fluid"/>
                </footer>
              {/* footer ends */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
