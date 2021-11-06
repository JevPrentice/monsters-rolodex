import './App.css';
import {Component} from "react";
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: ''
        }
        // this.handleChange = this.handleChange.bind(this) (instead of this we can use =>fn )
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {

                const simoneJson = JSON.parse("{\n" +
                    "    \"id\": 11,\n" +
                    "    \"name\": \"Simone\",\n" +
                    "    \"username\": \"simone\",\n" +
                    "    \"email\": \"scoester50@gmail.com\",\n" +
                    "    \"address\": {\n" +
                    "        \"street\": \"Kulas Light\",\n" +
                    "        \"suite\": \"Apt. 556\",\n" +
                    "        \"city\": \"Gwenborough\",\n" +
                    "        \"zipcode\": \"92998-3874\",\n" +
                    "        \"geo\": {\n" +
                    "            \"lat\": \"-37.3159\",\n" +
                    "            \"lng\": \"81.1496\"\n" +
                    "        }\n" +
                    "    },\n" +
                    "    \"phone\": \"1-770-736-8031 x56442\",\n" +
                    "    \"website\": \"hildegard.org\",\n" +
                    "    \"company\": {\n" +
                    "        \"name\": \"Romaguera-Crona\",\n" +
                    "        \"catchPhrase\": \"Multi-layered client-server neural-net\",\n" +
                    "        \"bs\": \"harness real-time e-markets\"\n" +
                    "    }\n" +
                    "}")
                const jevJson = JSON.parse("{\n" +
                    "    \"id\": 12,\n" +
                    "    \"name\": \"Jev\",\n" +
                    "    \"username\": \"jev\",\n" +
                    "    \"email\": \"jevprentice@gmail.com\",\n" +
                    "    \"address\": {\n" +
                    "        \"street\": \"Kulas Light\",\n" +
                    "        \"suite\": \"Apt. 556\",\n" +
                    "        \"city\": \"Gwenborough\",\n" +
                    "        \"zipcode\": \"92998-3874\",\n" +
                    "        \"geo\": {\n" +
                    "            \"lat\": \"-37.3159\",\n" +
                    "            \"lng\": \"81.1496\"\n" +
                    "        }\n" +
                    "    },\n" +
                    "    \"phone\": \"1-770-736-8031 x56442\",\n" +
                    "    \"website\": \"hildegard.org\",\n" +
                    "    \"company\": {\n" +
                    "        \"name\": \"Romaguera-Crona\",\n" +
                    "        \"catchPhrase\": \"Multi-layered client-server neural-net\",\n" +
                    "        \"bs\": \"harness real-time e-markets\"\n" +
                    "    }\n" +
                    "}")

                users.push(simoneJson)
                users.push(jevJson)
                this.setState({monsters: users});
            })
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {
        const {monsters, searchField} = this.state;
        const search = searchField.toLowerCase();
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(search));
        return <div className="App">
            <h1>Monsters Rolodex</h1>
            <SearchBox placeHolder='Search monsters'
                       handleChange={this.handleChange}/>
            <CardList monsters={filteredMonsters}/>
        </div>
    }
}

export default App;
