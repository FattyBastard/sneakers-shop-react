import React from "react";
import AppContext from "../components/context";

export const useCart = () => {
    const {selectedCards, setSelectedCards} = React.useContext(AppContext);

    const totalPrice = selectedCards.reduce((acc, cur) => parseInt(acc) + parseInt(cur.price), 0);
    return {selectedCards, setSelectedCards, totalPrice};
}