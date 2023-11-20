import React from "react";
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDeatails";

class GithubProfile extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
<div className="container">
  <div className="row">
    <div className="col">
<GithubProfileCard/>
    </div>
    <div className="col">
<GithubProfileDetails/>
    </div>
  </div>
</div>
      </div>
    )
  }
}

export default GithubProfile