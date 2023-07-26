import { useState, useEffect }  from 'react'

function Calendario() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Función para obtener los datos desde la API
    const fetchData = async () => {
      try {
        const response = await fetch('https://ergast.com/api/f1/2023.json');
        const jsonData = await response.json();
        setData(jsonData.MRData.RaceTable.Races); // Asegurarse de seleccionar los datos correctos desde la respuesta JSON
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Llamar a la función para obtener los datos al cargar el componente
  }, []);

  return (
    <>
      <h1>Lista de datos desde la API</h1>
      <ul>
        {data.map((item) => (
          <li key={item.round}>{item.raceName}</li> // Mostrar el nombre de la carrera en lugar de item.nombre
        ))}
      </ul>
    </>
  );
}

export default Calendario;
