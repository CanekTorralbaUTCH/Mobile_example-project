import React from "react"
import "./style/BadgesList.css"

class BadgesListItem extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="BadgeListItem mt-5">
                    <div className="col-5">
                        <div className="Item_profilePicture">
                            <img src={this.props.badge.profile_picture} alt="Profile_picture" />
                        </div>
                        <div className="Item_background">
                            <img src={this.props.badge.header_picture} alt="Header_image" />
                        </div>
                    </div>
                    <div className="col-7 my-5">
                        <div className="row">
                            <h4 className="text-center mt-3">
                                {this.props.badge.name} <i>{this.props.badge.age}</i>
                            </h4>
                            <p className="text-center">{this.props.badge.city}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

class BadgeList extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container List mb-5">
                    <div className="list-unstyled">
                        {this.props.badges.map( (badge) => {
                            return(
                                <div key={badge._id}>
                                    <BadgesListItem badge={badge}></BadgesListItem>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeList;