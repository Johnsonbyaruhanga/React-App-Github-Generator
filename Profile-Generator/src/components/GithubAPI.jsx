import React, { Fragment } from "react";
import GithubProfile from "./GithubProfile";
import Axios from "axios";
class GithubAPI extends React.Component {
  constructor(props) {
    super(props){
    this.state = {
      username: '',
      profile: null,
      repos : null
    };
    }
  
  }
  updateInput =(e) => {
    this.setState({
...this.state,
username : e.target.value
    });

  };

  searchUser = (e) =>{
    e.preventDefault();
  this.searchProfile();
  };

  searchProfile = () => {
    Axios.get(`http://api.github.com/users/${enter-username}`)
    .then(response=>{
      console.log(response.data);
      this.setState({profile:response.data
      });
    })
    .catch(error=>{
      console.error('Error fetching data:',error);
    });
    };

    

  render() {
    return (
      <Fragment>
        <pre>{JSON.stringify(this.state)}</pre>
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header bg-secondary text-white">
                  <h3>Github user search</h3>
                  <div className="card-body">
                    <form onSubmit={this.searchUser}>
                      <div className="form-group">
                        <input 
                        type="text" 
                        placeholder="user name" 
                        value={this.state.username} 
                        onChange={this.updateInput}
                        />
                      </div>
                      <div>
                        <input type="submit" value="search"/>
                        
                        
                      </div>
                    </form>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="container">
  <div className="row">
    <div className="col">
    <GithubProfile/>
    </div>
  </div>
</div>

      </Fragment>
    );
  }
}

export default GithubAPI;
