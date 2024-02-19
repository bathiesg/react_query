import { fetchRandomUser } from './../services/users';
import { useInfiniteQuery } from '@tanstack/react-query';
import { User } from '../../types';
interface RandomUserData {
    nextPage: number;
    users: User[];
}

export  const useUsers = () => {
const {isLoading, isError, data, fetchNextPage, hasNextPage} = useInfiniteQuery<RandomUserData, Error>({
    queryKey: ['users'],
    queryFn:  fetchRandomUser,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  })

  return {isLoading, isError, data, fetchNextPage, hasNextPage, users: data?.pages?.flatMap(page => page.users) ?? []}

}