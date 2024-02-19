export const fetchRandomUser = async ({ pageParam = 1}) => {  
    const res = await fetch(`https://randomuser.me/api?results=10&seed=samba&page=${pageParam}`);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const json = await res.json();
    const currentPage = json.info.page
    const nextPage = currentPage > 4 ? undefined : currentPage + 1; 
    const users = json.results;
    return { users, nextPage };
  
  }