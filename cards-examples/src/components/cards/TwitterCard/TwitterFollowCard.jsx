import { useState } from 'react';
import './twitterCard.pcss';

export function TwitterFollowCard({ userName, name, initialIisFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIisFollowing);

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const imgSrc = `https://unavatar.io/${userName}`;
    const buttonClassName = isFollowing 
    ? 'card__button following' 
    : 'card__button';

    const buttonLabel = isFollowing
    ? 'Following'
    : 'Follow';

    return (        
        <div className="card">
            <header className="card__header">
                <img src={imgSrc} className="card__header__image" />
                <div className="card__header__info">
                    <a href="#" className="card__header__info__name">{name}</a>
                    <span className="card__header__info__usr-name">@{userName}</span>
                </div>
            </header>
            <button onClick={handleClick} className={buttonClassName}>
                <span className="card__button__followText">{buttonLabel}</span>
                <span className="card__button__unfollow">Unfollow</span>
            </button>
        </div>
    )
}