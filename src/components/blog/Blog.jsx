import React from "react";
import Modal from "react-modal";
import cancelImg from "../../assets/img/cancel.svg";
import UseData from "../../Hooks/UseData";
import blogQuote from "../../assets/img/blog/quote.svg";
import screenShoot1 from "../../assets/img/blog/screenshot-1.png";
import screenShoot2 from "../../assets/img/blog/screenshot-2.png";
import ampllify from "../../assets/img/blog/amplify.png";
import apiGateway from "../../assets/img/blog/apiGateway.png";
import cloudFormation from "../../assets/img/blog/cloudFormation.png";
import cloudWatch from "../../assets/img/blog/cloudWatch.png";
import sns from "../../assets/img/blog/sns.png";
import cognito from "../../assets/img/blog/cognito.png";
import daynamodb from "../../assets/img/blog/dnynamodb.png";
import s3bucket from "../../assets/img/blog/s3-bucket.png";



Modal.setAppElement("#root");

const Blog = () => {
  const { singleData, isOpen, setIsOpen, blogsData, handleBlogsData } =
    UseData();
  const handleModle = (id) => {
    handleBlogsData(id);
  };
  return (
    <>
      <div className="row">
        {blogsData.map((item) => (
          <div
            key={item.id}
            className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30"
          >
            <article
              className="post-container"
              onClick={() => handleModle(item?.id)}
            >
              <div className="post-thumb">
                <div className="d-block position-relative overflow-hidden">
                  <img src={item?.img} className="img-fluid" alt="item.title" />
                </div>
              </div>
              {/* End .thumb */}
              <div className="post-content">
                <div className="entry-header">
                  <h3>{item?.title}</h3>
                </div>
                <div className="entry-content open-sans-font">
                  <p>{item?.description1.slice(0, 100)}</p>
                </div>
              </div>
              {/* End .post-content */}
            </article>

            {/* Start ModalOneBlogContent */}
            <Modal
              isOpen={isOpen}
              onRequestClose={() => setIsOpen(false)}
              contentLabel="My dialog"
              className="custom-modal dark"
              overlayClassName="custom-overlay dark"
              closeTimeoutMS={500}
            >
              <div>
                <button
                  className="close-modal"
                  onClick={() => setIsOpen(false)}
                >
                  <img src={cancelImg} alt="close icon" />
                </button>
                {/* End close icon */}

                <div className="box_inner blog-post">
                  {/* Article Starts */}
                  <article>
                    <div className="title-section text-left text-sm-center">
                      <h1>
                        Post <span>Details</span>
                      </h1>
                      <span className="title-bg">posts</span>
                    </div>
                    {/* Meta Starts */}

                    <div className="meta open-sans-font">
                      <span>
                        <i className="fa fa-user"></i> {singleData.commentor}
                      </span>
                      <span className="date">
                        <i className="fa fa-calendar"></i> {singleData.date}
                      </span>
                      <span>
                        <i className="fa fa-tags"></i> {singleData.tag}
                      </span>
                    </div>
                    {/* Meta Ends */}
                    {/* Article Content Starts */}

                    <h1>{singleData?.title}</h1>
                    <img
                      src={singleData?.img}
                      className="img-fluid"
                      alt="Blog"
                    />
                    <div className="blog-excerpt open-sans-font pb-5">
                      <p>{singleData?.description1}</p>
                      <div className="quotebox">
                        <div className="icon">
                          <img src={blogQuote} alt="blog quote" />
                        </div>
                        <p>{singleData?.description2}</p>
                      </div>
                      <p>Initialize Amplify Backend and Adding Backend Api & CloudFormation</p>
                      <img src={screenShoot1} alt="screenShoot" />
                      {/* <img src={screenShoot2} alt="screenShoot" /> */}
                      <p>{singleData?.description3}</p>
                      <p>{singleData?.description4}</p>
                      <p>{singleData?.description5}</p>
                      <p>{singleData?.description6}</p>
                      <p>S3 Bucket</p>
                      <img src={s3bucket} alt="screenShoot" />
                      <p>DynamoDB Table</p>
                      <img src={daynamodb} alt="screenShoot" />
                      <p>SNS Simple Notification Service</p>
                      <img src={sns} alt="screenShoot" />
                      <p>Cloud Formation</p>
                      <img src={cloudFormation} alt="screenShoot" />
                      <p>Cloud Watch</p>
                      <img src={cloudWatch} alt="screenShoot" />
                      <p>Api Gateway</p>
                      <img src={apiGateway} alt="screenShoot" />
                      <p>Cognito config</p>
                      <img src={cognito} alt="screenShoot" />
                      <p>Final Deployed</p>
                      <img src={ampllify} alt="screenShoot" />
                    </div>
                    {/* Article Content Ends */}
                  </article>
                  {/* Article Ends */}
                </div>
              </div>
            </Modal>
            {/* End  ModalOneBlogContent */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
