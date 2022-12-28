import React from 'react';
import { useState, useEffect, useRef } from 'react';

{/*import noPoster from '../assets/images/no-poster.jpg';*/}

function SearchMovies(){

	const dataInput= useRef(null)
	

	// Credenciales de API
	const apiKey = 'cd948047'; 
	const [Movies, setMovies] = useState({
		data : [],
		KEYWORD : "action"

	})

	const filtrar = (event) =>{
		event.preventDefault()
		console.log("esto es dataInput", dataInput.current.value)	
		setMovies({
			...Movies,
			KEYWORD: dataInput.current.value}) 
	}

	useEffect(() => {
		const ApiCall = async (url) => {
			const resp = await fetch(url)
			const data = await resp.json()
			{
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
	ApiCall ((( `http://www.omdbapi.com/?s=${Movies.KEYWORD}&apikey=${apiKey}`)))
	
	}, [Movies.KEYWORD])


	return(
		<div className="container-fluid">
			
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form  onSubmit={filtrar} method="GET" >
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input type="text" name="keywords" ref={dataInput} />
								</div>
								<button type='submit' className="btn btn-info">Search</button>
							</form>
						</div>
					</div>

					<div className="row">
						<div className="col-12">
							<h2>Películas para la palabra: {Movies.KEYWORD}</h2>
						</div>
						{/* Listado de películas */}
						{
							Movies.data.length > 0 && Movies.data.map((movie, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
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
					{ Movies.data.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchMovies;
