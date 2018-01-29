import React from 'react';

class ProfileCard extends React.Component
{


    render() {
        const {profile, addProfile} = this.props;

        return <h2 onClick={() => addProfile(profile)}>
            {profile}
        </h2>;
    }

}

export default ProfileCard;