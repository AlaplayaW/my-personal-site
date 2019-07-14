import React, { useEffect, useState } from "react";
import "../App.scss";
import axios from "axios";
import Diagonal from "../components/Diagonal";
import styles from "./DocsRedux.module.scss";

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
		<div className="reduxPage">
			<div className={styles.docs}>
				<h1>Docs Redux</h1>
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
