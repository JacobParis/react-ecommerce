import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import CheckoutContainer from "./Checkout/CheckoutContainer";
import StylesContainer from "./Styles/StylesContainer";
import ProductsContainer from "./Products/ProductsContainer";
import SingleProductContainer from "./Products/SingleProductContainer";
import OneClickCheckout from "./Checkout/OneClickCheckout";
import OrderConfirmationContainer from "./Orders/OrderConfirmationContainer";
import NotFound from "./global/NotFound";
// import MobileNav from './global/Mobile/MobileNav';
import Footer from "./global/Footer";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    primary: "#f55356",
    light: "#fafafa",
    dark: "#50505B"
  },
  screen: {
    small: "screen and (max-width: 35em)",
    medium: "screen and (min-width: 35.0625em) and (max-width: 55em)",
    large: "screen and (min-width: 55.0625em)"
  }
};

const App = props => (
  <ThemeProvider theme={theme}>
    <div>
      {/* <MobileNav /> */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/styles" component={StylesContainer} />
        <Route path="/products" component={ProductsContainer} />
        <Route path="/checkout" component={CheckoutContainer} />
        <Route
          path="/order-confirmation"
          component={OrderConfirmationContainer}
        />
        <Route path="/product/:id" component={SingleProductContainer} />
        <Route
          path="/one-click-checkout/:productId"
          component={OneClickCheckout}
        />
        <Route path="*" component={NotFound} />
      </Switch>

      <Footer />
    </div>
  </ThemeProvider>
);

export default App;
