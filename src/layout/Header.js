import React, { Component } from 'react'
import GuestHeader from './GuestHeader'
import UserHeader from './UserHeader'

export default class Header extends Component {
    render() {
        let navbar
        if (localStorage.getItem('authToken')) {
            navbar = <UserHeader />
        } else {
            navbar = <GuestHeader />
        }
        return (
            <div>
                {navbar}
            </div>
        )
    }
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNvY2lhbE1lZGlhIjp7ImdpdGh1YiI6bnVsbCwibGlua2VkaW4iOm51bGwsImZhY2Vib29rIjpudWxsLCJpbnN0YWdyYW0iOm51bGx9LCJwcm9maWxlUGljIjoibm9wcm9maWxlLmpwZyIsImRlc2NyaXB0aW9uIjoiYWhhYWFhIiwiZW1haWwiOiJkYWZmYUBnbWFpbC5jb20iLCJqb2IiOiJTdHVkZW50IiwiaXNNZW50b3IiOmZhbHNlLCJlZHVjYXRpb25zIjpbXSwic2tpbGxzIjpbXSwiX2lkIjoiNWNhNmNmMjRhZWM4ODUyOWU0ZTg2ZWFkIiwidXNlcm5hbWUiOiJkYWZmYSIsInBhc3N3b3JkIjoiJDJhJDEwJEExMEZ0RHg3Rmo5QTBieEpkTXUydE90WkR3SEkybC50Y1pweXovSmFiQnMxUHpEQXJ4VEZHIiwibmFtZSI6ImRhZmZhIiwiYWRkcmVzcyI6IlBhc3VydWFuIiwicGhvbmUiOiIwODU3NTU1NTc5NTQiLCJwcm9qZWN0cyI6W10sInJldmlld3MiOltdLCJfX3YiOjB9LCJpYXQiOjE1NTQ4ODMxMDcsImV4cCI6MTU1NDk2OTUwN30.xO5InyDO6R7KhA3JTbidwlFth2s7BekkKD1HNDGxjjU