export const ListaUsuarios = ({ users,manejarEliminarUsuario }) => {
  
    const handlerClick = (id) => {
    manejarEliminarUsuario(id);
  };

  return (
    <>
      {users.map((user) => (
        <article key={user.id}>
          <li key={user.id}>{user.nombre}</li>
          <button onClick={()=>handlerClick(user.id)}>Eliminar</button>
        </article>
      ))}
    </>
  );
};
