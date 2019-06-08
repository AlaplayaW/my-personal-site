import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import Diagonal from "../components/Diagonal";
import styles from "./DocsRedux.module.css";
import Nav from "../components/Nav";

function DocsRedux() {
	const [data, setData] = useState({ hits: [] });

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				"http://hn.algolia.com/api/v1/search?query=redux"
			);

			setData(result.data);
		};

		fetchData();
	}, []);

	return (
		<div>
			<Nav />
			<div className={styles.docs}>
				{data.hits.map(item => (
					<React.Fragment key={item.objectID}>
						<a href={item.url}>{item.title}</a>
						<h4>{item.created_at}</h4>
					</React.Fragment>
				))}
			</div>
			<Diagonal />
		</div>
	);
}

export default DocsRedux;
