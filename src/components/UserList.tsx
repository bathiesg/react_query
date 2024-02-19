import { type User } from '../../types'

interface Props {
  users: User[]
}

export function UsersList ({ users }: Props) {
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Foto</th>
          <th className='pointer'>Nombre</th>
          <th className='pointer'>Apellido</th>
          <th className='pointer'>País</th>
        </tr>
      </thead>

      <tbody className={'table--showColors'}>
        {
          users.map((user) => {
            return (
              <tr key={user.email}>
                <td>
                  <img src={user.picture.thumbnail} />
                </td>
                <td>
                  {user.name.first}
                </td>
                <td>
                {user.name.last}
                </td>
                <td>
                  {user.location.country}
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}