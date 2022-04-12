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

Context Api
    -createContext: crea un contexto
    -Consumer: permite consumir el contexto, pero con el hook useContext tenemos un mejor resultado
    -Provider: permite proveer el contexto


const productos = [	
  {id:1, nombre: "tomate", stock:100, precio: 200, categoria: "fruta", destacado: true},
  {id:2, nombre: "manzana", stock:100, precio: 200, categoria: "fruta", destacado: true},
  {id:3, nombre: "pera", stock:100, precio: 200, categoria: "fruta", destacado: false},
  {id:4, nombre: "zapallo", stock:100, precio: 200, categoria: "verdura", destacado: true},
  {id:5, nombre: "papa", stock:100, precio: 200, categoria: "verdura", destacado: false},
]

METODOS DE ARRAYS:
const productoTodos = productos

const productosDestacados = productos.filter(producto => producto.destacado);
//filter devuelve siempre un array
//false === true --> false
//true === true --> true

const categoria = "fruta";
const productosFrutas = productos.filter(producto => producto.categoria === categoria)

productosFrutas = [
  {id:1, nombre: "tomate", stock:100, precio: 200, categoria: "fruta", destacado: true},
  {id:2, nombre: "manzana", stock:100, precio: 200, categoria: "fruta", destacado: true},
  {id:3, nombre: "pera", stock:100, precio: 200, categoria: "fruta", destacado: false},
];

const id = 1;

const producto = productos.find(producto => producto === id)
producto = {id:1, nombre: "tomate", stock:100, precio: 200, categoria: "fruta", destacado: true}
producto.id;
producto:nombre;

const nombres = ["luis","pepe","ale"]
const nombre = nombres.find(nombre === "luis") // nombre= "luis";


/*Filtrar por categorias --->filter
Filtrar por destacado ---> filter
Obtener un producto ---> find
Mostrar en pantalla ---> map

CONTEXT: Forma de pasar datos sin usar props
    1-Crear contexto createContext
        const context = createContext();
    2-Obtener el Provider
        const {Provider} = context;
    3-Patron provider(en los componentes)
        <Provider>
            <Componentes/>
        </Provider>
    4-Armar componente context
    const miContext = ({children}) =>{
        cosa1
        cosa2
        return <Provider value = {{cosa1,cosa2}}>
        {children}
        </Provider>
    }
    5-Usar el contexto y el hook useContext
    const {cosa1} = useContext(contexto);




*/


