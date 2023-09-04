import React, { useEffect, useState } from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import Tooltip from "@mui/material/Tooltip";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./styles.css";
import { convertNumbers } from "../../../functions/convertNumbers";
import { useNavigate } from "react-router-dom";

function List({ coin }) {
  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);
  const coinId = coin.id;

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("watchlist")) || [];
    setClicked(existingData.includes(coinId));
  }, [coinId]);

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
    <table className="list-table">
      <tbody className="tbody">
        <tr className="list-row tr-main">
          <Tooltip title="Logo" placement="bottom-start">
            <td
              className="td-image td-right-align"
              onClick={(e) => navigate(`/coin/${coin.id}`)}
            >
              <img src={coin.image} alt="coin-logo" className="coin-logo" />
            </td>
          </Tooltip>
          <Tooltip title="Coin Info" placement="bottom-start">
            <td onClick={(e) => navigate(`/coin/${coin.id}`)}>
              <div className="name-col">
                <p className="coin-symbol">{coin.symbol}</p>
                <p className="coin-name">{coin.name}</p>
              </div>
            </td>
          </Tooltip>
          {coin.price_change_percentage_24h > 0 ? (
            <Tooltip placement="bottom-start" title="Price Change In 24Hrs">
              <td
                className="chip-flex"
                onClick={(e) => navigate(`/coin/${coin.id}`)}
              >
                <div className="price-chip">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className="icon-chip td-icon">
                  <TrendingUpRoundedIcon />
                </div>
              </td>
            </Tooltip>
          ) : (
            <Tooltip placement="bottom-start" title="Price Change In 24Hrs">
              <td
                className="chip-flex"
                onClick={(e) => navigate(`/coin/${coin.id}`)}
              >
                <div className="price-chip chip-red">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>

                <div className="icon-chip chip-red td-icon">
                  <TrendingDownRoundedIcon />
                </div>
              </td>
            </Tooltip>
          )}

          <td
            className="info-container"
            onClick={(e) => navigate(`/coin/${coin.id}`)}
          >
            <Tooltip placement="bottom" title="Current Price">
              <h3
                className="coin-price td-center-align"
                style={{
                  color:
                    coin.price_change_percentage_24h > 0
                      ? "var(--green)"
                      : "var(--red)",
                }}
              >
                ${coin.current_price.toLocaleString()}
              </h3>
            </Tooltip>
          </td>

          <Tooltip placement="bottom-end" title="Total Volume">
            <td className="desktop-td-vol" onClick={(e) => navigate(`/coin/${coin.id}`)}>
              <p className="total-volume td-right-align td-total-volume">
                {coin.total_volume.toLocaleString()}
              </p>
            </td>
          </Tooltip>
          <Tooltip placement="bottom" title="Market Cap">
            <td
              className="desktop-td-mkt"
              onClick={(e) => navigate(`/coin/${coin.id}`)}
            >
              <p className="total-volume td-right-align">
                {coin.market_cap.toLocaleString()}
              </p>
            </td>
          </Tooltip>


          <Tooltip placement="bottom" title="Total Volume">
            <td
              className="mobile-td-vol"
              onClick={(e) => navigate(`/coin/${coin.id}`)}
            >
              <p className="total-volume td-right-align volume-mobile">
                ${convertNumbers(coin.total_volume)}
              </p>
            </td>
          </Tooltip>

          <Tooltip placement="bottom" title="Market Cap">
            <td
              className="mobile-td-mkt"
              onClick={(e) => navigate(`/coin/${coin.id}`)}
            >
              <p className="total-volume td-right-align">
                ${convertNumbers(coin.market_cap)}
              </p>
            </td>
          </Tooltip>






          <td className="td-star-icon">
            {coin.price_change_percentage_24h > 0 ? (
              <div className="watchlist-chip" onClick={handleWatchlistClick}>
                {clicked ? <StarRateRoundedIcon /> : <StarBorderRoundedIcon />}
              </div>
            ) : (
              <div
                className="watchlist-chip chip-red"
                onClick={handleWatchlistClick}
              >
                {clicked ? <StarRateRoundedIcon /> : <StarBorderRoundedIcon />}
              </div>
            )}
          </td>
        </tr>
      </tbody>
      <ToastContainer/>
    </table>
  );
}

export default List;
