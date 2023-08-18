/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import user from 'data/user';
import stats from 'data/stats';
import friends from 'data/friends';
import transactions from 'data/transactions';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App data={user} dataStats={stats} dataFriends={friends} dataTransactions={transactions} />
	</React.StrictMode>
);
