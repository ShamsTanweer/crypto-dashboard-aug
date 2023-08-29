import React from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import Tooltip from "@mui/material/Tooltip";

import "./styles.css";
import { convertNumbers } from "../../../functions/convertNumbers";
import { Link } from "react-router-dom";

function List({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
                <table className="list-table">
            <tbody className="list-row">
    <tr className="list-row">
      <Tooltip title="Logo" placement="bottom-start">
        <td className="td-image td-right-aligne">
          <img src={coin.image} alt="coin-logo" className="coin-logo" />
        </td>
      </Tooltip>
      <Tooltip title="Coin Info" placement="bottom-start">
        <td>
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </td>
      </Tooltip>
      {coin.price_change_percentage_24h > 0 ? (
        <Tooltip placement="bottom-start" title="Price Change In 24Hrs">
          <td className="chip-flex">
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
          <td className="chip-flex">
            <div className="price-chip chip-red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>

            <div className="icon-chip chip-red td-icon">
              <TrendingDownRoundedIcon />
            </div>
          </td>
        </Tooltip>
      )}

        <td className="info-container">
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
        <td>
          <p className="total-volume td-right-align td-total-volume">
            {coin.total_volume.toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip placement="bottom" title="Market Cap">
        <td className="desktop-td-mkt">
          <p className="total-volume td-right-align">
            {coin.market_cap.toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip placement="bottom" title="Market Cap">
        <td className="mobile-td-mkt">
          <p className="total-volume td-right-align">
            ${convertNumbers(coin.market_cap)}
          </p>
        </td>
      </Tooltip>
    </tr>
    </tbody>
    </table>
    </Link>
    
  );
}

export default List;
