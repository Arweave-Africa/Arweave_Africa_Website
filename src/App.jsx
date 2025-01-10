import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home.jsx';

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
		</Routes>
	);
}

export default App;
