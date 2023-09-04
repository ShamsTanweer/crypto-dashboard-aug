import React, { useEffect, useState } from "react";
// import './styles.css'
import './index.css'
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { useNavigate } from "react-router-dom";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Grid({ coin }) {
  const [clicked, setClicked] = useState(false);
  const coinId = coin.id;

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("watchlist")) || [];
    setClicked(existingData.includes(coinId));
  }, [coinId]);

  const navigate = useNavigate();

  function handleWatchlistClick(e) {
    setClicked((prevValue) => !prevValue);
    const coinId = coin.id;
    toast(clicked ? "Removed from watchlist" : "Added to watchlist");
    // console.log(coinId);

    const existingWatchlist =
      JSON.parse(localStorage.getItem("watchlist")) || [];

    let updatedWatchlist = [];

    if (!existingWatchlist.includes(coinId)) {
      setClicked(true);
      updatedWatchlist = [...existingWatchlist, coinId];
    } else {
      setClicked(false);
      updatedWatchlist = existingWatchlist.filter((id) => id !== coinId);
    }

    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  }

  return (
    <div
      className={`grid-container ${
        coin.price_change_percentage_24h < 0 && "grid-container-red"
      }`}
    >
      <div className="info-flex">
        <img
          src={coin.image}
          alt="coin-logo"
          className="coin-logo"
          onClick={(e) => navigate(`/coin/${coin.id}`)}
        />
        <div className="name-col" onClick={(e) => navigate(`/coin/${coin.id}`)}>
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
        {coin.price_change_percentage_24h > 0 ? (
          <div onClick={handleWatchlistClick}>
            <div className="watchlist-chip">
              {clicked ? <StarRateRoundedIcon /> : <StarBorderRoundedIcon />}
            </div>
          </div>
        ) : (
          <div onClick={handleWatchlistClick}>
            <div className="watchlist-chip chip-red">
              {clicked ? <StarRateRoundedIcon /> : <StarBorderRoundedIcon />}
            </div>
          </div>
        )}
      </div>
      {coin.price_change_percentage_24h > 0 ? (
        <div
          className="chip-flex"
          onClick={(e) => navigate(`/coin/${coin.id}`)}
        >
          <div className="price-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip">
            <TrendingUpRoundedIcon />
          </div>
        </div>
      ) : (
        <div
          className="chip-flex"
          onClick={(e) => navigate(`/coin/${coin.id}`)}
        >
          <div className="price-chip chip-red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>

          <div className="icon-chip chip-red">
            <TrendingDownRoundedIcon />
          </div>
        </div>
      )}

      <div
        className="info-container"
        onClick={(e) => navigate(`/coin/${coin.id}`)}
      >
        <h3
          className="coin-price"
          style={{
            color:
              coin.price_change_percentage_24h > 0
                ? "var(--green)"
                : "var(--red)",
          }}
        >
          ${coin.current_price.toLocaleString()}
        </h3>
        <p className="total-volume">
          Total Volume : {coin.total_volume.toLocaleString()}
        </p>
        <p className="total-volume">
          Market cap : {coin.market_cap.toLocaleString()}
        </p>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Grid;
