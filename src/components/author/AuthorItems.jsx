import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "../UI/Skeleton";

const AuthorItems = () => {
const {authorID} = useParams();
const [author, setAuthor] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
  useEffect(() => {
async function fetchData(){
  try {
    setLoading(true);
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=73855012`
    );
    setAuthor(data);
  } catch (err) {
    setError("Failed to fetch data. Please try again later.");
  } finally {
    setTimeout(() => {
    setLoading(false);
  },3000);
}
}
fetchData();
}, [authorID]);


  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {loading ? (
          [...Array(8)].map((_, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="nft__item">
              <div className="skeleton skeleton-text">
              <Skeleton width="50px" height="50px" borderRadius="50%" /></div>
                <div className="skeleton skeleton-img">
                <Skeleton width="100%" height="200px" borderRadius="10px" />
                </div>
               
                <div className="skeleton skeleton-text">
                <Skeleton width="80%" height="20px" />
                <Skeleton width="40%" height="15px" />
                </div>
              </div>
            </div>

          ))
  ):
(
    
          author.nftCollection.map((nft) => (
            <div key={nft.id} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link to="">
                    <img className="lazy" src={author.authorImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                <div className="nft__item_wrap">
                  <div className="nft__item_extra">
                    <div className="nft__item_buttons">
                      <button>Buy Now</button>
                      <div className="nft__item_share">
                        <h4>Share</h4>
                        <a href="" target="_blank" rel="noreferrer">
                          <i className="fa fa-facebook fa-lg"></i>
                        </a>
                        <a href="" target="_blank" rel="noreferrer">
                          <i className="fa fa-twitter fa-lg"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-envelope fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <Link to="/item-details">
                    <img
                      src={nft.nftImage}
                      className="lazy nft__item_preview"
                      alt={nft.title}
                    />
                  </Link>
                </div>
                <div className="nft__item_info">
                  <Link to="/item-details">
                    <h4>{nft.title}</h4>
                  </Link>
                  <div className="nft__item_price">{nft.price} ETH</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{nft.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
