import React from 'react';

class ProfileCard extends React.Component
{


    render() {
        const {profile} = this.props;

        return <h2>{profile}</h2>;
    }

}

export default ProfileCard;