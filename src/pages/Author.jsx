
import AuthorItems from "../components/author/AuthorItems";
import AuthorBanner from "../images/author_banner.jpg";
import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import Skeleton from "../components/UI/Skeleton";
const Author = () => {
  
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    async function fetchData(){
      const{data} = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=73855012`);
      setAuthor(data);
      setLoading(false);
  } fetchData(); }, []);
  
  if (loading) {
    return (
      <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                    <Skeleton width="80%" height="20px" />

                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        <h4>
                        <Skeleton width="80%" height="20px" />
                          <span className="profile_username"><Skeleton width="80%" height="20px" /></span>
                          <span id="wallet" className="profile_wallet">
                          <Skeleton width="80%" height="20px" />
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower"><Skeleton width="80%" height="20px" /> followers</div>
                      <Link to="#" className="btn-main">
                      <Skeleton width="80%" height="20px" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                 
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    )
  }
  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                     {author && <img src={author.authorImage} alt="" />}

                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        <h4>
                         {author.authorName}
                          <span className="profile_username">{author.tag}</span>
                          <span id="wallet" className="profile_wallet">
                          {author.address}
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">{author.followers} followers</div>
                      <Link to="#" className="btn-main">
                        Follow
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
