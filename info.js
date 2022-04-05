/*Paso 1: Instalar Node, Entorno que permite ejecutar codigo js en la maquina
Paso 2: Instalar y configurar webpack y babel
PASO 2 REAL: Instalar Create React App(configura automaticamente webpack y babel)
Paso 3: Crear el proyecto 
    -npm install -g create-ract-app && create-react-app <nombre>
    -npx create-react-app <nombre>
//Esto solo se hace una vez

Paso 4: Entrar en la carpeta del proyecto
Paso 5: Ejecutar npm start

COMPONENTES
Crear una funcion
Con letra Mayuscula
Debo exportar la funcion
Debe devolver una sola cosa

Que suele contener un componente
    -Props
    -State
    -Ciclo de vida
    -Metodos de ciclo de vida

Hooks:
    -useState: permite cambiar el estado de un componente y por ende provoca un re-render
    -useEffect: permite ejecutar una funcion cuando el componente se renderiza

Ciclo de vida con class:
    -mount: cuando el componente se monta
    -update: cuando el componente se actualiza
    -unmount: cuando el componente se desmonta

    mount:
    -constructor: se ejecuta al crear el componente
    -render: se ejecuta al renderizar el componente
    -componentDidMount: se ejecuta al montar el componente

    update: 
    -render: se ejecuta al renderizar el componente
    -shouldComponentUpdate: se ejecuta antes de actualizar el componente

    unmount:
    -componentWillUnmount: se ejecuta antes de desmontar el componente

    useEffect(() => {}, [])

Promesas
pending-fulfilld-rejected


Routing y Navegacion
react-router-dom
    

Event(e):El objeto evento que se envía a los componentes cuando se produce un evento.
Event.target: El elemento HTML que recibió el evento.
*/
