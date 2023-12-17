/* eslint-disable */
import CoinItem from "./CoinItem";
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";
import './Coins.css'

const Coins = (props) => {
  return (
    <div className="container">
      <div className="heading">
        <p>#</p>
        <p>Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className="hide-mobile">Volume</p>
        <p className="hide-mobile">Market CAP</p>
      </div>

      {props.coins.map((coins) => {
        return (
          <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
            <CoinItem coins={coins} />
          </Link>
        );
      })}
    </div>
  );
};
export default Coins;
