import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";

const Routes = () => {
	return (
		<Switch>
			<Route 
				path="/:catagory/search/:keyword"
				component={Catalog}
			/>
			<Route 
				path="/:catagory/:id"
				component={Detail}
			/>
			<Route 
				path="/:catagory"
				component={Catalog}
			/>
			<Route 
				path="/"
				component={Home}
			/>
		</Switch>
	);
}

export default Routes;