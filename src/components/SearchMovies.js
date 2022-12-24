import React from 'react';
import { useState, useEffect } from 'react';

{/*import noPoster from '../assets/images/no-poster.jpg';*/}

function SearchMovies(){

	const KEYWORD = 'action';
	// Credenciales de API
	const apiKey = 'cd948047'; // Intenta poner cualquier cosa antes para probar

	const [Movies, setMovies] = useState({
		data : []
	})


	useEffect(() => {
		const ApiCall = async (url) => {
			const resp = await fetch(url)
			const data = await resp.json()
			{
				console.log("Esto es data", data.Search)
				if(data.Search.length === 0){
					setMovies({
						...Movies,
						data: data.Search
					})
				} else {
					setMovies({
						...Movies,
						data: data.Search
					})
				}
				
				}
			  }
	ApiCall ((( `http://www.omdbapi.com/?s=${KEYWORD}&apikey=${apiKey}`)))
	
	}, [])







	const movies = [
		{
			"Title": "Parchís",
			"Year": "1983",
			"Poster": "https://m.media-amazon.com/images/M/MV5BNjdhOGY1OTktYWJkZC00OGY5LWJhY2QtZmQzZDA2MzY5MmNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
		},
		{
			"Title": "Brigada en acción",
			"Year": "1977",
			"Poster": "N/A"
		},
	];

	const keyword = 'PELÍCULA DEMO';

	

	return(
		<div className="container-fluid">
			{console.log("Esto es Movies.data", Movies.data)}
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET">
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input type="search" name="keywords" />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
							{console.log("esto es Keywords")}
						</div>
					</div>

					<div className="row">
						<div className="col-12">
							<h2>Películas para la palabra: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							Movies.data.length > 0 && Movies.data.map((movie, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										{console.log("esto es Movie", movie)}
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={movie.Poster}
														alt={movie.Title} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{movie.Year}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ movies.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchMovies;
