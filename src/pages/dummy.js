import React, { useEffect, useState } from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { convertNumbers } from "../../../functions/convertNumbers";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { addToWatchlist } from "../../../functions/addToWatchlist";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { hasBeenAdded } from "../../../functions/hasBeenAdded";
import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";
import { useNavigate } from "react-router-dom";

function List({ coin, delay, isWatchlistPage }) {
  const [added, setAdded] = useState(hasBeenAdded(coin.id));

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
    <motion.tr>
      <td className="td-image">
        <img src={coin.image} alt="coin-logo" className="coin-logo" />
      </td>

      <td className="td-info-flex">
          <div className="coin-name-flex">
            <h3 className="coin-symbol">{coin.symbol}</h3>
            <p className="coin-name">{coin.name}</p>
          </div>
        </td>


        <td className="td-price-chip-list">
        {coin.price_change_percentage_24h > 0 ? (
              <div className="info-flex" style={{ marginBottom: 0 }}>
                <div className="price-chip price-chip-list">
                  {coin.price_change_percentage_24h.toFixed(2)} %
                </div>
                <TrendingUpRoundedIcon className="trending-icon trending-icon-list" />
              </div>
            ) : (
              <div className="info-flex" style={{ marginBottom: 0 }}>
                <div className="price-chip price-chip-list red">
                  {coin.price_change_percentage_24h.toFixed(2)} %
                </div>
                <TrendingDownRoundedIcon className="trending-icon red trending-icon-list" />
              </div>
            )}
          </td>

    </motion.tr>
  );
}

export default List;
