import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    width: 300px;
    border-radius: 10px;
    margin: 20px;
    background-color: #eee;
`

const Avatar = styled.img`
    width: 80px;
    padding:10px;
    border-radius: 50%;
`

export const UsersCard = ({ users }) => {
    return (
        <Wrapper>
            <div>
                <Avatar src={users.avatar_url} />
            </div>
            <div>
                <h4>{users.login}</h4>
            </div>
        </Wrapper>
    )
}