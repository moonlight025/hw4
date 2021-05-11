import React from 'react';
import $ from 'jquery';

class UserGithub extends React.Component {     
    constructor(props) {         
        super(props);         
        this.state = {           
            username: '',
            userid:'',
            userlocation:'',
            userbio:'',           
            githubtUrl: '',           
            avatarUrl: '',         
        }     
    }     
    componentDidMount() 
    {         
        $.get(this.props.source, (result) => 
        {             
            console.log(result);             
            const data = result;             
            if (data) {               
                this.setState({                     
                    username: data.name,
                    userid:data.id,
                    userlocation:data.location,
                    userbio:data.bio,                     
                    githubtUrl: data.html_url,                     
                    avatarUrl: data.avatar_url               
                });             
            }         
        });     
    }     
    render() {         
        return (          
            <div>             
                <h3>{this.state.username}</h3>
                <h4>{this.state.userid}</h4>
                <h5>{this.state.userlocation}</h5>
                <h6>{this.state.userbio}</h6>             
                <img src={this.state.avatarUrl} />             
                <a href={this.state.githubtUrl}>Github Link</a>.           
                </div>         
                );     
            } 
        } 
export default UserGithub;