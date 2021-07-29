import React,{Component} from 'react'
import Body from './Body';
import { connect } from 'react-redux';
import { fetchShifts } from '../../actions';


class Dashboard extends Component {
    componentDidMount(){
       this.props.fetchShifts(); 
    }

    render() {
        // console.log(this.props);
        return(
            <Body shifts={this.props.shifts}/>
        )
        
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        shifts:Object.values(state.shifts)
    }
}




export default connect(mapStateToProps,{fetchShifts}) (Dashboard);

