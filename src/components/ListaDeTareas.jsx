import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../sheetstyles/ListaDeTareas.css';

function ListaDeTareas() {
	const [tareas, setTareas] = useState([]);

	const agregarTarea = (tarea) => {
		//Verificamos que 'tarea' no venga vacio
		if (tarea.texto.trim()) {
			//Quitamos los espacios en blanco
			tarea.texto = tarea.texto.trim();
			//Actualizamos el estado de tareas
			const tareasActualizadas = [tarea, ...tareas];
			setTareas(tareasActualizadas);
		}
	};

	const eliminarTarea = (id) => {
		const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
		setTareas(tareasActualizadas);
	};

	const completarTarea = (id) => {
		const tareasActualizadas = tareas.map((tarea) => {
			if (tarea.id === id) {
				tarea.completada = !tarea.completada;
			}
			return tarea;
		});
		setTareas(tareasActualizadas);
	};

	return (
		<>
			<TareaFormulario onSubmit={agregarTarea} />
			<div className='tareas-lista-contenedor'>
				{tareas.map((tarea) => (
					<Tarea
						key={tarea.id}
						id={tarea.id}
						texto={tarea.texto}
						completada={tarea.completada}
						completarTarea={completarTarea}
						eliminarTarea={eliminarTarea}
					/>
				))}
			</div>
		</>
	);
}

export default ListaDeTareas;
