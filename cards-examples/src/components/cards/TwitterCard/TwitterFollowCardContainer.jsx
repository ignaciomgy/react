import { useState, useEffect } from 'react';
import { TwitterFollowCard } from './TwitterFollowCard';

export function TwitterFollowCardContainer({ userName, name, isFollowing}) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users?_limit=4')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="card__container">
            <h1 className="card__container__title">
                Who to Follow
            </h1>

            {posts.map(({name, username}) => {
                return (
                    <TwitterFollowCard userName={name} name={username} initialIisFollowing={false}/>
                );
            })};
        </div>
    )
}