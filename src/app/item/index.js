import BasketSimple from "../../components/basket-simple";
import Layout from "../../components/layout";
import React, {useCallback, useEffect} from "react";
import useStore from "../../utils/use-store";
import useSelector from "../../utils/use-selector";
import ItemInfo from '../../components/item-info';
import {useParams} from "react-router-dom";

function Item() {

  const store = useStore();
  const params = useParams();

  useEffect(() => {
    store.get('item').load(params.id);
  }, [])

  const select = useSelector(state => ({
    amount: state.basket.amount,
    sum: state.basket.sum,
    item: state.item,
  }));

  const callbacks = {
    // Открытие корзины
    openModalBasket: useCallback(() => store.get('modals').open('basket'), []),
    // Добавление в корзину
    addToBasket: useCallback(_id => store.get('basket').addToBasket(_id), []),
  };

  return (
    <Layout head={<h1>Название товара</h1>}>
      <BasketSimple onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum}/>
      <ItemInfo item={select.item} addToBasket={callbacks.addToBasket}/>
    </Layout>
  )
}

export default React.memo(Item);