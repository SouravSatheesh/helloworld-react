import React, {Component} from 'react';
import {View, Text , StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>Hello World !</Text>
        <Text> Just one hello world is not enough</Text>
      </View>
      <div className="jumbotron">
	  			<div className="logo">Jomato</div>
	  			<h1>Find the best Restaurants in your city</h1>
				<form className="searchBar"  onSubmit={getSearch}>
					<div>
						<select id="select_id" className="city form-control" onChange={updateID}>
		  					<option value="0" hidden>Select City</option>
		  					<option value="4">Bengaluru</option>
		  					<option value="3" >Mumbai</option>
		  					<option value="1">Delhi</option>
		  					<option value="6">Hyderabad</option>
		  					<option value="5">Pune</option>
		  					<option value="11290">Trivandrum</option>
		  					<option value="7">Chennai</option>
		  					<option value="11">Ahmedabad</option>				  
		  				</select>
						<input id="getText" type="text" className="restaurant" placeholder="Search for Restaurant" onChange={updateSearch}/>
		  				<button id = "getMessage" className = "search-btn">Search</button>
					</div>
				</form>
	  		</div>
    );  
  }
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white'
  }
});
export default App;
