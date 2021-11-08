import React, {Component} from 'react';

class User extends Component {

    constructor(){
        super();
        this.state = {
            data: {
                gender: '',
                title: '',
                first_name: '',
                last_name: '',
                picture: ''
            }
        }
      }

    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('https://randomuser.me/api/');
        const resp_data = await response.json();
        console.log('resp_data=' + Object.entries(resp_data.results[0]));

        if (resp_data) {
            this.setState({
                data: {
                    gender: resp_data.results[0].gender,
                    title: resp_data.results[0].name.title,
                    first_name: resp_data.results[0].name.first,
                    last_name: resp_data.results[0].name.last,
                    picture: resp_data.results[0].picture.large
                }
            })
        }

        //this.setState({ totalReactPackages: data.total })
        // console.log(this.state)
    }


    render(){ 
        const data = this.state.data;
        for (const [key, value] of Object.entries(data)){
            console.log(`KEY: ${key}, VALUE: ${value}`)
        }
        console.table(data)
        console.log(typeof data)
        // const dataItems = data.map((data1) => <li> {data1}</li>);
        

        return(
            <section>
                <p><b> Random User</b></p>

                <ul>
                { Object.entries(data).map(([key, value],i) => <li key={i} value={key} > {key}: {value}  </li>) }
                </ul>
                <img src={data.picture} alt="user picture"  />
            </section>
        );
    }
}
  
export default User;