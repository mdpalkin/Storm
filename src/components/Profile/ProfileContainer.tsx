import React from 'react';
import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateStatus, UserProfileType} from "../../redux/redusers/profile-reducer";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type MapStateToPropsType = {
    profile: UserProfileType | null
    status: string | null
}

type MapDispatchToPropsType = {
    getUserProfile: (userID: string) => void
    getUserStatus: (userID: string) => void
    updateStatus: (status: string) => void
}

type PathParamsType = {
    userId: string
}

type WithRouterType = RouteComponentProps<PathParamsType>

export type ProfileProps = MapStateToPropsType & MapDispatchToPropsType & WithRouterType

class ProfileContainer extends React.Component<ProfileProps> {


    componentDidMount() {
        let userID = this.props.match.params.userId

        if (!userID) {
            userID = "29052"
        }

        this.props.getUserProfile(userID)
        this.props.getUserStatus(userID)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => ({
    profile: state.profilePage["profile"],
    status: state.profilePage["status"]
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
