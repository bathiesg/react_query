import { UsersList } from './UserList';
import { useUsers } from '../hooks/useUsers';

export const UserView = () => {
  const {isLoading, isError, users, fetchNextPage, hasNextPage} = useUsers()
  return (
      <>
        {users.length > 0 &&
          <UsersList users={users} />}

        {isLoading && <strong>Cargando...</strong>}

        {isError && <p>Ha habido un error</p>}

        {!isLoading && !isError && users.length === 0 && <p>No hay usuarios</p>}
        {!isLoading && !isError && hasNextPage === true && <button onClick={() => { void fetchNextPage() }}>Cargar más resultados</button>}

        {!isLoading && !isError && hasNextPage === false && <p>No hay más resultados</p>}
      </>
  )
}
