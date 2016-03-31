import React from 'react';
import ProfileCard from './profile-card';
import GithubCard from './github-card';
import RightSide from './right-side';
import EditorFrame from './editor-frame';
export default (props) => {
    return (
        <div className='row'>
            <div className='col s3'>
                <ProfileCard />
                <GithubCard />
            </div>
            <div className='col s9'>
                <EditorFrame />
            </div>
        </div>
    )
}
